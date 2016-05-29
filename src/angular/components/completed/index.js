import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';

import routing from './completed.routes';
import CompletedController from './completed.controller';

import './completed.scss';


export default angular.module('app.completed', [uirouter])
    .config(routing)
    .controller('CompletedController', CompletedController)
    .name;
