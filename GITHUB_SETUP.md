# Настройка GitHub Integration для GitHub Pages

Для полной работы системы комментариев и статистики загрузок через GitHub API необходимо выполнить следующие настройки:

## 🔧 1. Создание GitHub App (для OAuth)

1. Перейдите в [GitHub Developer Settings](https://github.com/settings/developers)
2. Нажмите "New GitHub App"
3. Заполните форму:

   - **App name**: `YourSite Comments System`
   - **Homepage URL**: `https://yourusername.github.io/your-repo-name`
   - **Authorization callback URL**: `https://yourusername.github.io/your-repo-name`
   - **Webhook URL**: оставьте пустым
   - **Permissions**:
     - Repository permissions:
       - Issues: Read & Write
       - Metadata: Read
       - Pull requests: Read
     - Account permissions:
       - Email addresses: Read

4. После создания скопируйте **Client ID**

## 🔧 2. Обновление конфигурации

Отредактируйте файл `src/lib/github-api.ts`:

```typescript
// GitHub repository configuration
const GITHUB_OWNER = "ваш-github-username"; // Замените на ваш GitHub username
const GITHUB_REPO = "название-вашего-репозитория"; // Замените на название репозитория
const GITHUB_CLIENT_ID = "ваш-client-id"; // Замените на Client ID вашего GitHub App
```

## 🔧 3. Создание Personal Access Token (альтернатива OAuth)

Для упрощения демо можно использовать Personal Access Token:

1. Перейдите в [GitHub Token Settings](https://github.com/settings/tokens)
2. Нажмите "Generate new token (classic)"
3. Выбе��ите права:
   - `public_repo` - для доступа к публичным репозиториям
   - `read:user` - для получения информации о пользователе
4. Скопируйте созданный токен

## 🔧 4. Настройка GitHub Releases для статистики

Создайте релизы в вашем репозитории:

1. Перейдите в раздел "Releases" вашего репозитория
2. Нажмите "Create a new release"
3. Заполните:
   - **Tag version**: `v2.1.0`
   - **Release title**: `Русификатор Half-Life v2.1.0`
   - **Description**: описание изменений
4. Прикрепите файлы русификатора как Assets
5. Опубликуйте релиз

## 🔧 5. Создание Issues для комментариев

Система автоматически создаст Issues для комментариев, но вы можете создать их заранее:

1. Перейдите в раздел "Issues" репозитория
2. Создайте новый Issue:
   - **Title**: `Comments: half-life-russifier`
   - **Body**: `Комментарии к проекту: half-life-russifier`
   - **Labels**: добавьте метку `comments`

## 🔧 6. Настройка GitHub Pages

1. В настройках репозитория перейдите в "Pages"
2. Выберите источник: "Deploy from a branch"
3. Выберите ветку: `main` и папку: `/ (root)` или `/docs`
4. Сохраните настройки

## 🔧 7. Деплой на GitHub Pages

Для Vite + GitHub Pages добавьте в `package.json`:

```json
{
  "scripts": {
    "build": "vite build",
    "deploy": "npm run build && npx gh-pages -d dist"
  }
}
```

Установите gh-pages:

```bash
npm install --save-dev gh-pages
```

Деплой:

```bash
npm run deploy
```

## 🔧 8. Настройка Vite для GitHub Pages

Обновите `vite.config.ts`:

```typescript
export default defineConfig({
  base: "/your-repo-name/", // Название вашего репозитория
  plugins: [react()],
  // ... остальные настройки
});
```

## 📊 Результат

После настройки у ва�� будет:

✅ **Реальная система комментариев** через GitHub Issues
✅ **OAuth аутентификация** через GitHub
✅ **Реальная статистика загрузок** из GitHub Releases
✅ **Автоматическое обновление данных** в реальном времени
✅ **Полная совместимость с GitHub Pages** (статический хостинг)

## 🚀 Демо режим

Для быстрого тестирования:

1. Система покажет заглушки если GitHub API недоступен
2. Можно использовать Personal Access Token вместо полного OAuth
3. Все данные берутся из реального GitHub API

## 📝 Примечания

- Все комментарии сохраняются как комментарии к GitHub Issues
- Статистика загрузок берется из GitHub Releases API
- Система полностью бесплатная и работает на GitHub Pages
- Лимиты GitHub API: 60 запросов в час без аутентификации, 5000 с аутентификацией
