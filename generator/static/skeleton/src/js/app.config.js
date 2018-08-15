import './components/about/about.component';

routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {
   $locationProvider.html5Mode(true);
   $urlRouterProvider.otherwise('/');

   let aboutState = {
      name: 'about',
      url: '/about',
      component: 'aboutComponent',
   };

   $stateProvider.state(aboutState);

};