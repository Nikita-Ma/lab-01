# Лабораторная работа №1

Начало работы с Python и Django.

## Структура

```
lab01
├── README.md
├── __init__.py
├── asgi.py
├── helloworld.py
├── mygroup.py
├── settings.py
├── urls.py
└── wsgi.py
```

Корень репозитория (рядом с `lab01/`):

- `manage.py` — управление Django-проектом Lab 1
- база данных: `db_lab01.sqlite3` (создаётся после `migrate`)

## Запуск Python-скриптов

Из каталога `lab01/`:

```bash
python3 helloworld.py
python3 mygroup.py
```

Скрипт `mygroup.py` выводит список студентов и фильтрует их по среднему баллу (значение вводится с клавиатуры).

## Запуск Django

Из **корня репозитория** (там, где лежит `manage.py`):

```bash
python3 manage.py migrate
python3 manage.py createsuperuser
python3 manage.py runserver
```

- Сайт: http://127.0.0.1:8000/
- Админка: http://127.0.0.1:8000/admin/

База данных задана в `settings.py` как `db_lab01.sqlite3`.
