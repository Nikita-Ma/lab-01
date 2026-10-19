# Лабораторная работа №3

Модель `Article`, регистрация в админке, архив статей.

## Структура

```
lab03
├── articles
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── migrations
│   │   ├── 0001_initial.py
│   │   └── __init__.py
│   ├── models.py
│   ├── static
│   │   └── images
│   │       └── lab-image.svg
│   ├── templates
│   │   └── archive.html
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
cd lab03
python3 manage.py migrate
python3 manage.py createsuperuser
python3 manage.py runserver
```

- Архив статей: http://127.0.0.1:8000/
- Админка (создать статьи): http://127.0.0.1:8000/admin/
