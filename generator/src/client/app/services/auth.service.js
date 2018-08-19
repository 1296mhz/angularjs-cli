function _authService($http, Session) {


    let _storage = {};
  /*
    return {
      set: (key, value) => {
        _storage[key] = value;
      },
      get: key => {
        if (!key) {
          return _storage;
        } else {
          return _storage[key];
        }
      }
    };
*/
    var authService = {};
       
    authService.login = function (credentials) {
      return $http
        .post('/login', credentials)
        .then(function (res) {
          Session.create(res.data.id, res.data.user.id,
                         res.data.user.role);
          return res.data.user;
        });
    };
   
    authService.isAuthenticated = function () {
      return !!Session.userId;
    };
   
    authService.isAuthorized = function (authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (authService.isAuthenticated() &&
        authorizedRoles.indexOf(Session.userRole) !== -1);
    };
   
    return authService;



  };
  
  export default angular
    .module("AuthService", [])
    .factory("authService", _authService);
  