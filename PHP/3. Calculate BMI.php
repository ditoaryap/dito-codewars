<?php

function bmi($weight, float $height)
{
    $bmi = $weight / ($height * $height);
    if ($bmi <= 18.5) {
        return "Underweight";
    } elseif ($bmi <= 25) {
        return "Normal";
    } elseif ($bmi <= 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

echo bmi(50, 1.8);
