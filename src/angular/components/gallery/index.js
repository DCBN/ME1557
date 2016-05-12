import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './gallery.routes';
import GalleryController from './gallery.controller';

import './gallery.scss';

import objectService from '../../services/objects.service';

export default angular.module('app.gallery', [uirouter, objectService])
    .config(routing)
    .controller('GalleryController', GalleryController)
    .name;
