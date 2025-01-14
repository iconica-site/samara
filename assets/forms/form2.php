<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);

    $to = "gp6samara@yandex.ru";
    $subject = "Новая заявка с сайта";
    $message = "Имя: $name\nТелефон: $phone\nВопрос: $email";
    $headers = "From: no-reply@yourwebsite.com\r\n" .
               "Reply-To: $phone\r\n" .
               "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Спасибо за ваше сообщение! Мы свяжемся с вами скоро.";
    } else {
        echo "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте снова.";
    }
}
?>
