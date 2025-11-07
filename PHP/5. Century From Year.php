<?php

function centuryFromYear(int $year): int
{
    return ceil($year / 100);
}

echo centuryFromYear(1005);
