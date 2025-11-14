<?php

// Cara 1
// function between(int $a, int $b): array
// {
//     $c = [];
//     for ($i = $a; $i <= $b; $i++) {
//         $c[] = $i;
//     }
//     return $c;
// }

// Cara 2
function between(int $a, int $b): array
{
    return range($a, $b);
}

print_r(between(1, 4));
