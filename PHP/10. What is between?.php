<?php

function between(int $a, int $b): array
{
    $c = [];
    for ($i = $a; $i <= $b; $i++) {
        $c[] = $i;
    }
    return $c;
}

print_r(between(1, 4));
