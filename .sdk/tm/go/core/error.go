package core

type CountriesAndCitiesError struct {
	IsCountriesAndCitiesError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCountriesAndCitiesError(code string, msg string, ctx *Context) *CountriesAndCitiesError {
	return &CountriesAndCitiesError{
		IsCountriesAndCitiesError: true,
		Sdk:              "CountriesAndCities",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CountriesAndCitiesError) Error() string {
	return e.Msg
}
