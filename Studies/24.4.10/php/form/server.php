<?php

$firstName = $_GET['firstName'];
$lastName = $_GET['lastName'];

$msg = "First Name: $firstName, Last Name: $lastName";

file_put_contents('data.txt', "$msg\n", FILE_APPEND);

header('Location: thanks.php');
