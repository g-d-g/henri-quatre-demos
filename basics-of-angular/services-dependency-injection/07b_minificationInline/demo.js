var demoModule=angular.module("demo",[]);demoModule.factory("someCustomService",["$http",function(a){return{test:function(){alert("This is our dummy function. $http is provided: "+!!a)}}}]),demoModule.controller("DemoController",["$scope","someCustomService",function(a,b){a.runTest=function(){b.test()}}]);