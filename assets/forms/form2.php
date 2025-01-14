<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Очистка и получение данных из формы
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);

    // Адрес получателя
    $to = "gp6samara@yandex.ru";

    // Тема письма
    $subject = "Новая заявка с сайта";

    // Сообщение
    $message = "Имя: $name\n";
    $message .= "Телефон: $phone\n";
    $message .= "Почта: $email\n";

    // Заголовки
    $headers = "From: no-reply@yourwebsite.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Отправка письма
    if (mail($to, $subject, $message, $headers)) {
        echo "<p style='color: green; text-align: center;'>Спасибо за ваше сообщение! Мы свяжемся с вами скоро.</p>";
    } else {
        echo "<p style='color: red; text-align: center;'>Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте снова.</p>";
    }
}
?>