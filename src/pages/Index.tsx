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

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "CS 1.6 Russian Pack",
      description:
        "Полный русификатор для Counter-Strike 1.6 с переводом интерфейса, меню и звуковых файлов.",
      category: "Русификатор",
      technologies: ["Localization", "Audio", "UI Translation"],
      downloads: 15420,
      stars: 89,
      image: "/placeholder.svg",
      type: "russifier",
    },
    {
      id: 2,
      title: "YaPB Waypoints Pack",
      description:
        "Коллекция waypoints для YaPB ботов на популярных картах Counter-Strike. Улучшенное поведение ботов.",
      category: "Waypoints",
      technologies: ["YaPB", "AI Navigation", "Game Logic"],
      downloads: 8930,
      stars: 67,
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
      downloads: 5240,
      stars: 43,
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
      downloads: 12100,
      stars: 95,
      image: "/placeholder.svg",
      type: "waypoints",
    },
  ];

  const skills = [
    { name: "Game Localization", icon: Languages, color: "text-primary" },
    { name: "Bot AI Development", icon: Bot, color: "text-accent" },
    { name: "Source Engine", icon: Code, color: "text-primary" },
    { name: "YaPB Integration", icon: Target, color: "text-accent" },
  ];

  return (
    <div className="min-h-screen bg-gradient-gaming">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center gaming-glow">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  GameMod Studio
                </h1>
                <p className="text-sm text-muted-foreground">
                  Русификаторы и модификации игр
                </p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#projects"
                className="text-foreground hover:text-primary transition-colors"
              >
                Проекты
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors"
              >
                О проектах
              </a>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/50 hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto text-center relative">
          <div className="inline-flex items-center space-x-2 bg-secondary/50 rounded-full px-4 py-2 mb-6 border border-border">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-gaming" />
            <span className="text-sm text-muted-foreground">
              Активная разработка проектов
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-float">
            Gaming Mods
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Создаю качественные русификаторы и waypoints для YaPB ботов. Улучшаю
            игровой опыт в Counter-Strike и других играх.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gaming-glow group">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Скачать проекты
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent/50 hover:bg-accent hover:text-accent-foreground"
            >
              <Eye className="w-5 h-5 mr-2" />
              Посмотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-12">Специализация</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="project-card text-center">
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
              Коллекция русификаторов, waypoints и инструментов для улучшения
              игрового опыта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="project-card overflow-hidden">
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
                        <span>{project.downloads.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>{project.stars}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Скачать
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4" />
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
              <Card className="project-card">
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

              <Card className="project-card">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Bot className="w-8 h-8 text-accent" />
                    <CardTitle>YaPB Waypoints</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Разрабатываю waypoints для YaPB ботов в Counter-Strike. Боты
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
