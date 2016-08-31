"use strict";

 (function(){
   angular
   .module("girls", [
     "ui.router",
     "ngResource"
   ])
   .config([
     "$stateProvider",
     Router
   ]);

   function Router($stateProvider){
     $stateProvider
     .state("welcome", {
       url: "/",
       templateUrl: "../html/girls-welcome.html"
     })
     .state("index", {
       url: "/burnbook",
       template: "<h2>This is where all the ppl would be</h2>"
     })
   }

 })();
