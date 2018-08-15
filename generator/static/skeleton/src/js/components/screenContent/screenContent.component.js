_screenContentController.$inject = [
  "configStorageService"
];

let ScreenContentComponent = {
  template: require("./screenContent.tmpl.html"),
  controller: _screenContentController
};

function _screenContentController(configStorageService) {
  let $ctrl = this;
  $ctrl.config = {};
  $ctrl.config = configStorageService.get();
};

export default angular
  .module("ScreenContentModule", [])
  .component("screenContentComponent", ScreenContentComponent)
  .controller("screenContentController", _screenContentController);
