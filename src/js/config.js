
(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
     .when('/', {
      templateUrl: '/js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })
    .when('/posts', {
      templateUrl: '/js/components/posts/posts.view.html',
      controller: 'postsController',
      controllerAs: 'postsCtrl'
    })
    .when('/photos', {
      templateUrl: '/js/components/photos/photos.view.html',
      controller: 'photosController',
      controllerAs: 'photosCtrl'
    })
    .otherwise('/');
  }

})();
