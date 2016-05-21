import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';

import routing from './tour.routes';
import TourController from './tour.controller';

import './tour.scss';

import themeService from '../../services/themes.service';
import objectService from '../../services/objects.service';

export default angular.module('app.tour', [uirouter, ngCookies,  themeService, objectService])
    .config(routing)
    .controller('TourController', TourController)
    .name;
