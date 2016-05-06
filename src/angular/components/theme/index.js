import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './theme.routes';
import ThemeController from './theme.controller';

import './theme.scss';

import themeService from '../../services/themes.service.js';

export default angular.module('app.theme', [uirouter, themeService])
    .config(routing)
    .controller('ThemeController', ThemeController)
    .name;
