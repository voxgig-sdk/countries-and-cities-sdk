"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesAndCitiesError = void 0;
class CountriesAndCitiesError extends Error {
    isCountriesAndCitiesError = true;
    sdk = 'CountriesAndCities';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.CountriesAndCitiesError = CountriesAndCitiesError;
//# sourceMappingURL=CountriesAndCitiesError.js.map