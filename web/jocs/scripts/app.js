'use strict';

angular.module('jocsApp', ['PocsServices'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/jocs/views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
