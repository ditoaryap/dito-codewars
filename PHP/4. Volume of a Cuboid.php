<?php

function get_volume_of_cuboid($length, $width, $height)
{
    return $length * $width * $height;
}

echo get_volume_of_cuboid(1, 2, 3);
