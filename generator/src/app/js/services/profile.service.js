_profileHttpService.$inject = ["$http", "appConstatnts"];

function _profileHttpService($http, appConstatnts) {

  return {
    getProfile: () => {
      return $http.get("http://" + appConstatnts.apiServerHost + "/api/v1/profile",{ cache: true});
    }
  };
}

export default angular
  .module("ProfileHttpService", [])
  .factory("profileHttpService", _profileHttpService);
