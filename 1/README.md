## Логика на странице для проверки работы функции queue
1. Пользователь вводит значения:
a. размер массива;
b. лимит.
2. Нажимает Start.
3. Поля ввода и кнопка Start блокируются.
4. Генерируется массив случайных строк различной длины от 10 до 200 символов,
размер массива равен введенному значению.
5. Запускается функция queue, в которую передается массив, функция маппер и
лимит.
6. По мере выполнения функция маппер отображает на странице следующую
информацию:
a. заголовок -- порядковый номер в массиве + случайный текст из массива;
b. описание -- N-ое предложение из текста ниже (Текст для вставки), где N -
порядковый номер обрабатываемого элемента в массиве.
7. Блок и его заголовок отображается сразу, когда начинается обработка очередного
элемента из массива, а описание в конце выполнения функции маппер.
8. Порядок выводимых блоков должен совпадать с порядком в массиве, а описание
появляется по мере выполнения функции маппер.
9. Отображать процесс выполнения функции (Progress: 13 of 100).
10. После окончания работы поля ввода и кнопка Start снова активны.