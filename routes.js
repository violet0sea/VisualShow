/**
* @Author: haiwang
* @Date:   2017-01-12 17:05:39
* @Email:  violet0sea@163.com
* @Last modified by:   haiwang
* @Last modified time: 2017-01-16 14:34:59
*/



import { Route, IndexRoute } from 'react-router';
import  App from './src/app';
import { Api, English, Example, Home, QuickStart } from './src/index';

const rootRoute = {
    component: App,
    path: '/',
    indexRoute: {
        component: Home
    },
    childRoutes: [{
        path: 'quickStart',
        component: QuickStart
    }, {
        path: 'api',
        component: Api
    }, {
        path: 'example',
        component: Example
    }, {
        path: 'english',
        component: English
    }]
}

export default rootRoute;
