require.config({

    baseUrl: 'scripts',

    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        fastclick: '../bower_components/fastclick/lib/fastclick'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'bootstrap', 'fastclick.init'], function () {
    'use strict';
});