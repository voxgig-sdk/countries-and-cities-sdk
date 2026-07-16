<?php
declare(strict_types=1);

// CountriesAndCities SDK base feature

class CountriesAndCitiesBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CountriesAndCitiesContext $ctx, array $options): void {}
    public function PostConstruct(CountriesAndCitiesContext $ctx): void {}
    public function PostConstructEntity(CountriesAndCitiesContext $ctx): void {}
    public function SetData(CountriesAndCitiesContext $ctx): void {}
    public function GetData(CountriesAndCitiesContext $ctx): void {}
    public function GetMatch(CountriesAndCitiesContext $ctx): void {}
    public function SetMatch(CountriesAndCitiesContext $ctx): void {}
    public function PrePoint(CountriesAndCitiesContext $ctx): void {}
    public function PreSpec(CountriesAndCitiesContext $ctx): void {}
    public function PreRequest(CountriesAndCitiesContext $ctx): void {}
    public function PreResponse(CountriesAndCitiesContext $ctx): void {}
    public function PreResult(CountriesAndCitiesContext $ctx): void {}
    public function PreDone(CountriesAndCitiesContext $ctx): void {}
    public function PreUnexpected(CountriesAndCitiesContext $ctx): void {}
}
