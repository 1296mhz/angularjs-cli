import angular from 'angular';
import * as _ from 'underscore';
import moment from 'moment';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMessages from 'angular-messages';
import underscore from "angular-underscore";
import angularMoment from "angular-moment";
import ngUuid from "angular-uuid";
import "@uirouter/angularjs";

window._ = _;
window.moment = moment;

import "../../node_modules/angular-material/angular-material.css";
import "../css/style.css";

import appConstants from "./constants/app.constant";

import routing from "./app.config";

import "./components/screenContent/screenContent.component";
import "./components/header/header.component";
import "./components/sidebar/sidebar.component";
import ConfigStorageService from "./services/configStorage.service";
import AppToastServiceModule from "./services/appToast.service";

var appModule = angular
  .module("app", [
    "ui.router",
    "ngMaterial",
    "ngAria",
    "ngMessages",
    "underscore",
    "angularMoment",
    "angular-uuid",
    "ScreenContentModule",
    "HeaderModule",
    "SidebarModule",
    "ConfigStorageService",
    "AppToastServiceModule",
  ])
  .constant("appConstants", appConstants)
  .config(routing)
  

export default appModule;
