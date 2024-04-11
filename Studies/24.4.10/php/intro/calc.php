<?php

function getSum($arr)
{
    $sum = 0;
    foreach ($arr as $num) {
        $sum += $num;
    }
    return $sum;
}
