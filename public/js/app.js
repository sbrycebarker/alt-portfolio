angular.module('myapp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when('', '/');
        $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '..views/main.html',
          controller: 'mainCtrl'
        })
  })
