import HomeModule from './components/home/home.module';
import AboutModule from './components/about/about.module';
import ProfileModule from './components/profile/profile.module';
routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  let homeState = {
    name: 'home',
    url: '/',
    component: 'homeComponent',
    authenticate: false,
  };

  let aboutState = {
    name: 'about',
    url: '/about',
    component: 'aboutComponent',
    authenticate: false,
  };

  let profileState = {
    name: 'profile',
    url: '/profile',
    component: 'profileComponent',
    authenticate: true,
  };

  $stateProvider.state(homeState);
  $stateProvider.state(aboutState);
  $stateProvider.state(profileState);
}