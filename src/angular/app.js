import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './components/home';
import about from './components/about';

angular.module('app', [uirouter, home, about]).config(routing);
