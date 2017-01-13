/**
* @Author: haiwang
* @Date:   2017-01-12 16:26:03
* @Email:  violet0sea@163.com
* @Last modified by:   haiwang
* @Last modified time: 2017-01-12 18:18:25
*/



'use strict';



import React from 'react'; // babel转义后使用React.creatElement, 需要引入React
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './public/css/reset.css';
import './public/css/index.scss';

const container = document.querySelector('.visualContainer');

ReactDOM.render(
    <Router
        routes={routes}
        history={browserHistory}
    />,
    container
);
