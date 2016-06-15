
var angular = require('angular'),
        ngModule = angular.module('poc', []);

console.log(ngModule);

ngModule.controller('DefaultController', DefaultController);

function DefaultController() {
    this.today = new Date();
}


