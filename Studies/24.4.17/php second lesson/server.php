<?php

$videoId = $_POST['vid'];
$youtubeUrl = 'https://www.youtube.com/watch?v=' . $videoId;

header('Location: ' . $youtubeUrl);
