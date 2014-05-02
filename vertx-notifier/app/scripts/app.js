/*global define */
define(['angular'], function (app) {
    'use strict';

    return angular.module('app', [])

        .controller('SendController', function($scope) {
            $scope.name = 'Mr. Yoda';
            $scope.message = 'May Force be with You';

            $scope.sendMessage = function(name, message) {
                var message = {
                    name: name,
                    text: message
                };
                $scope.$emit('message', message);
            }
        })

        .controller('ListController', function($scope, $rootScope) {
            $scope.messages = [];

            $rootScope.$on('message', function(event, message) {
                $scope.messages.push(message);
            });
        })

        .filter('reverse', function() {
            return function(items) {
                return items.slice().reverse();
            };
        });
});