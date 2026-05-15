<?php
declare(strict_types=1);

// CountriesAndCities SDK utility: result_headers

class CountriesAndCitiesResultHeaders
{
    public static function call(CountriesAndCitiesContext $ctx): ?CountriesAndCitiesResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
