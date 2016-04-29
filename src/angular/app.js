import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './components/home';
import about from './components/about';
import gallery from './components/gallery';
import tour from './components/tour';
import theme from './components/theme';

angular.module('app', [uirouter, home, about, gallery, tour, theme]).config(routing);
