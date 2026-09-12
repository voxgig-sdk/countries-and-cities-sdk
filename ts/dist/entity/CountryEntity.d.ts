import { CountriesAndCitiesEntityBase } from '../CountriesAndCitiesEntityBase';
import type { CountriesAndCitiesSDK } from '../CountriesAndCitiesSDK';
import type { Control } from '../types';
import type { Country, CountryListMatch, CountryCreateData } from '../CountriesAndCitiesTypes';
declare class CountryEntity extends CountriesAndCitiesEntityBase<Country> {
    constructor(client: CountriesAndCitiesSDK, entopts: any);
    make(this: CountryEntity): CountryEntity;
    list(this: any, reqmatch?: CountryListMatch, ctrl?: Control): Promise<CountryEntity[]>;
    create(this: any, reqdata?: CountryCreateData, ctrl?: Control): Promise<CountryEntity>;
}
export { CountryEntity };
