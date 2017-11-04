angular.module('myApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when('', '/');
        $stateProvider
        .state('home', {
          url: '/',
          templateUrl: './views/main.html',
          controller: 'mainCtrl'
        })
        .state('projects', {
          url: '/projects',
          templateurl: './views/projects.html',
          controller: 'mainCtrl'
        })
  })
