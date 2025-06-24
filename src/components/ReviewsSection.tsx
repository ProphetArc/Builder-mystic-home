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
  Github,
  LogIn,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import { githubAPI } from "@/lib/github-api";

interface Review {
  id: number;
  author: string;
  avatar_url?: string;
  content: string;
  date: string;
}

interface ReviewsSectionProps {
  projectId: string;
}

const ReviewsSection = ({ projectId }: ReviewsSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  // Form state
  const [newReview, setNewReview] = useState({
    content: "",
  });

  useEffect(() => {
    loadReviews();
    checkAuthStatus();
  }, [projectId]);

  const checkAuthStatus = async () => {
    if (githubAPI.isUserAuthenticated()) {
      const user = await githubAPI.getCurrentUser();
      setCurrentUser(user);
    }
  };

  const loadReviews = async () => {
    setLoading(true);
    try {
      const reviewsData = await githubAPI.getProjectReviews(projectId);
      setReviews(reviewsData);
    } catch (error) {
      console.error("Error loading reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitReview = async () => {
    if (!newReview.content.trim() || !githubAPI.isUserAuthenticated()) return;

    setSubmitting(true);
    try {
      const success = await githubAPI.addProjectReview(projectId, {
        content: newReview.content,
      });

      if (success) {
        await loadReviews(); // Reload reviews
        setNewReview({ content: "" });
        setShowForm(false);
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogin = () => {
    githubAPI.authenticate();
  };

  const formatDate = (dateString: string) => {
    return formatDistanceToNow(new Date(dateString), {
      addSuffix: true,
      locale: ru,
    });
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
            Отз��вы ({reviews.length})
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={loadReviews}>
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Reviews Summary */}
        <div className="p-4 bg-secondary/20 rounded-lg text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="text-lg font-semibold">{reviews.length}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            {reviews.length === 0
              ? "Пока нет отзывов"
              : `${reviews.length} ${reviews.length === 1 ? "отзыв" : reviews.length < 5 ? "отзыва" : "отзывов"}`}
          </p>
        </div>

        {/* Add Review Button */}
        {!showForm && githubAPI.isUserAuthenticated() && (
          <Button
            onClick={() => setShowForm(true)}
            className="w-full"
            variant="outline"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Написать отзыв
          </Button>
        )}

        {/* Authentication Notice */}
        {!githubAPI.isUserAuthenticated() && (
          <div className="p-4 bg-secondary/20 rounded-lg text-center space-y-3">
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Github className="w-5 h-5" />
              <span>Войдите через GitHub, чтобы оставить отзыв</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Отзывы сохраняются в виде комментариев в GitHub Issues
            </p>
            <Button onClick={handleLogin} className="w-full">
              <LogIn className="w-4 h-4 mr-2" />
              Войти через GitHub
            </Button>
          </div>
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

            <div className="flex items-center space-x-3">
              {currentUser && (
                <>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={currentUser.avatar_url} />
                    <AvatarFallback>
                      <User className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-semibold">{currentUser.login}</span>
                </>
              )}
            </div>

            <Textarea
              placeholder="Поделитесь своим мнением о проекте..."
              value={newReview.content}
              onChange={(e) =>
                setNewReview({ ...newReview, content: e.target.value })
              }
              className="min-h-[100px]"
            />

            <div className="flex justify-between items-center">
              <div className="flex items-center text-sm text-muted-foreground">
                <Github className="w-4 h-4 mr-1" />
                Отзыв будет добавлен как комментарий в GitHub Issues
              </div>
              <Button
                onClick={handleSubmitReview}
                disabled={!newReview.content.trim() || submitting}
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
                    <AvatarImage src={review.avatar_url} />
                    <AvatarFallback>
                      <User className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm">
                        {review.author}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-muted-foreground">
                        {formatDate(review.date)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {review.content}
              </p>
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
