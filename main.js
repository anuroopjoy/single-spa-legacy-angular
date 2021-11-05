System.register([], function (_export) {
    return {
        execute: function () {
            _export(
                window.singleSpaAngularjs.default({
                    angular: angular,
                    mainAngularModule: 'main-module',
                    uiRouter: true,
                    preserveGlobal: false
                })
            );
        }
    };
});

var app = angular.module('main-module', ['ui.router']);

app.config(function ($stateProvider) {
    $stateProvider.state({
        name: 'main',
        url: '/home',
        template: '<home />'
    });
});

app.component('home', {
    template: `First Name: <input type="text" ng-model="firstName" ng-change="vm.log()"><br>
    Last Name: <input type="text" ng-model="lastName"><br>
    <br>
    Full Name: {{firstName + ' ' +  lastName }}`,
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.$onInit = function () {
            console.log('mounting angularjs component');
            console.log(
                'legacyAngularjsApp status',
                singleSpa.getAppStatus('legacyAngularjsApp')
            );
        };

        vm.$onDestroy = function () {
            console.log('unmounting angularjs component!');
            console.log(
                'legacyAngularjsApp status',
                singleSpa.getAppStatus('legacyAngularjsApp')
            );
        };
        vm.log = function () {
            console.log(
                'legacyAngularjsApp status',
                singleSpa.getAppStatus('legacyAngularjsApp')
            );
        };
    }
});
