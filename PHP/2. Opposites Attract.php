<?php

function lovefunc(int $flower1, int $flower2): bool
{
    return ($flower1 + $flower2) % 2 == 0 ? false : true;
}

echo lovefunc(3, 2);

// echo $test;
