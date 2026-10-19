# Лабораторная работа №2

Web-страница с текстом, шаблоны и статические файлы (CSS).

## Структура

```
lab02
└── firstwebpage
    ├── firstwebpage
    │   ├── __init__.py
    │   ├── asgi.py
    │   ├── settings.py
    │   ├── urls.py
    │   └── wsgi.py
    ├── flatpages
    │   ├── __init__.py
    │   ├── admin.py
    │   ├── apps.py
    │   ├── migrations
    │   │   └── __init__.py
    │   ├── models.py
    │   ├── static
    │   │   ├── images
    │   │   │   └── lab-image.svg
    │   │   └── index.css
    │   ├── templates
    │   │   ├── index.html
    │   │   └── static_handler.html
    │   ├── tests.py
    │   └── views.py
    └── manage.py
```

## Запуск

```bash
cd lab02/firstwebpage
python3 manage.py migrate
python3 manage.py runserver
```

- Главная: http://127.0.0.1:8000/
- Hello: http://127.0.0.1:8000/hello/
- Админка: http://127.0.0.1:8000/admin/

Шаблон со стилями: `flatpages/templates/static_handler.html`, CSS: `flatpages/static/index.css`.
