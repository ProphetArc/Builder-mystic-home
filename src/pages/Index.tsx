import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Download,
  ExternalLink,
  Code,
  Gamepad2,
  Bot,
  Languages,
  Target,
  Star,
  Eye,
} from "lucide-react";
import GitHubAuth from "@/components/GitHubAuth";
import { githubAPI } from "@/lib/github-api";
import { useState, useEffect } from "react";

const Index = () => {
  const [projectStats, setProjectStats] = useState<{
    downloads: number | null;
    fileSize: number | null;
    loading: boolean;
  }>({
    downloads: null,
    fileSize: null,
    loading: true,
  });

  useEffect(() => {
    loadProjectData();
  }, []);

  const loadProjectData = async () => {
    try {
      const stats = await githubAPI.getDownloadStats();
      setProjectStats({
        downloads: stats.totalDownloads || null,
        fileSize: stats.latestFileSize || null,
        loading: false,
      });
    } catch (error) {
      console.error("Failed to load project stats:", error);
      setProjectStats({
        downloads: null,
        fileSize: null,
        loading: false,
      });
    }
  };

  const formatFileSize = (bytes?: number | null): string => {
    if (!bytes) return "Н/Д";
    const mb = bytes / (1024 * 1024);
    return `${Math.round(mb)} МБ`;
  };

  const formatDownloads = (downloads?: number | null): string => {
    if (!downloads) return "Н/Д";
    return downloads.toLocaleString();
  };

  const projects = [
    {
      id: 1,
      title: "Русификатор Half-Life",
      description:
        "Полный русификатор для Half-Life с переводом всех текстов, субтитров и звуковых файлов. Поддержка всех дополнений.",
      category: "Русификатор",
      technologies: [
        "Локализация",
        "Аудио",
        "Текст",
        "Xash3D FWGS",
        "GoldSrc Engine",
      ],
      downloads: projectStats.downloads,
      fileSize: projectStats.fileSize,
      loading: projectStats.loading,
      image: "/placeholder.svg",
      type: "russifier",
    },
    {
      id: 2,
      title: "Графы для YaPB",
      description:
        "Коллекция waypoints для YaPB ботов на популярных картах Counter-Strike. Улучшенное поведение ботов.",
      category: "Waypoints",
      technologies: ["YaPB", "AI Navigation", "Game Logic"],
      downloads: null,
      image: "/placeholder.svg",
      type: "waypoints",
    },
    {
      id: 3,
      title: "Source Engine Russian Localizer",
      description:
        "Инструмент для автоматической русификации игр на движке Source Engine.",
      category: "Инструмент",
      technologies: ["C++", "Source Engine", "Automation"],
      downloads: null,
      image: "/placeholder.svg",
      type: "tool",
    },
    {
      id: 4,
      title: "Advanced Bot Behavior Pack",
      description:
        "Усовершенствованные waypoints с поддержкой тактических движений и командной игры для YaPB.",
      category: "Waypoints",
      technologies: ["Advanced AI", "Team Tactics", "Strategic Play"],
      downloads: null,
      image: "/placeholder.svg",
      type: "waypoints",
    },
  ];

  const skills = [
    { name: "Локализация игр", icon: Languages, color: "text-primary" },
    { name: "Разработка и навигации ботов", icon: Bot, color: "text-accent" },
    { name: "Xash3D FWGS", icon: Code, color: "text-primary" },
    { name: "GoldSrc Engine", icon: Target, color: "text-accent" },
  ];

  return (
    <div className="min-h-screen bg-gradient-gaming">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center gaming-glow flex-shrink-0">
                <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="min-w-0">
                <h1 className="text-base sm:text-lg font-bold text-foreground truncate">
                  GameMod Studio
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                  Русификаторы и модификации игр
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="hidden sm:block">
                <GitHubAuth />
              </div>
              <div className="sm:hidden">
                <GitHubAuth mobileMode={true} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto text-center relative">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-float">
            Gaming Mods
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Создаю качественные русификаторы и графы для YaPB ботов.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-12">Специализация</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="project-card group text-center">
                <CardContent className="pt-6">
                  <skill.icon
                    className={`w-12 h-12 mx-auto mb-4 ${skill.color}`}
                  />
                  <h3 className="font-semibold text-foreground">
                    {skill.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl mb-4">Мои проекты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ��оллекция русификаторов, вэйпоинтов/графов и инструментов для
              улучшения игрового опыта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="project-card group overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.type === "russifier" && (
                      <Languages className="w-16 h-16 text-primary/50" />
                    )}
                    {project.type === "waypoints" && (
                      <Target className="w-16 h-16 text-accent/50" />
                    )}
                    {project.type === "tool" && (
                      <Code className="w-16 h-16 text-primary/50" />
                    )}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>
                          {project.loading
                            ? "Загрузка..."
                            : formatDownloads(project.downloads)}
                        </span>
                      </div>
                      {project.id === 1 && (
                        <div className="flex items-center space-x-1">
                          <span>📦</span>
                          <span>
                            {project.loading
                              ? "Загрузка..."
                              : formatFileSize(project.fileSize)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1" asChild>
                      <a
                        href={
                          project.id === 1
                            ? "/project/half-life-russifier"
                            : "#"
                        }
                      >
                        {project.id === 1 ? "Подробнее" : "Скачать"}
                        {project.id === 1 ? (
                          <ExternalLink className="w-4 h-4 ml-2" />
                        ) : (
                          <Download className="w-4 h-4 mr-2" />
                        )}
                      </a>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-4xl mb-8">О проектах</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <Card className="project-card group">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Languages className="w-8 h-8 text-primary" />
                    <CardTitle>Русификаторы</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Создаю качественные русификаторы для популярных игр.
                    Перевожу интерфейс, меню, диалоги и звуковые файлы. Все
                    переводы выполняются с учетом игрового контекста.
                  </p>
                </CardContent>
              </Card>

              <Card className="project-card group">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Bot className="w-8 h-8 text-accent" />
                    <CardTitle>Графы для YaPB</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Разрабатываю графы для YaPB ботов в Counter-Strike. Боты
                    получают улучшенную навигацию, тактическое поведение и более
                    реалистичную игру на различных картах.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">
              GameMod Studio
            </span>
          </div>
          <p className="text-muted-foreground mb-6">
            Создаю качественные модификации для улучшения игрового опыта
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="sm">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button variant="ghost" size="sm">
              <ExternalLink className="w-4 h-4 mr-2" />
              Документация
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-border/50 text-sm text-muted-foreground">
            © 2024 GameMod Studio. Все проекты распространяются свободно.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
