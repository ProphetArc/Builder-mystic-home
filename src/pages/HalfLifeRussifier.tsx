import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Download,
  ArrowLeft,
  Star,
  Eye,
  Calendar,
  FileText,
  Image as ImageIcon,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Clock,
  Languages,
  Gamepad2,
  Monitor,
  Volume2,
} from "lucide-react";
import { Link } from "react-router-dom";

const HalfLifeRussifier = () => {
  const projectStats = {
    downloads: 18750,
    stars: 142,
    watchers: 89,
    lastUpdate: "15 ноября 2024",
  };

  const changelog = [
    {
      version: "2.1.0",
      date: "15 ноября 2024",
      changes: [
        "Добавлены русские субтитры для всех роликов",
        "Исправлены ошибки в переводе научного персонала",
        "Обновлены звуковые файлы ГЛАДОСа на русском языке",
        "Улучшена синхронизация губ для русской речи",
      ],
    },
    {
      version: "2.0.5",
      date: "28 октября 2024",
      changes: [
        "Исправлен перевод описаний оружия",
        "Добавлена поддержка дополнения Opposing Force",
        "Оптимизированы размеры звуковых файлов",
      ],
    },
    {
      version: "2.0.0",
      date: "10 октября 2024",
      changes: [
        "Полная переработка интерфейса игры",
        "Новый перевод всех диалогов с учетом контекста",
        "Добавлена поддержка Blue Shift",
        "Исправлены критические ошибки предыдущей версии",
      ],
    },
  ];

  const comments = [
    {
      id: 1,
      author: "Гордон",
      avatar: "Г",
      date: "2 дня назад",
      content:
        "Отличный русификатор! Наконец-то можно нормально играть на родном языке. Перевод качественный, звук синхронизирован.",
      rating: 5,
    },
    {
      id: 2,
      author: "АлександрМ",
      avatar: "А",
      date: "1 неделю назад",
      content:
        "Спасибо за проделанную работу! Особенно впечатлили русские субтитры - теперь все понятно без знания английского.",
      rating: 5,
    },
    {
      id: 3,
      author: "BlackMesa_Fan",
      avatar: "B",
      date: "2 недели назад",
      content:
        "Есть небольшие проблемы с установкой на Steam версию, но в целом все работает отлично. Жду обновления!",
      rating: 4,
    },
  ];

  const features = [
    {
      icon: Languages,
      title: "Полная локализация",
      description: "Переведены все тексты интерфейса, диалоги и субтитры",
    },
    {
      icon: Volume2,
      title: "Русская озвучка",
      description: "Профессиональная озвучка всех персонажей на русском языке",
    },
    {
      icon: Monitor,
      title: "Адаптивный интерфейс",
      description:
        "Интерфейс адаптирован для русского языка без обрезки текста",
    },
    {
      icon: Gamepad2,
      title: "Совместимость",
      description: "Поддержка оригинала и всех официальных дополнений",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-gaming">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/" className="flex items-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Назад
                </Link>
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center gaming-glow">
                  <Languages className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">
                    Русификатор Half-Life
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Версия 2.1.0 • GoldSrc Engine
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Download className="w-4 h-4" />
                  <span>{projectStats.downloads.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span>{projectStats.stars}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{projectStats.watchers}</span>
                </div>
              </div>
              <Button className="gaming-glow">
                <Download className="w-4 h-4 mr-2" />
                Скачать
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <Card className="project-card group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl text-foreground">
                      Русификатор Half-Life
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                      Полный русификатор для Half-Life с переводом всех текстов,
                      субтитров и звуковых файлов. Поддержка всех дополнений.
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Русификатор</Badge>
                    <Badge variant="outline">GoldSrc Engine</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {features.map((feature, index) => (
                    <div key={index} className="text-center">
                      <feature.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <h4 className="font-semibold text-sm">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
                <Separator className="my-6" />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Обновлено: {projectStats.lastUpdate}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>Размер: 245 МБ</span>
                    <span>Лицензия: Free</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">
                  <FileText className="w-4 h-4 mr-2" />
                  Описание
                </TabsTrigger>
                <TabsTrigger value="installation">Установка</TabsTrigger>
                <TabsTrigger value="screenshots">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Скриншоты
                </TabsTrigger>
                <TabsTrigger value="changelog">
                  <Clock className="w-4 h-4 mr-2" />
                  Изменения
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6">
                <Card className="project-card group">
                  <CardContent className="pt-6">
                    <div className="prose prose-invert max-w-none">
                      <h3>О проекте</h3>
                      <p>
                        Русификатор Half-Life - это полная локализация
                        легендарной игры на русский язык. Проект включает в себя
                        не только перевод текстов, но и профессиональную русскую
                        озвучку всех персонажей.
                      </p>

                      <h4>Что переведено:</h4>
                      <ul>
                        <li>Все меню и интерфейс игры</li>
                        <li>Диалоги и реплики персонажей</li>
                        <li>Субтитры для всех роликов</li>
                        <li>Описания оружия и предметов</li>
                        <li>Заставки и титры</li>
                        <li>Сообщения системы</li>
                      </ul>

                      <h4>Особенности:</h4>
                      <ul>
                        <li>
                          Профессиональная озвучка с учетом оригинальной
                          интонации
                        </li>
                        <li>Синхронизация губ для русской речи</li>
                        <li>Адаптация интерфейса под длинные русские фразы</li>
                        <li>
                          Поддержка дополнений Opposing Force и Blue Shift
                        </li>
                        <li>Совместимость с модами</li>
                      </ul>

                      <h4>Технические требования:</h4>
                      <ul>
                        <li>Half-Life (любая версия)</li>
                        <li>Windows XP/Vista/7/8/10/11</li>
                        <li>245 МБ свободного места</li>
                        <li>Поддержка DirectSound</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="installation" className="mt-6">
                <Card className="project-card group">
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                          Автоматическая установка (рекомендуется)
                        </h3>
                        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                          <li>Скачайте установщик русификатора</li>
                          <li>
                            Запустите файл HalfLife_Russian_Installer.exe от
                            имени администратора
                          </li>
                          <li>Выберите папку с установленной игрой</li>
                          <li>
                            Дождитесь завершения установки и перезапустите игру
                          </li>
                        </ol>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                          <AlertCircle className="w-5 h-5 mr-2 text-accent" />
                          Ручная установка
                        </h3>
                        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                          <li>
                            Создайте резервную копию папки valve в директории
                            игры
                          </li>
                          <li>Распакуйте архив HalfLife_Russian_Manual.zip</li>
                          <li>
                            Скопируйте содержимое в папку Half-Life/valve/
                          </li>
                          <li>Подтвердите замену файлов</li>
                          <li>
                            В свойствах игры в Steam добавьте параметр: -game
                            valve
                          </li>
                        </ol>
                      </div>

                      <div className="bg-secondary/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-accent">
                          Важная информация:
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>
                            • Обязательно создайте резервную копию оригинальных
                            файлов
                          </li>
                          <li>
                            • Для Steam версии может потребоваться отключение
                            проверки целостности
                          </li>
                          <li>
                            • При проблемах с озвучкой проверьте настройки звука
                            в игре
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="screenshots" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card
                      key={i}
                      className="project-card group overflow-hidden"
                    >
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <ImageIcon className="w-16 h-16 text-primary/50" />
                        </div>
                        <div className="absolute bottom-2 left-2 right-2">
                          <Badge variant="secondary" className="text-xs">
                            Скриншот {i}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="changelog" className="mt-6">
                <div className="space-y-4">
                  {changelog.map((release, index) => (
                    <Card key={index} className="project-card group">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">
                            Версия {release.version}
                          </CardTitle>
                          <Badge variant="outline">{release.date}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {release.changes.map((change, changeIndex) => (
                            <li
                              key={changeIndex}
                              className="flex items-start space-x-2 text-muted-foreground"
                            >
                              <CheckCircle className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                              <span>{change}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Download Section */}
            <Card className="project-card group">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Скачивание
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full gaming-glow" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Скачать v2.1.0
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  <p>245 МБ • Обновлено 15 ноября 2024</p>
                </div>
                <Separator />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Загрузки:</span>
                    <span>{projectStats.downloads.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Рейтинг:</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current text-yellow-500" />
                      <span>4.9/5</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comments Section */}
            <Card className="project-card group">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Отзывы ({comments.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs">
                          {comment.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-sm">
                            {comment.author}
                          </span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < comment.rating
                                    ? "fill-current text-yellow-500"
                                    : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {comment.date}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {comment.content}
                    </p>
                    {comment.id < comments.length && (
                      <Separator className="mt-3" />
                    )}
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  Показать больше отзывов
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalfLifeRussifier;
