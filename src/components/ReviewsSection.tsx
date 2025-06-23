import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Send,
  User,
  Star,
  ThumbsUp,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";

interface Review {
  id: number;
  author: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  helpful: number;
  verified: boolean;
}

interface ReviewsSectionProps {
  projectId: string;
}

const ReviewsSection = ({ projectId }: ReviewsSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Form state
  const [newReview, setNewReview] = useState({
    author: "",
    rating: 5,
    title: "",
    content: "",
  });

  // Sample reviews data
  const sampleReviews: Review[] = [
    {
      id: 1,
      author: "Игорок_2000",
      rating: 5,
      title: "Отличный русификатор!",
      content:
        "Использую уже несколько лет. Перевод качественный, озвучка на высоте. Особенно понравилось, что поддерживается Xash3D. Рекомендую всем!",
      date: "2024-01-20T15:30:00Z",
      helpful: 12,
      verified: true,
    },
    {
      id: 2,
      author: "RetroGamer",
      rating: 4,
      title: "Хорошая работа",
      content:
        "Качественный перевод, установился без проблем. Единственное замечание - хотелось бы видеть поддержку некоторых модов.",
      date: "2024-01-15T10:20:00Z",
      helpful: 8,
      verified: false,
    },
    {
      id: 3,
      author: "Valve_Fan",
      rating: 5,
      title: "Лучший русификатор для Half-Life",
      content:
        "Пробовал много разных русификаторов, этот - лучший. Все переведено, даже мелкие детали. Спасибо разработчикам!",
      date: "2024-01-10T14:45:00Z",
      helpful: 15,
      verified: true,
    },
    {
      id: 4,
      author: "NewbieCoder",
      rating: 4,
      title: "Отлично для новичков",
      content:
        "Установка простая, инструкция понятная. Игра заиграла новыми красками на родном языке. Немного подтормаживает на слабом ПК, но это не критично.",
      date: "2023-12-28T09:15:00Z",
      helpful: 6,
      verified: false,
    },
  ];

  useEffect(() => {
    loadReviews();
  }, [projectId]);

  const loadReviews = async () => {
    setLoading(true);
    try {
      // Имитация загрузки
      await new Promise((resolve) => setTimeout(resolve, 800));
      setReviews(sampleReviews);
    } catch (error) {
      console.error("Error loading reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitReview = async () => {
    if (!newReview.author.trim() || !newReview.content.trim()) return;

    setSubmitting(true);
    try {
      // Имитация отправки отзыва
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const review: Review = {
        id: reviews.length + 1,
        author: newReview.author,
        rating: newReview.rating,
        title: newReview.title || "Отзыв пользователя",
        content: newReview.content,
        date: new Date().toISOString(),
        helpful: 0,
        verified: false,
      };

      setReviews([review, ...reviews]);
      setNewReview({ author: "", rating: 5, title: "", content: "" });
      setShowForm(false);
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return formatDistanceToNow(new Date(dateString), {
      addSuffix: true,
      locale: ru,
    });
  };

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : "0";

  const getRatingDistribution = () => {
    const distribution = [0, 0, 0, 0, 0]; // 1-5 stars
    reviews.forEach((review) => {
      distribution[review.rating - 1]++;
    });
    return distribution.reverse(); // 5-1 stars
  };

  if (loading) {
    return (
      <Card className="project-card group">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            Загрузка отзывов...
          </CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="project-card group">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            Отзывы ({reviews.length})
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={loadReviews}>
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Rating Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-secondary/20 rounded-lg">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
              <span className="text-3xl font-bold">{averageRating}</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= Math.round(Number(averageRating))
                        ? "text-yellow-500 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              На основе {reviews.length} отзывов
            </p>
          </div>

          <div className="space-y-1">
            {getRatingDistribution().map((count, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm">
                <span className="w-8">{5 - index} ★</span>
                <div className="flex-1 bg-secondary/50 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{
                      width:
                        reviews.length > 0
                          ? `${(count / reviews.length) * 100}%`
                          : "0%",
                    }}
                  />
                </div>
                <span className="w-8 text-muted-foreground">{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Add Review Button */}
        {!showForm && (
          <Button
            onClick={() => setShowForm(true)}
            className="w-full"
            variant="outline"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Написать отзыв
          </Button>
        )}

        {/* Review Form */}
        {showForm && (
          <div className="space-y-4 p-4 bg-secondary/20 rounded-lg">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Новый отзыв</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowForm(false)}
              >
                ✕
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="Ваше имя"
                value={newReview.author}
                onChange={(e) =>
                  setNewReview({ ...newReview, author: e.target.value })
                }
              />

              <div className="flex items-center space-x-2">
                <span className="text-sm">Оценка:</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 cursor-pointer ${
                        star <= newReview.rating
                          ? "text-yellow-500 fill-current"
                          : "text-gray-300"
                      }`}
                      onClick={() =>
                        setNewReview({ ...newReview, rating: star })
                      }
                    />
                  ))}
                </div>
              </div>
            </div>

            <Input
              placeholder="Заголовок отзыва (необязательно)"
              value={newReview.title}
              onChange={(e) =>
                setNewReview({ ...newReview, title: e.target.value })
              }
            />

            <Textarea
              placeholder="Расскажите о вашем опыте использования русификатора..."
              value={newReview.content}
              onChange={(e) =>
                setNewReview({ ...newReview, content: e.target.value })
              }
              className="min-h-[100px]"
            />

            <div className="flex justify-between items-center">
              <div className="flex items-center text-sm text-muted-foreground">
                <AlertCircle className="w-4 h-4 mr-1" />
                Отзыв будет опубликован после модерации
              </div>
              <Button
                onClick={handleSubmitReview}
                disabled={
                  !newReview.author.trim() ||
                  !newReview.content.trim() ||
                  submitting
                }
              >
                <Send className="w-4 h-4 mr-2" />
                {submitting ? "Отправка..." : "Опубликовать"}
              </Button>
            </div>
          </div>
        )}

        <Separator />

        {/* Reviews List */}
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="space-y-3 p-4 border border-border/50 rounded-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>
                      <User className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm">
                        {review.author}
                      </span>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Проверен
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-3 h-3 ${
                              star <= review.rating
                                ? "text-yellow-500 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(review.date)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {review.title && (
                <h5 className="font-semibold text-sm">{review.title}</h5>
              )}

              <p className="text-sm text-muted-foreground leading-relaxed">
                {review.content}
              </p>

              <div className="flex items-center justify-between pt-2">
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <ThumbsUp className="w-3 h-3 mr-1" />
                  Полезно ({review.helpful})
                </Button>
              </div>
            </div>
          ))}
        </div>

        {reviews.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>Пока нет отзывов. Будьте первым!</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ReviewsSection;
