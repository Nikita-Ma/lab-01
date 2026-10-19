# Лабораторная работа №7

JavaScript: фильтрация студентов в консоли и сворачивание постов через DOM/CSS.

## Структура

```
lab07
├── articles
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── migrations
│   │   ├── 0001_initial.py
│   │   └── __init__.py
│   ├── models.py
│   ├── static
│   │   ├── css
│   │   │   └── article.css
│   │   ├── images
│   │   │   └── lab-image.svg
│   │   └── js
│   │       ├── fold-post.js
│   │       └── helloworld.js
│   ├── templates
│   │   ├── archive.html
│   │   ├── article.html
│   │   ├── create_post.html
│   │   ├── login.html
│   │   └── register.html
│   ├── tests.py
│   └── views.py
├── blog
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── manage.py
└── README.md
```

## Запуск

```bash
cd lab07
python3 manage.py migrate
python3 manage.py runserver
```

Откройте http://127.0.0.1:8000/

1. В DevTools → Console появятся промпты фильтрации студентов (`helloworld.js`).
2. Кнопка «свернуть» / «развернуть» у каждой статьи управляется `fold-post.js` (класс `folded` на `.one-post`).
