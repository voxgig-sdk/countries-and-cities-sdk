<?php
declare(strict_types=1);

// CountriesAndCities SDK utility: feature_add

class CountriesAndCitiesFeatureAdd
{
    public static function call(CountriesAndCitiesContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
