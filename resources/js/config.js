/**
 * Defines the API route we are using.
 */
var api_url = '';
var app_url = '';
var gaode_maps_js_api_key = '2df17693240ac9c4f4586105d5367aa6';

switch( process.env.NODE_ENV ){
    case 'development':
        api_url = 'http://www.laravel-vue.com/api/v1';
        app_url = 'http://www.laravel-vue.com';
        break;
    case 'production':
        api_url = 'http://www.laravel-vue.com/api/v1';
        app_url = 'http://www.laravel-vue.com';
        
        break;
}

export const ROAST_CONFIG = {
    API_URL: api_url,
    APP_URL: app_url,
    GAODE_MAPS_JS_API_KEY: gaode_maps_js_api_key
}