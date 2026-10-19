# Лабораторная работа №6

Регистрация и авторизация пользователей.

## Структура

```
lab06
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
│   │   └── images
│   │       └── lab-image.svg
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
cd lab06
python3 manage.py migrate
python3 manage.py runserver
```

- Список статей: http://127.0.0.1:8000/
- Регистрация: http://127.0.0.1:8000/register/
- Вход: http://127.0.0.1:8000/login/
- Новая статья (после входа): http://127.0.0.1:8000/article/new/
