document.getElementById('popupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    // Собираем данные формы
    const formData = new FormData(this);

    // Создаем объект XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Настраиваем запрос
    xhr.open('POST', this.action, true);

    // Устанавливаем заголовок для отправки данных в формате URL-encoded
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Обрабатываем ответ от сервера
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Обработка успешного ответа
            alert('Форма успешно отправлена!');
            // Можно добавить дополнительные действия, например, закрытие popup
            document.getElementById('popupOverlay').style.display = 'none';
        } else {
            // Обработка ошибки
            alert('Произошла ошибка при отправке формы.');
        }
    };

    // Отправляем данные формы
    xhr.send(new URLSearchParams(formData).toString());
});





// document.getElementById('formix').addEventListener('submit', function(event) {
//     event.preventDefault(); // Предотвращаем стандартную отправку формы

//     // Собираем данные формы
//     const formData = new FormData(this);

//     // Создаем объект XMLHttpRequest
//     const xhr = new XMLHttpRequest();

//     // Настраиваем запрос
//     xhr.open('POST', this.action, true);

//     // Устанавливаем заголовок для отправки данных в формате URL-encoded
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

//     // Обрабатываем ответ от сервера
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             // Обработка успешного ответа
//             alert('Форма успешно отправлена!');
//             // Можно добавить дополнительные действия, например, закрытие popup
//             document.getElementById('popUpMain').style.display = 'none';
//         } else {
//             // Обработка ошибки
//             alert('Произошла ошибка при отправке формы.');
//         }
//     };

//     // Отправляем данные формы
//     xhr.send(new URLSearchParams(formData).toString());
// });









