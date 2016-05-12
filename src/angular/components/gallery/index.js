import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './gallery.routes';
import GalleryController from './gallery.controller';

import './gallery.scss';

export default angular.module('app.gallery', [uirouter])
    .config(routing)
    .controller('galleryController', GalleryController)
    .name;
