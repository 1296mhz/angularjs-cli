import angular from 'angular';
import '@uirouter/angularjs';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';

import '../../node_modules/angular-material/angular-material.css';
import './app.css';
import routing from './app.config';
import AppCtrl from './components/app/app.controller';

import AppComponent from './components/app/app.component';
import UserCardModule from './components/userCard/userCard.module';
import AuthService from './services/auth.service';

import auth from './auth.run'
const MODULE_NAME = 'app';

AppCtrl.$inject = ['$mdSidenav'];

const ASSETS = ['ui.router', 'ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria'];
const APP_MODULES = ['HomeModule', 'AboutModule', 'UserCardModule', 'ProfileModule', 'AuthService'];
const MODULE_DEPS = ASSETS.concat(APP_MODULES);

angular.module(MODULE_NAME, MODULE_DEPS)
  .component("app", AppComponent)
  .config(routing)
 // .run(['$rootScope', '$state', 'authService', auth])

export default MODULE_NAME;