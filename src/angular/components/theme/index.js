import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './theme.routes';
import ThemeController from './theme.controller';

import './theme.scss';

export default angular.module('app.theme', [uirouter])
    .config(routing)
    .controller('ThemeController', ThemeController)
    .name;
