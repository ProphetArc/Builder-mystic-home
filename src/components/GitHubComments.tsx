import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Send,
  Github,
  ThumbsUp,
  ThumbsDown,
  RefreshCw,
} from "lucide-react";
import { githubAPI, type GitHubComment } from "@/lib/github-api";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";

interface GitHubCommentsProps {
  projectId: string;
}

const GitHubComments = ({ projectId }: GitHubCommentsProps) => {
  const [comments, setComments] = useState<GitHubComment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadComments();
  }, [projectId]);

  const loadComments = async () => {
    setLoading(true);
    try {
      const commentsData = await githubAPI.getProjectComments(projectId);
      setComments(commentsData);
    } catch (error) {
      console.error("Error loading comments:", error);
    } finally {
      setLoading(false);
    }
  };

  const refreshComments = async () => {
    setRefreshing(true);
    try {
      const commentsData = await githubAPI.getProjectComments(projectId);
      setComments(commentsData);
    } catch (error) {
      console.error("Error refreshing comments:", error);
    } finally {
      setRefreshing(false);
    }
  };

  const handleSubmitComment = async () => {
    if (!newComment.trim() || !githubAPI.isUserAuthenticated()) return;

    setSubmitting(true);
    try {
      const success = await githubAPI.addComment(projectId, newComment);
      if (success) {
        setNewComment("");
        // Перезагружаем комментарии после добавления
        setTimeout(() => {
          loadComments();
        }, 1000);
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
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

  if (loading) {
    return (
      <Card className="project-card group">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            Загрузка комментариев...
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
            Отзывы ({comments.length})
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={refreshComments}
            disabled={refreshing}
          >
            <RefreshCw
              className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`}
            />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Форма добавления комментария */}
        {githubAPI.isUserAuthenticated() ? (
          <div className="space-y-3 p-4 bg-secondary/20 rounded-lg">
            <Textarea
              placeholder="Напишите ваш отзыв о проекте..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="min-h-[100px]"
            />
            <div className="flex justify-between items-center">
              <div className="flex items-center text-sm text-muted-foreground">
                <Github className="w-4 h-4 mr-1" />
                Комментарий будет опубликован через GitHub
              </div>
              <Button
                onClick={handleSubmitComment}
                disabled={!newComment.trim() || submitting}
                size="sm"
              >
                <Send className="w-4 h-4 mr-2" />
                {submitting ? "Отправка..." : "Отправить"}
              </Button>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-secondary/20 rounded-lg text-center">
            <p className="text-muted-foreground mb-3">
              Войдите через GitHub, чтобы оставить отзыв
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => githubAPI.authenticate()}
            >
              <Github className="w-4 h-4 mr-2" />
              Войти через GitHub
            </Button>
          </div>
        )}

        <Separator />

        {/* Список комментариев */}
        {comments.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>Пока нет отзывов</p>
            <p className="text-sm">Станьте первым, кто оставит комментарий!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="space-y-2">
                <div className="flex items-start space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src={comment.user.avatar_url}
                      alt={comment.user.login}
                    />
                    <AvatarFallback>
                      {comment.user.login.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">
                        {comment.user.login}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        <Github className="w-3 h-3 mr-1" />
                        GitHub
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(comment.created_at)}
                      </span>
                    </div>
                    <div className="prose prose-sm prose-invert max-w-none">
                      <p className="text-muted-foreground whitespace-pre-wrap">
                        {comment.body}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{comment.reactions["+1"]}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsDown className="w-4 h-4" />
                        <span>{comment.reactions["-1"]}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Separator />
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GitHubComments;
