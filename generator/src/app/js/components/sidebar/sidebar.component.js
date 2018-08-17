
_sidebarController.$inject = [
   '$rootScope', 
   '$mdSidenav',
   'configStorageService',
   'appTexts'
];

let SidebarComponent = {
   template: require('./sidebar.tmpl.html'),
   controller: _sidebarController
};

function _sidebarController($rootScope, $mdSidenav, configStorageService, appTexts) {
   let $ctrl = this;
   $ctrl.config = {};
   $ctrl.page = {};
   $ctrl.page.welcomeText = appTexts.welcomeText;

   $ctrl.links = [
      {
         "text": "About",
         "uisref": "about",
         "icon": "account_box"
      }
   ];

   $ctrl.toggleSidenav =
      //buildToggler('closeEventsDisabled');
      buildToggler('leftSidenav');

   $rootScope.$on('click', () => {
      this.toggleSidenav()
   });

   function buildToggler(componentId) {
      return function () {
         $mdSidenav(componentId).toggle();
      };
   };

   $ctrl.config = configStorageService.get();

};

export default angular.module('SidebarModule', [])
   .component('sidebarComponent', SidebarComponent);