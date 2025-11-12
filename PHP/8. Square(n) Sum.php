<?php

function square_sum(array $numbers): int
{
    $numbers = array_map(fn($n) => $n * $n, $numbers);
    return array_sum($numbers);
}
