<?php

function checkForFactor(int $base, int $factor): bool
{
    return $base % $factor == 0 ? true : false;
}

echo checkForFactor(10, 2);
