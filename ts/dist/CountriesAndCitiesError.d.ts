import { Context } from './Context';
declare class CountriesAndCitiesError extends Error {
    isCountriesAndCitiesError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { CountriesAndCitiesError };
