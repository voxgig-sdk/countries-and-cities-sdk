<?php
declare(strict_types=1);

// CountriesAndCities SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class CountriesAndCitiesFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new CountriesAndCitiesBaseFeature();
            case "test":
                return new CountriesAndCitiesTestFeature();
            default:
                return new CountriesAndCitiesBaseFeature();
        }
    }
}
