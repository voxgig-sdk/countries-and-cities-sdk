<?php
declare(strict_types=1);

// CountriesAndCities SDK utility: result_body

class CountriesAndCitiesResultBody
{
    public static function call(CountriesAndCitiesContext $ctx): ?CountriesAndCitiesResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
