// ... (ваш предыдущий код) ...

// Функция для создания календаря
function createCalendar() {
    var calendarContainer = document.getElementById("calendar-container");

    // Создаем таблицу для календаря
    var calendarTable = document.createElement("table");
    calendarTable.classList.add("table", "table-bordered");

    var daysInMonth = 31; // Максимальное количество дней в месяце
    var daysPerRow = 7; // Количество дней в каждой строке

    var rows = Math.ceil(daysInMonth / daysPerRow);

    for (var row = 0; row < rows; row++) {
        var calendarRow = calendarTable.insertRow(row);

        for (var day = 1; day <= daysPerRow; day++) {
            var dayNumber = day + row * daysPerRow;
            if (dayNumber <= daysInMonth) {
                var dayCell = calendarRow.insertCell(-1);
                dayCell.innerHTML = dayNumber;
                dayCell.addEventListener("click", function() {
                    var selectedDate = this.innerHTML;
                    updateAvailableTimes(selectedDate);
                });
            }
        }
    }

    // Добавляем таблицу в контейнер
    calendarContainer.appendChild(calendarTable);
}

// Вызываем функцию создания календаря
createCalendar();

// ... (ваш предыдущий код) ...


// ... (ваш предыдущий код) ...

// ... (ваш предыдущий код) ...

// Добавляем обработчик события для кнопки выбора даты
document.getElementById("date-picker-btn").addEventListener("click", function() {
    // При нажатии кнопки, показываем таблицу с выбором даты
    document.getElementById("date-table-container").style.display = "block";
});

// Обновляем функцию для обновления времени при выборе даты
function updateAvailableTimes(selectedDate) {
    var availableTimes = [];

    // Здесь вы можете выполнить AJAX-запрос для получения доступных времен по выбранной дате
    // Пример: availableTimes = getAvailableTimes(selectedDate);

    // После получения доступных времен, обновляем выпадающий список
    var timeSelect = document.getElementById("selected-time");
    timeSelect.innerHTML = ""; // Очищаем текущие опции

    // Добавляем времена от 11:00 до 21:00
    for (var hour = 11; hour <= 21; hour++) {
        for (var minute = 0; minute < 60; minute += 15) {
            var timeString = (hour < 10 ? '0' : '') + hour + ':' + (minute === 0 ? '00' : minute);
            var option = document.createElement("option");
            option.value = timeString;
            option.text = timeString;
            timeSelect.add(option);
        }
    }

    // Активируем список времен
    timeSelect.disabled = false;

    // Закрываем таблицу с календарем
    document.getElementById("calendar-container").style.display = "none";

    // Заполняем поле "Дата" выбранным значением
    document.getElementById("selected-date").value = selectedDate;

    // Закрываем таблицу с выбором даты
    document.getElementById("date-table-container").style.display = "none";
}

// ... (ваш предыдущий код) ...

// Функция для создания таблицы выбора даты
function createDateTable() {
    var dateTableContainer = document.getElementById("date-table-container");

    // Создаем таблицу для даты
    var dateTable = document.createElement("table");
    dateTable.classList.add("table", "table-bordered");

    var daysInMonth = 31; // Максимальное количество дней в месяце
    var daysPerRow = 7; // Количество дней в каждой строке
    var rows = Math.ceil(daysInMonth / daysPerRow);

    var currentDay = 1;
    var rowCounter = 0;

    while (currentDay <= daysInMonth) {
        var dateTableRow = dateTable.insertRow(rowCounter);

        for (var day = 1; day <= daysPerRow; day++) {
            if (currentDay <= daysInMonth) {
                var dateCell = dateTableRow.insertCell(-1);
                dateCell.innerHTML = currentDay;

                // Проверяем, нужно ли сделать ячейку неактивной
                if (shouldDisableDate(currentDay)) {
                    dateCell.classList.add("disabled-date");
                } else {
                    dateCell.addEventListener("click", function() {
                        var selectedDate = this.innerHTML;
                        // Обновляем поле "Дата" с выбранным значением
                        document.getElementById("selected-date").value = selectedDate;
                        // Закрываем таблицу с выбором даты
                        dateTableContainer.style.display = "none";
                    });
                }

                currentDay++;
            }
        }
        rowCounter++;
    }

    // Добавляем таблицу в контейнер
    dateTableContainer.appendChild(dateTable);
}

// Функция для определения, нужно ли сделать ячейку неактивной
function shouldDisableDate(day) {
    var disabledDates = [4, 6, 10];

    return disabledDates.includes(day);
}

// Вызываем функцию создания таблицы выбора даты
createDateTable();

// ... (ваш предыдущий код) ...


// ... (ваш предыдущий код) ...

// ... (ваш предыдущий код) ...

// Добавляем обработчик события для кнопки выбора времени
document.getElementById("time-picker-btn").addEventListener("click", function() {
    // При нажатии кнопки, показываем таблицу с выбором времени
    document.getElementById("time-table-container").style.display = "block";
});

// Обновляем функцию для обновления времени при выборе даты
function updateAvailableTimes(selectedDate) {
    var availableTimes = [];

    // Здесь вы можете выполнить AJAX-запрос для получения доступных времен по выбранной дате
    // Пример: availableTimes = getAvailableTimes(selectedDate);

    // После получения доступных времен, обновляем выпадающий список
    var timeSelect = document.getElementById("selected-time");
    timeSelect.innerHTML = ""; // Очищаем текущие опции

    // Добавляем времена от 11:00 до 21:00
    for (var hour = 11; hour <= 21; hour++) {
        for (var minute = 0; minute < 60; minute += 15) {
            var timeString = (hour < 10 ? '0' : '') + hour + ':' + (minute === 0 ? '00' : minute);
            var option = document.createElement("option");
            option.value = timeString;
            option.text = timeString;
            timeSelect.add(option);
        }
    }

    // Активируем список времен
    timeSelect.disabled = false;

    // Закрываем таблицу с календарем
    document.getElementById("calendar-container").style.display = "none";

    // Заполняем поле "Дата" выбранным значением
    document.getElementById("selected-date").value = selectedDate;
}

// ... (ваш предыдущий код) ...

// ... (ваш предыдущий код) ...

// ... (ваш предыдущий код) ...

// Функция для создания таблицы выбора времени
function createTimeTable() {
    var timeTableContainer = document.getElementById("time-table-container");

    // Создаем таблицу для времени
    var timeTable = document.createElement("table");
    timeTable.classList.add("table", "table-bordered");

    // Начальное и конечное время
    var startHour = 11; // Начиная с 11:00
    var endHour = 21;   // Заканчивая 21:00
    var minutesInterval = 30; // Интервал 30 минут
    var columnsPerRow = 3;

    var currentHour = startHour;
    var rowCounter = 0;

    while (currentHour <= endHour) {
        var timeTableRow = timeTable.insertRow(rowCounter);

        for (var column = 0; column < columnsPerRow; column++) {
            for (var minute = 0; minute < 60; minute += minutesInterval) {
                var timeString = (currentHour < 10 ? '0' : '') + currentHour + ':' + (minute === 0 ? '00' : minute);
                var timeCell = timeTableRow.insertCell(-1);
                timeCell.innerHTML = timeString;

                // Проверяем, нужно ли сделать ячейку неактивной
                if (shouldDisableTime(currentHour, minute)) {
                    timeCell.classList.add("disabled-time");
                } else {
                    timeCell.addEventListener("click", function() {
                        var selectedTime = this.innerHTML;
                        // Обновляем поле "Время" с выбранным значением
                        document.getElementById("selected-time").value = selectedTime;
                        // Закрываем таблицу с выбором времени
                        timeTableContainer.style.display = "none";
                    });
                }

                currentHour++;
            }
        }

        rowCounter++;
    }

    // Добавляем таблицу в контейнер
    timeTableContainer.appendChild(timeTable);
}

// Функция для определения, нужно ли сделать ячейку неактивной
function shouldDisableTime(hour, minute) {
    var timeString = (hour < 10 ? '0' : '') + hour + ':' + (minute === 0 ? '00' : minute);
    var disabledTimes = ['11:00', '11:30', '15:00', '17:30'];

    return disabledTimes.includes(timeString);
}

// Вызываем функцию создания таблицы выбора времени
createTimeTable();











