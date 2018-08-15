_aboutController.$inject = [
    "appToastService",
 ];
 
 let AboutComponent = {
    template: require('./about.tpl.html'),
    controller: _aboutController
 };
 
 function _aboutController(appToastService) {
    let $ctrl = this;
    $ctrl.operation = "About";
   
 };
 
 export default angular.module('AboutModule', [])
    .component('aboutComponent', AboutComponent)