<?php

$searchValue = $_GET['search'];
if (!$searchValue) {
    header("Location: index.php");
}

$searchLink = "https://www.google.com/search?q=$searchValue";

header("Location: $searchLink");
