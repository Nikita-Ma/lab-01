
groupmates = [
    {
        "name": "Алексей",
        "surname": "Иванов",
        "exams": ["Информатика", "Математика", "Web"],
        "marks": [5, 4, 5]
    },
    {
        "name": "Иван",
        "surname": "Петров",
        "exams": ["История", "Программирование", "Web"],
        "marks": [4, 4, 3]
    },
    {
        "name": "Кирилл",
        "surname": "Смирнов",
        "exams": ["Информатика", "Математика", "Python"],
        "marks": [5, 5, 5]
    },
    {
        "name": "Дмитрий",
        "surname": "Соколов",
        "exams": ["История", "Python", "Web"],
        "marks": [3, 4, 4]
    },
    {
        "name": "Максим",
        "surname": "Кузнецов",
        "exams": ["Информатика", "Математика", "Python"],
        "marks": [4, 5, 4]
    },
    {
        "name": "Андрей",
        "surname": "Попов",
        "exams": ["История", "Web", "Python"],
        "marks": [3, 3, 4]
    }
]


def print_students(students):
    print(
        "Имя".ljust(15),
        "Фамилия".ljust(15),
        "Экзамены".ljust(35),
        "Оценки".ljust(15),
        "Средний балл"
    )

    for student in students:
        average = sum(student["marks"]) / len(student["marks"])

        print(
            student["name"].ljust(15),
            student["surname"].ljust(15),
            str(student["exams"]).ljust(35),
            str(student["marks"]).ljust(15),
            f"{average:.2f}"
        )


def filter_students(students, min_average):
    filtered_students = []

    for student in students:
        average = sum(student["marks"]) / len(student["marks"])

        if average > min_average:
            filtered_students.append(student)

    return filtered_students


print("Все студенты:")
print_students(groupmates)

min_average = float(input("\nВведите минимальный средний балл: "))

filtered = filter_students(groupmates, min_average)

print(f"\nСтуденты со средним баллом выше {min_average}:")
print_students(filtered)
