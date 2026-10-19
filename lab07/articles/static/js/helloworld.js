console.log("helloworld.js loaded");

var groupmates = [
    {
        "name": "Александр",
        "surname": "Иванов",
        "group": "БСТ2352",
        "marks": [4, 3, 5]
    },
    {
        "name": "Иван",
        "surname": "Петров",
        "group": "БСТ2352",
        "marks": [4, 4, 4]
    },
    {
        "name": "Кирилл",
        "surname": "Смирнов",
        "group": "БАП1801",
        "marks": [5, 5, 5]
    },
    {
        "name": "Никита",
        "surname": "Морозов",
        "group": "БСТ2352",
        "marks": [5, 4, 5]
    }
];

console.log(groupmates);

var rpad = function(str, length) {
    str = str.toString();

    while (str.length < length) {
        str = str + " ";
    }

    return str;
};

var printStudents = function(students) {
    console.log(
        rpad("Имя", 15),
        rpad("Фамилия", 15),
        rpad("Группа", 10),
        rpad("Оценки", 20)
    );

    for (var i = 0; i < students.length; i++) {
        console.log(
            rpad(students[i]["name"], 15),
            rpad(students[i]["surname"], 15),
            rpad(students[i]["group"], 10),
            rpad(students[i]["marks"], 20)
        );
    }

    console.log("");
};

printStudents(groupmates);

var filterByGroup = function(students) {
    var group = prompt("Введите группу:");

    if (group === null) {
        return;
    }

    var filteredStudents = [];

    for (var i = 0; i < students.length; i++) {
        if (students[i]["group"] === group) {
            filteredStudents.push(students[i]);
        }
    }

    console.log("Студенты группы:", group);

    if (filteredStudents.length === 0) {
        console.log("Студенты не найдены");
    } else {
        printStudents(filteredStudents);
    }
};

filterByGroup(groupmates);

var filterByAverageMark = function(students) {
    var minAverage = parseFloat(
        prompt("Введите минимальный средний балл:")
    );

    if (isNaN(minAverage)) {
        console.log("Некорректное значение среднего балла");
        return;
    }

    var filteredStudents = [];

    for (var i = 0; i < students.length; i++) {
        var marks = students[i]["marks"];
        var sum = 0;

        for (var j = 0; j < marks.length; j++) {
            sum += marks[j];
        }

        var average = sum / marks.length;

        if (average > minAverage) {
            filteredStudents.push(students[i]);
        }
    }

    console.log(
        "Студенты со средним баллом выше",
        minAverage
    );

    if (filteredStudents.length === 0) {
        console.log("Студенты не найдены");
    } else {
        printStudents(filteredStudents);
    }
};

filterByAverageMark(groupmates);
