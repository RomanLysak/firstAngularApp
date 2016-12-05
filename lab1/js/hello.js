'use strict';

angular.module('app', [])
    .controller('HelloController', [function() {
        this.inputField = null;
        this.greeting = null;
        this.update = function () {
            this.greeting =  "Hello Controller " + this.inputField;
        }
    }]);