<?php
declare(strict_types=1);

// CountriesAndCities SDK exists test

require_once __DIR__ . '/../countriesandcities_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CountriesAndCitiesSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
