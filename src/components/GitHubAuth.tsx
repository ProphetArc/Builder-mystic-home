import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Github, User, LogOut } from "lucide-react";
import { githubAPI } from "@/lib/github-api";

interface GitHubUser {
  login: string;
  avatar_url: string;
  name: string;
}

const GitHubAuth = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
    handleOAuthCallback();
  }, []);

  const checkAuthStatus = async () => {
    if (githubAPI.isUserAuthenticated()) {
      const userData = await githubAPI.getCurrentUser();
      if (userData) {
        setUser(userData);
      }
    }
    setLoading(false);
  };

  const handleOAuthCallback = async () => {
    const success = await githubAPI.handleOAuthCallback();
    if (success) {
      checkAuthStatus();
    }
  };

  const handleLogin = () => {
    githubAPI.authenticate();
  };

  const handleLogout = () => {
    githubAPI.logout();
    setUser(null);
  };

  if (loading) {
    return (
      <Button variant="outline" size="sm" disabled>
        <Github className="w-4 h-4 mr-2" />
        Загрузка...
      </Button>
    );
  }

  if (!user) {
    return (
      <Button variant="outline" size="sm" onClick={handleLogin}>
        <Github className="w-4 h-4 md:mr-2" />
        <span className="hidden md:inline">Войти через GitHub</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="pl-2">
          <Avatar className="w-6 h-6 mr-2">
            <AvatarImage src={user.avatar_url} alt={user.login} />
            <AvatarFallback>
              <User className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
          {user.name || user.login}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="w-4 h-4 mr-2" />
          Выйти
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GitHubAuth;
