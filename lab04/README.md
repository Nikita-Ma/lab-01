# Лабораторная работа №4

Страница отдельной статьи и вёрстка по макету.

## Структура

```
lab04
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
│   │   └── article.html
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
cd lab04
python3 manage.py migrate
python3 manage.py createsuperuser
python3 manage.py runserver
```

- Список статей: http://127.0.0.1:8000/
- Статья: http://127.0.0.1:8000/article/1/
- Админка: http://127.0.0.1:8000/admin/
