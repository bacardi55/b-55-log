"use strict";angular.module("jocsApp",["ngSanitize","PocsServices"]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"/jocs/views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("PocsServices",["ngResource"]).factory("Comments",["$http",function(e){var s="https://pocs.bacardi55.org/api/comments",o="aHR0cDovL2RlYmlhbjU1OjkwMDAvNTI5Nw==",n={get:function(n,t){e.jsonp(s+"?key="+o+"&callback=JSON_CALLBACK").success(n).error(t)},add:function(n,t,r){var c={key:o,newComment:n.newComment,href:n.href};e.post(s,c).success(t).error(r)}};return n}]).config(["$httpProvider",function(e){delete e.defaults.headers.common["X-Requested-With"],delete e.defaults.headers.common["x-csrftoken"],delete e.defaults.headers.common["x-insight"]}]),angular.module("jocsApp").controller("MainCtrl",["$scope","$window","Comments",function(e,s,o){e.comments=[],e.title="Jocs' on me",e.isError=0,e.isSuccess=0,e.message="",e.commentSent=!1;var n=function(s){"success"===s.status?e.comments=s.comments:(e.isSuccess=0,e.isError=1,e.message="Comments for this page couldn't be retrieved")},t=function(){e.isError=1,e.isSuccess=0,e.message="An error occured"},r=function(s){"success"===s.status?(e.isError=0,e.isSuccess=1,e.message=s.message):(e.message=s.message,e.isSuccess=0,e.isError=1),e.commentSent=!0,o.get(n,t)},c=function(){e.message="Comment couldn't be added",e.isError=1,e.isSuccess=0};o.get(n,t),e.addComment=function(){if("undefined"!==e.newComment){var s={href:window.location.href,newComment:e.newComment};o.add(s,r,c)}}}]);