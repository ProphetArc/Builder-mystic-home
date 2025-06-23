import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Star, GitBranch, TrendingUp } from "lucide-react";
import { githubAPI, type ProjectDownloadStats } from "@/lib/github-api";

interface DownloadStatsProps {
  className?: string;
}

const DownloadStats = ({ className }: DownloadStatsProps) => {
  const [stats, setStats] = useState<ProjectDownloadStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const downloadStats = await githubAPI.getDownloadStats();
      setStats(downloadStats);
    } catch (error) {
      console.error("Error loading stats:", error);
    } finally {
      setLoading(false);
    }
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

  if (!stats) {
    return (
      <Card className={`project-card group ${className}`}>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Download className="w-5 h-5 mr-2" />
            Статистика недоступна
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
        <div className="grid grid-cols-1 gap-4">
          <div className="text-center p-4 bg-primary/10 rounded-lg">
            <Download className="w-8 h-8 mx-auto mb-3 text-primary" />
            <div className="text-3xl font-bold">
              {stats.totalDownloads.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Всего загрузок</div>
          </div>
        </div>

        {/* Статистика по релизам */}
        {stats.releases.length > 0 && (
          <>
            <div className="flex items-center space-x-2">
              <GitBranch className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Загрузки по версиям</span>
            </div>

            <div className="space-y-2 max-h-48 overflow-y-auto">
              {stats.releases.slice(0, 5).map((release, index) => (
                <div
                  key={release.tag_name}
                  className="flex items-center justify-between p-2 bg-secondary/20 rounded"
                >
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {release.tag_name}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {new Date(release.published_at).toLocaleDateString(
                        "ru-RU",
                      )}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Download className="w-3 h-3" />
                    <span>{release.download_count.toLocaleString()}</span>
                  </div>
                </div>
              ))}

              {stats.releases.length > 5 && (
                <div className="text-center text-sm text-muted-foreground">
                  и еще {stats.releases.length - 5} версий...
                </div>
              )}
            </div>
          </>
        )}

        {/* Информация об источнике данных */}
        <div className="text-xs text-muted-foreground text-center pt-2 border-t border-border/50">
          📊 Данные обновляются в реальном времени из GitHub Releases API
        </div>
      </CardContent>
    </Card>
  );
};

export default DownloadStats;
