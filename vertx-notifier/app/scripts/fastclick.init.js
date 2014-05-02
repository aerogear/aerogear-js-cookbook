/*global define */
define(['jquery', 'fastclick'], function ($, FastClick) {
    $(function() {
        FastClick.attach(document.body);
    });
});


/*
Don't forget to add a shim for addEventListener if you want to support IE8 and below.

Otherwise, if you're using jQuery:

$(function() {
    FastClick.attach(document.body);
});
*/