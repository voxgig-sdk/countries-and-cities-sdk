<?php
declare(strict_types=1);

// CountriesAndCities SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CountriesAndCitiesMakeContext
{
    public static function call(array $ctxmap, ?CountriesAndCitiesContext $basectx): CountriesAndCitiesContext
    {
        return new CountriesAndCitiesContext($ctxmap, $basectx);
    }
}
