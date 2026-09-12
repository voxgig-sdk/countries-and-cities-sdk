export interface City {
    city?: string;
    country?: string;
    data?: any[];
    error?: boolean;
    limit?: number;
    msg?: string;
    order?: string;
    orderBy?: string;
    populationCounts?: any[];
    state: string;
}
export interface CityListMatch {
    city?: string;
    country?: string;
    data?: any[];
    error?: boolean;
    limit?: number;
    msg?: string;
    order?: string;
    orderBy?: string;
    populationCounts?: any[];
    state?: string;
}
export interface CityCreateData {
    city?: string;
    country?: string;
    data?: any[];
    error?: boolean;
    limit?: number;
    msg?: string;
    order?: string;
    orderBy?: string;
    populationCounts?: any[];
    state: string;
    $action?: string;
    [action: string]: any;
}
export interface Country {
    Iso2?: string;
    Iso3?: string;
    capital?: string;
    cities?: any[];
    code?: string;
    country: string;
    currency?: string;
    flag?: string;
    iso2?: string;
    iso3?: string;
    lat?: number;
    long?: number;
    name?: string;
    populationCounts?: any[];
    states?: any[];
}
export interface CountryListMatch {
    Iso2?: string;
    Iso3?: string;
    capital?: string;
    cities?: any[];
    code?: string;
    country?: string;
    currency?: string;
    flag?: string;
    iso2?: string;
    iso3?: string;
    lat?: number;
    long?: number;
    name?: string;
    populationCounts?: any[];
    states?: any[];
    $action?: string;
    [action: string]: any;
}
export interface CountryCreateData {
    Iso2?: string;
    Iso3?: string;
    capital?: string;
    cities?: any[];
    code?: string;
    country: string;
    currency?: string;
    flag?: string;
    iso2?: string;
    iso3?: string;
    lat?: number;
    long?: number;
    name?: string;
    populationCounts?: any[];
    states?: any[];
    $action?: string;
    [action: string]: any;
}
