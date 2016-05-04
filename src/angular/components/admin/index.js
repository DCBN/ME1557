import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './admin.routes';
import AdminController from './admin.controller';

import './admin.scss';

import getThemes from '../../services/getThemes.service';

export default angular.module('app.admin', [uirouter, getThemes])
    .config(routing)
    .controller('AdminController', AdminController)
    .name;
