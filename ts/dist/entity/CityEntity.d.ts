import { CountriesAndCitiesEntityBase } from '../CountriesAndCitiesEntityBase';
import type { CountriesAndCitiesSDK } from '../CountriesAndCitiesSDK';
import type { Control } from '../types';
import type { City, CityListMatch, CityCreateData } from '../CountriesAndCitiesTypes';
declare class CityEntity extends CountriesAndCitiesEntityBase<City> {
    constructor(client: CountriesAndCitiesSDK, entopts: any);
    make(this: CityEntity): CityEntity;
    list(this: any, reqmatch?: CityListMatch, ctrl?: Control): Promise<CityEntity[]>;
    create(this: any, reqdata?: CityCreateData, ctrl?: Control): Promise<CityEntity>;
}
export { CityEntity };
