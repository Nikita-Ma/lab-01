# Лабораторная работа №5

Форма создания новой статьи (с проверкой уникальности названия).

## Структура

```
lab05
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
│   │   └── create_post.html
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
cd lab05
python3 manage.py migrate
python3 manage.py createsuperuser
python3 manage.py runserver
```

Войдите в админку или создайте суперпользователя, затем откройте:

- Список: http://127.0.0.1:8000/
- Новая статья (нужна авторизация): http://127.0.0.1:8000/article/new/
