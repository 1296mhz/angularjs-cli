
_headerController.$inject = ['$rootScope', 'appTexts'];

let HeaderComponent = {
    template: require('./header.tmpl.html'),
    controller: _headerController
};

function _headerController($rootScope, appTexts) {
    var $ctrl = this;

    $ctrl.page = {};
    $ctrl.page.welcomeText = appTexts.welcomeText;

    $ctrl.logout = function(){
        window.location.assign("/logout")
    }
    $ctrl.toggleSidenav = function(s){
        $rootScope.$emit('click', { message: "Hello"});
    }  
};

export default angular.module('HeaderModule', [])
    .component('headerComponent', HeaderComponent)