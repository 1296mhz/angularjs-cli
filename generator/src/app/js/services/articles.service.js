_articlesHttpService.$inject = ['$http', 'appConstatnts'];

function _articlesHttpService($http, appConstatnts) {
   return {
      getArticles: () => {
         return $http.get('http://' + appConstatnts.apiServerHost + '/api/v1/articles');
      },
      getArticle: (id) => {
         return $http.get('http://' + appConstatnts.apiServerHost + '/api/v1/articles/' + id);
      },
      addArticle: (data) => {
         return $http.post('http://' + appConstatnts.apiServerHost + '/api/v1/articles/', data);
      },
      updateArticle: (id, data) => {
         return $http.put('http://' + appConstatnts.apiServerHost + '/api/v1/articles/' + id, data);
      },
      deleteArticle: (id) => {
         return $http.delete('http://' + appConstatnts.apiServerHost + '/api/v1/articles/' + id);
      }
   }
};

export default angular.module('ArticlesHttpService', [])
   .factory('articlesHttpService', _articlesHttpService);