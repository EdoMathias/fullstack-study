<?php

// Printing
echo "Hello";

// Variables
$n1 = 10;
$n2 = 20;
$sum = $n1 + $n2;

echo "First number is: $n1, Second number is: $n2, Sum is: $sum<br>";
echo "First number: " . $n1 . ", Second number: " . $n2 . ", Sum: " . $sum . "<br>";
echo "$n1 + $n2 = $sum<br>";

if ($n1 > $n2) {
    echo "$n1 is greater than $n2<br>";
} else {
    echo "$n1 is less than $n2<br>";
}

function getAverage($n1, $n2)
{
    return ($n1 + $n2) / 2;
}

$avg = getAverage($n1, $n2);
echo "Average of $n1 and $n2 is: $avg<br>";

require_once "calc.php";

$numbers = [1, 2, 3, 4, 5];
$sum = getSum($numbers);
echo "Sum of numbers is: $sum<br>";
