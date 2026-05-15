<?php
declare(strict_types=1);

// CountriesAndCities SDK utility: prepare_body

class CountriesAndCitiesPrepareBody
{
    public static function call(CountriesAndCitiesContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
