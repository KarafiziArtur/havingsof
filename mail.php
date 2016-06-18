<?php

$recepient = "texnikabankrotov@gmail.com";
$sitename = "ИмуществоБанкротов.рф";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
    
$pagetitle = "Клиент \"$phone\"";
$message = "Имя: $name \nТелефон: $phone \nE-mail: $email";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $phone");