require.config({

    baseUrl: 'scripts',

    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        fastclick: '../bower_components/fastclick/lib/fastclick',
        angular: '../bower_components/angular/angular'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        angular: {
            deps: ['jquery'],
            init: function() {
                return this.angular;
            }
        }
    }
});

require(['angular', 'app', 'bootstrap', 'fastclick.init'], function () {
    'use strict';

    angular.bootstrap(document, ['app']);
});