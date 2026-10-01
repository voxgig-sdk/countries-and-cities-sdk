export interface City {
    city: string;
    country: string;
    data?: Record<string, any>;
    error?: boolean;
    msg?: string;
    populationCounts?: any[];
    state: string;
}
export interface CityListMatch {
    city?: string;
    country?: string;
    data?: Record<string, any>;
    error?: boolean;
    msg?: string;
    populationCounts?: any[];
    state?: string;
}
export interface CityCreateData {
    city: string;
    country: string;
    data?: Record<string, any>;
    error?: boolean;
    msg?: string;
    populationCounts?: any[];
    state: string;
    $action?: string;
    [action: string]: any;
}
export interface Country {
    cities?: any[];
    country: string;
    data?: Record<string, any>;
    error?: boolean;
    flag?: string;
    iso2?: string;
    iso3?: string;
    msg?: string;
    name?: string;
}
export interface CountryListMatch {
    cities?: any[];
    country?: string;
    data?: Record<string, any>;
    error?: boolean;
    flag?: string;
    iso2?: string;
    iso3?: string;
    msg?: string;
    name?: string;
    $action?: string;
    [action: string]: any;
}
export interface CountryCreateData {
    cities?: any[];
    country: string;
    data?: Record<string, any>;
    error?: boolean;
    flag?: string;
    iso2?: string;
    iso3?: string;
    msg?: string;
    name?: string;
    $action?: string;
    [action: string]: any;
}
