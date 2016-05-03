import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './admin.routes';
import AdminController from './admin.controller';

import './admin.scss';

export default angular.module('app.admin', [uirouter])
    .config(routing)
    .controller('AdminController', AdminController)
    .name;
