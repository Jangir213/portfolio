<?php

$recepient = "jangirhus@gmail.com";
$sitename = "Письмо с сайта jangir.info";

$name = trim($_POST["name"]);
$phone = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nТелефон: $phone \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");