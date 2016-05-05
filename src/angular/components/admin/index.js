import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './admin.routes';
import AdminController from './admin.controller';

import './admin.scss';


import themeService from '../../services/themes.service';
import objectService from '../../services/objects.service';

export default angular.module('app.admin', [uirouter, themeService, objectService])
    .config(routing)
    .controller('AdminController', AdminController)
    .name;
