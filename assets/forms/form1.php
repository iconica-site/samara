<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $question = htmlspecialchars($_POST['question']);

    $to = "gp6samara@yandex.ru";
    $subject = "Новая заявка с сайта";
    $message = "Имя: $name\nТелефон: $phone\nВопрос: $question";
    $headers = "From: no-reply@yourwebsite.com\r\n" .
               "Reply-To: $phone\r\n" .
               "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo 'Спасибо! <a href="/">Вернуться на главную</a>';
    } else {
        echo 'Ошибка. <a href="/">Попробуйте снова</a>';
    }
}
?>