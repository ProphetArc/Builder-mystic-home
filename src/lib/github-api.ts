// Пример простой заглушки для githubAPI

export const githubAPI = {
  async getUser(username: string) {
    // Здесь должен быть реальный запрос к GitHub API
    // Например, через fetch:
    // return fetch(`https://api.github.com/users/${username}`).then(res => res.json());
    return { login: username, name: "Demo User" };
  },
  // Добавьте другие методы по необходимости
};
