import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, TrendingUp } from "lucide-react";
import { githubAPI, type ProjectDownloadStats } from "@/lib/github-api";

interface DownloadStatsProps {
  className?: string;
}

const DownloadStats = ({ className }: DownloadStatsProps) => {
  const [stats, setStats] = useState<ProjectDownloadStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const downloadStats = await githubAPI.getDownloadStats();
      setStats(downloadStats);
      setError(false);
    } catch (error) {
      console.error("Error loading stats:", error);
      setError(true);
      setStats(null);
    } finally {
      setLoading(false);
    }
  };

  const formatFileSize = (bytes?: number): string => {
    if (!bytes) return "Н/Д";
    const mb = bytes / (1024 * 1024);
    return `${Math.round(mb)} МБ`;
  };

  const formatDownloads = (downloads?: number): string => {
    if (downloads === undefined || downloads === null) return "Н/Д";
    return downloads.toLocaleString();
  };

  if (loading) {
    return (
      <Card className={`project-card group ${className}`}>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Download className="w-5 h-5 mr-2" />
            Загрузка статистики...
          </CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className={`project-card group ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center">
          <TrendingUp className="w-5 h-5 mr-2" />
          Статистика проекта
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Основная статистика */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-center p-4 bg-primary/10 rounded-lg">
            <Download className="w-8 h-8 mx-auto mb-3 text-primary" />
            <div className="text-3xl font-bold">
              {error || !stats ? "Н/Д" : formatDownloads(stats.totalDownloads)}
            </div>
            <div className="text-sm text-muted-foreground">Всего загрузок</div>
          </div>
          <div className="text-center p-4 bg-secondary/10 rounded-lg">
            <div className="w-8 h-8 mx-auto mb-3 flex items-center justify-center">
              📦
            </div>
            <div className="text-3xl font-bold">
              {error || !stats ? "Н/Д" : formatFileSize(stats.latestFileSize)}
            </div>
            <div className="text-sm text-muted-foreground">Размер файла</div>
          </div>
        </div>

        {/* Информация об источнике данных */}
        <div className="text-xs text-muted-foreground text-center pt-2 border-t border-border/50">
          {error
            ? "⚠️ Не удалось загрузить данные из GitHub API"
            : "📊 Данные обновляются в реальном времени из GitHub Releases API"}
        </div>
      </CardContent>
    </Card>
  );
};

export default DownloadStats;
