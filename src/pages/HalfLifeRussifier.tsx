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
import GitHubAuth from "@/components/GitHubAuth";
import ReviewsSection from "@/components/ReviewsSection";
import DownloadStats from "@/components/DownloadStats";
import {
  Download,
  ArrowLeft,
  Star,
  Eye,
  Calendar,
  FileText,
  Image as ImageIcon,
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
  const changelog = [
    {
      version: "2.3",
      date: "31 июля 2023",
      changes: [
        "Исправление текстового перевода, добавлен перевод новых строк для Xash3D FWGS 0.20.x/0.21.x",
      ],
    },
    {
      version: "2.2",
      date: "30 июля 2021",
      changes: [
        "Снова мелкие исправления текста Укорачивание или переиначивание текста чтобы влезал в меню (в настройках персонажа, видео и звука)",
        'Добавлен перевод новой строчки "Покинуть игру" в gameui_russian.txt которая появилась в обновлении Half-Life 1 build 8684 от 3 августа 2020 года в Steam',
        "Обновлены картинки с переводом WON/Xash3D меню, также добавил картинки в TGA формате для поддержки бета версии Xash3D FWGS 0.20.1",
      ],
    },
    {
      version: "2.1",
      date: "18 июля 2020",
      changes: [
        "Добавлены некоторые отсутствующие строчки в MainUI, исправления перевода, перенос конфига в папку userconfig.d (чтобы не заменять пользовательский userconfig.cfg)",
      ],
    },
    {
      version: "2.0",
      date: "31 мая 2020",
      changes: [
        "Добавлен перевод MainUI (пояснительный текст возле кнопок меню и всплывающие сообщения)",
        "Мелкая корректировка текста",
      ],
    },
    {
      version: "1.1",
      date: "17 мая 2019",
      changes: ["Добавлен перевод главного меню и HD озвучка H.E.V костюма"],
    },
    {
      version: "1.0",
      date: "15 июля 2018",
      changes: ["Первый релиз русификатора"],
    },
  ];

  const features = [
    {
      icon: Languages,
      title: "Полная локализация",
      description: "Переведены все диалоги, тексты и графика интерфейса",
    },
    {
      icon: Volume2,
      title: "Русская озвучка",
      description: "Озвучка всех персонажей на русском языке",
    },
    {
      icon: () => (
        <svg
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 4v16" />
          <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
          <path d="M9 20h6" />
        </svg>
      ),
      title: "Шрифты с поддержкой кириллицы",
      description:
        "Поддержка отображения кириллицы в кон��оли и внутриигровом чате",
    },
    {
      icon: Gamepad2,
      title: "Совместимость",
      description:
        "Поддержка WON и Steam версий движка GoldSource, и движка Xash3D FWGS",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-gaming">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-1">
              <Button variant="ghost" size="sm" asChild className="p-2 sm:px-3">
                <Link to="/" className="flex items-center">
                  <ArrowLeft className="w-4 h-4 md:mr-2" />
                  <span className="hidden md:inline">Назад</span>
                </Link>
              </Button>
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center gaming-glow flex-shrink-0">
                  <Languages className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h1 className="text-base sm:text-lg md:text-xl font-bold text-foreground truncate">
                    Русификатор Half-Life
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
              <GitHubAuth />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <Card className="project-card group">
              <CardHeader className="space-y-3 sm:space-y-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-3 sm:space-y-0">
                  <div className="min-w-0 flex-1">
                    <CardTitle className="text-xl sm:text-2xl text-foreground leading-tight">
                      Русификатор Half-Life
                    </CardTitle>
                    <CardDescription className="text-base sm:text-lg mt-2">
                      Полный русификатор для Half-Life с переводом всех текстов,
                      субтитров и звуковых файлов. Поддержка всех дополнений.
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:flex-shrink-0">
                    <Badge variant="secondary">Русификатор</Badge>
                    <Badge variant="outline" className="hidden sm:inline-flex">
                      GoldSrc Engine
                    </Badge>
                    <Badge variant="outline" className="hidden sm:inline-flex">
                      Xash3D Engine
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4 sm:pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="text-center sm:text-left lg:text-center p-3 sm:p-0 bg-secondary/20 sm:bg-transparent rounded-lg sm:rounded-none"
                    >
                      <div className="flex sm:block lg:block items-center sm:items-start lg:items-center space-x-3 sm:space-x-0 lg:space-x-0">
                        <div className="flex-shrink-0">
                          {typeof feature.icon === "function" ? (
                            <div className="w-8 h-8 sm:mx-auto lg:mx-auto mb-0 sm:mb-2 lg:mb-2 text-primary">
                              <feature.icon />
                            </div>
                          ) : (
                            <feature.icon className="w-8 h-8 sm:mx-auto lg:mx-auto mb-0 sm:mb-2 lg:mb-2 text-primary flex-shrink-0" />
                          )}
                        </div>
                        <div className="min-w-0 flex-1 sm:flex-none lg:flex-none">
                          <h4 className="font-semibold text-sm sm:text-sm">
                            {feature.title}
                          </h4>
                          <p className="text-xs sm:text-xs text-muted-foreground mt-1">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Separator className="my-4 sm:my-6" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>Обновлено: 31 июля 2023</span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm">
                    <span>Лицензия: Free</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
                <TabsTrigger
                  value="description"
                  className="flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2 p-2 sm:p-3"
                >
                  <FileText className="w-4 h-4" />
                  <span className="text-xs sm:text-sm">Описание</span>
                </TabsTrigger>
                <TabsTrigger
                  value="installation"
                  className="flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2 p-2 sm:p-3"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 2v8" />
                    <path d="m16 6-4 4-4-4" />
                    <rect width="20" height="8" x="2" y="14" rx="2" />
                    <path d="M6 18h.01" />
                    <path d="M10 18h.01" />
                  </svg>
                  <span className="text-xs sm:text-sm">Установка</span>
                </TabsTrigger>
                <TabsTrigger
                  value="screenshots"
                  className="flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2 p-2 sm:p-3"
                >
                  <ImageIcon className="w-4 h-4" />
                  <span className="text-xs sm:text-sm">Скриншоты</span>
                </TabsTrigger>
                <TabsTrigger
                  value="changelog"
                  className="flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2 p-2 sm:p-3"
                >
                  <Clock className="w-4 h-4" />
                  <span className="text-xs sm:text-sm">Изменения</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6">
                <Card className="project-card group">
                  <CardContent className="pt-6">
                    <div className="prose prose-invert max-w-none">
                      <h4>Авторы:</h4>
                      <ul>
                        <li>Русификатор текста: $_Vladislav</li>
                        <li>
                          Русификатор озвучки: «XXI век», Triada Games, Buka
                          Entertainment, 7Wolf, Fargus и Kudos.
                        </li>
                        <li>Озвучка солдатов: Пётр Бойко</li>
                        <li>
                          Озвучка оповещений Чёрной Мезы: Евгений Синельников
                        </li>
                        <li>
                          Русификатор главного меню для Xash3D (WON-Style):
                          Владислав Сухов ($_Vladislav)
                        </li>
                        <li>
                          Озвучка H.E.V костюма в HD качестве: Buka
                          Entertainment
                        </li>
                        <li>Русификатор MainUI Xash3D: $_Vladislav</li>
                      </ul>

                      <h4>В него входит:</h4>
                      <ul>
                        <li>Русификатор текста</li>
                        <li>Русификатор озвучки</li>
                        <li>Русские шрифты</li>
                        <li>Русификатор главного меню</li>
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
                        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                          >
                            <path
                              fill="#00b0ff"
                              d="M20 25.026L5.011 25 5.012 37.744 20 39.818zM22 25.03L22 40.095 42.995 43 43 25.066zM20 8.256L5 10.38 5.014 23 20 23zM22 7.973L22 23 42.995 23 42.995 5z"
                            />
                          </svg>
                          Windows:
                        </h3>
                        <p className="text-muted-foreground">
                          Извлеките содержимое архива в папку valve,
                          расположенной в директории движка (где находится
                          xash3d.exe)
                        </p>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                          >
                            <path
                              fill="#30dc80"
                              d="M24,14.088C11.427,14.088,1.108,23.716,0,36h48C46.892,23.716,36.573,14.088,24,14.088z M33.179,27.079c0-1.104,0.895-1.999,1.999-1.999c1.104,0,1.999,0.895,1.999,1.999c0,1.104-0.895,1.999-1.999,1.999	C34.074,29.078,33.179,28.183,33.179,27.079z M12.822,29.078c-1.104,0-1.999-0.895-1.999-1.999c0-1.104,0.895-1.999,1.999-1.999	s1.999,0.895,1.999,1.999C14.821,28.183,13.926,29.078,12.822,29.078z"
                            />
                            <path
                              fill="#30dc80"
                              d="M34.038,19.313c-0.14,0-0.281-0.035-0.41-0.11c-0.393-0.227-0.527-0.729-0.301-1.122l5.197-9.008	c0.227-0.394,0.729-0.529,1.122-0.301c0.393,0.227,0.527,0.729,0.301,1.122l-5.197,9.008C34.598,19.166,34.322,19.313,34.038,19.313	z"
                            />
                            <path
                              fill="#30dc80"
                              d="M13.962,19.313c-0.284,0-0.56-0.148-0.712-0.411L8.054,9.894C7.827,9.501,7.962,8.999,8.354,8.772	c0.392-0.228,0.895-0.093,1.122,0.301l5.197,9.008c0.227,0.394,0.092,0.896-0.301,1.122C14.243,19.278,14.102,19.313,13.962,19.313z"
                            />
                          </svg>
                          Android:
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">
                              Xash3D FWGS 0.21:
                            </h4>
                            <p className="text-muted-foreground">
                              Извлеките содержимое архива в папку valve,
                              расположенной в директории движка:{" "}
                              <code className="bg-secondary/50 px-2 py-1 rounded text-foreground font-mono text-xs sm:text-sm break-all">
                                Android/data/su.xash.engine.test/files
                              </code>
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">
                              Xash3D FWGS 0.19.2 и ниже:
                            </h4>
                            <p className="text-muted-foreground">
                              Извлеките содержимое архива в папку valve которая
                              находится в директории, указанной на главном
                              экране движка.
                            </p>
                          </div>
                        </div>
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
          <div className="space-y-4 sm:space-y-6">
            {/* Download Section with Real Stats */}
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
                  Скачать v2.3
                </Button>
                <div className="text-center text-xs sm:text-sm text-muted-foreground">
                  <p>Обновлено 31 июля 2023</p>
                </div>
              </CardContent>
            </Card>

            {/* Real Download Stats */}
            <DownloadStats />

            {/* Reviews Section */}
            <ReviewsSection projectId="half-life-russifier" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalfLifeRussifier;
