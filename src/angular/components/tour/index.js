import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './tour.routes';
import TourController from './tour.controller';

import './tour.scss';

export default angular.module('app.tour', [uirouter])
    .config(routing)
    .controller('TourController', TourController)
    .name;
