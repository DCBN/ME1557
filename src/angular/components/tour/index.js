import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';

import routing from './tour.routes';
import TourController from './tour.controller';

import './tour.scss';

import themeService from '../../services/themes.service';
import objectService from '../../services/objects.service';
import answerService from '../../services/answer.service';

import fileUploadDirective from '../../directives/fileUpload.directive';

export default angular.module('app.tour', [uirouter, ngCookies,  themeService, objectService, answerService, fileUploadDirective])
    .config(routing)
    .controller('TourController', TourController)
    .name;
