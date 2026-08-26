<?php
declare(strict_types=1);

// CountriesAndCities SDK configuration

class CountriesAndCitiesConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "CountriesAndCities",
                "slug" => "countries-and-cities",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://countriesnow.space/api/v0.1",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "city" => [],
                    "country" => [],
                ],
            ],
            "entity" => [
        'city' => [
          'fields' => [
            [
              'name' => 'city',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'City name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'country',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'Country name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'data',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'error',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'limit',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'msg',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'order',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'orderBy',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'populationCounts',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'state',
              'req' => true,
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'city',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/countries/population/cities',
                  'parts' => [
                    'countries',
                    'population',
                    'cities',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => [
                      'city' => '`reqdata`',
                    ],
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/countries/population/cities/filter',
                  'parts' => [
                    'countries',
                    'population',
                    'cities',
                    'filter',
                  ],
                  'select' => [
                    '$action' => 'filter',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/countries/state/cities',
                  'parts' => [
                    'countries',
                    'state',
                    'cities',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/countries/population/cities',
                  'parts' => [
                    'countries',
                    'population',
                    'cities',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'country' => [
          'fields' => [
            [
              'name' => 'Iso2',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'Iso3',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'capital',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'cities',
              'short' => 'List of cities in the country',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'code',
              'short' => 'Country code',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'country',
              'op' => [
                'create' => [
                  'type' => '`$STRING`',
                ],
                'list' => [
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'short' => 'Country name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'currency',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'flag',
              'short' => 'URL to the country flag image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'iso2',
              'short' => 'ISO 3166-1 alpha-2 code',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'iso3',
              'short' => 'ISO 3166-1 alpha-3 code',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'lat',
              'short' => 'Latitude',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'long',
              'short' => 'Longitude',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'name',
              'short' => 'Country name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'populationCounts',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'states',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'country',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/countries/capital',
                  'parts' => [
                    'countries',
                    'capital',
                  ],
                  'select' => [
                    '$action' => 'capital',
                  ],
                  'transform' => [
                    'req' => [
                      'country' => '`reqdata`',
                    ],
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/countries/currency',
                  'parts' => [
                    'countries',
                    'currency',
                  ],
                  'select' => [
                    '$action' => 'currency',
                  ],
                  'transform' => [
                    'req' => [
                      'country' => '`reqdata`',
                    ],
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/countries/flag/images',
                  'parts' => [
                    'countries',
                    'flag',
                    'images',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => [
                      'country' => '`reqdata`',
                    ],
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/countries/iso',
                  'parts' => [
                    'countries',
                    'iso',
                  ],
                  'select' => [
                    '$action' => 'iso',
                  ],
                  'transform' => [
                    'req' => [
                      'country' => '`reqdata`',
                    ],
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/countries/population',
                  'parts' => [
                    'countries',
                    'population',
                  ],
                  'select' => [
                    '$action' => 'population',
                  ],
                  'transform' => [
                    'req' => [
                      'country' => '`reqdata`',
                    ],
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/countries/positions',
                  'parts' => [
                    'countries',
                    'positions',
                  ],
                  'select' => [
                    '$action' => 'position',
                  ],
                  'transform' => [
                    'req' => [
                      'country' => '`reqdata`',
                    ],
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/countries/states',
                  'parts' => [
                    'countries',
                    'states',
                  ],
                  'select' => [
                    '$action' => 'state',
                  ],
                  'transform' => [
                    'req' => [
                      'country' => '`reqdata`',
                    ],
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/countries',
                  'parts' => [
                    'countries',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/countries/codes',
                  'parts' => [
                    'countries',
                    'codes',
                  ],
                  'select' => [
                    '$action' => 'code',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/countries/flag/images',
                  'parts' => [
                    'countries',
                    'flag',
                    'images',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/countries/population',
                  'parts' => [
                    'countries',
                    'population',
                  ],
                  'select' => [
                    '$action' => 'population',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/countries/positions',
                  'parts' => [
                    'countries',
                    'positions',
                  ],
                  'select' => [
                    '$action' => 'position',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return CountriesAndCitiesFeatures::make_feature($name);
    }
}
