# Проект: Зміна кольорів квадратів

## Опис проекту

Цей проект реалізує клієнт-серверну взаємодію, де кольори квадратів змінюються місцями при натисканні кнопки "Старт". Сервер на Node.js обробляє запити, повертаючи нові значення кольорів.

---

## Структура проекту

Проект складається з наступних файлів:

```text
project_folder/
├── index.html  // HTML-документ із інтерфейсом
├── styles.css  // Стилі для квадратів та кнопки
├── script.js   // JavaScript для клієнтської логіки
├── server.js   // Сервер Node.js
```

---

## Як запустити проект

### Крок 1: Підготовка файлів

1. Створіть вказану структуру проекту.
2. Скопіюйте відповідний код у файли `index.html`, `styles.css`, `script.js` і `server.js`.

### Крок 2: Запуск сервера

1. Переконайтеся, що у вас встановлено Node.js.
2. У терміналі перейдіть до папки проекту та запустіть сервер командою:

   ```bash
   node server.js
   ```

3. Сервер буде доступний за адресою:

   ```url
   http://localhost:3000
   ```

### Крок 3: Відкриття сторінки

1. У браузері перейдіть за адресою:

   ```url
   http://localhost:3000
   ```

2. Натискайте кнопку "Старт", щоб побачити зміну кольорів квадратів.

---

## Як це працює

### Сервер (`server.js`)

- **Маршрут `/`**: Повертає HTML-документ.
- **Маршрут `/styles.css`**: Повертає CSS-файл.
- **Маршрут `/script.js`**: Повертає JavaScript-файл.
- **Маршрут `/swap-colors`**: Міняє кольори квадратів місцями (зберігаючи стан) і повертає нові значення.

### Клієнт (`script.js`)

- Надсилає GET-запит до сервера за маршрутом `/swap-colors`.
- Отримує нові значення кольорів квадратів.
- Оновлює кольори та текст квадратів у DOM.

---

## Приклад використання

1. Запустіть сервер.
2. Відкрийте сторінку у браузері.
3. Натискайте кнопку "Старт" — кольори квадратів змінюватимуться місцями кожного разу.
