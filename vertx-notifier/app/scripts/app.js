/*global define */
define(['angular', 'aerogear'], function (app, AeroGear) {
    'use strict';

    return angular.module('app', [])

        .controller('SendController', function($scope, messenger) {
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

        .factory('messenger', function() {
            return AeroGear.Notifier({
                name: 'messages',
                type: 'vertx',
                settings: {
                    autoConnect: true,
                    connectURL: 'localhost:9000'
                }
            })
        })

        .filter('reverse', function() {
            return function(items) {
                return items.slice().reverse();
            };
        });
});