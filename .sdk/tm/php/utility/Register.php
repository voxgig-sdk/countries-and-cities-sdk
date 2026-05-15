<?php
declare(strict_types=1);

// CountriesAndCities SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

CountriesAndCitiesUtility::setRegistrar(function (CountriesAndCitiesUtility $u): void {
    $u->clean = [CountriesAndCitiesClean::class, 'call'];
    $u->done = [CountriesAndCitiesDone::class, 'call'];
    $u->make_error = [CountriesAndCitiesMakeError::class, 'call'];
    $u->feature_add = [CountriesAndCitiesFeatureAdd::class, 'call'];
    $u->feature_hook = [CountriesAndCitiesFeatureHook::class, 'call'];
    $u->feature_init = [CountriesAndCitiesFeatureInit::class, 'call'];
    $u->fetcher = [CountriesAndCitiesFetcher::class, 'call'];
    $u->make_fetch_def = [CountriesAndCitiesMakeFetchDef::class, 'call'];
    $u->make_context = [CountriesAndCitiesMakeContext::class, 'call'];
    $u->make_options = [CountriesAndCitiesMakeOptions::class, 'call'];
    $u->make_request = [CountriesAndCitiesMakeRequest::class, 'call'];
    $u->make_response = [CountriesAndCitiesMakeResponse::class, 'call'];
    $u->make_result = [CountriesAndCitiesMakeResult::class, 'call'];
    $u->make_point = [CountriesAndCitiesMakePoint::class, 'call'];
    $u->make_spec = [CountriesAndCitiesMakeSpec::class, 'call'];
    $u->make_url = [CountriesAndCitiesMakeUrl::class, 'call'];
    $u->param = [CountriesAndCitiesParam::class, 'call'];
    $u->prepare_auth = [CountriesAndCitiesPrepareAuth::class, 'call'];
    $u->prepare_body = [CountriesAndCitiesPrepareBody::class, 'call'];
    $u->prepare_headers = [CountriesAndCitiesPrepareHeaders::class, 'call'];
    $u->prepare_method = [CountriesAndCitiesPrepareMethod::class, 'call'];
    $u->prepare_params = [CountriesAndCitiesPrepareParams::class, 'call'];
    $u->prepare_path = [CountriesAndCitiesPreparePath::class, 'call'];
    $u->prepare_query = [CountriesAndCitiesPrepareQuery::class, 'call'];
    $u->result_basic = [CountriesAndCitiesResultBasic::class, 'call'];
    $u->result_body = [CountriesAndCitiesResultBody::class, 'call'];
    $u->result_headers = [CountriesAndCitiesResultHeaders::class, 'call'];
    $u->transform_request = [CountriesAndCitiesTransformRequest::class, 'call'];
    $u->transform_response = [CountriesAndCitiesTransformResponse::class, 'call'];
});
