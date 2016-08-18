(function () {
    'use strict';

    const color = require('colors');

    function info() {
        var message = [('[SUCCESS]'.green)],
            args = Array.prototype.slice.call(arguments);

        console.log.apply(console, message.concat(args));
    }

    function warning() {
        var message = [('[WARNING]'.yellow)],
            args = Array.prototype.slice.call(arguments);

        console.log.apply(console, message.concat(args));
    }

    function error() {
        var message = [('[ERROR]'.red)],
            args = Array.prototype.slice.call(arguments);

        console.log.apply(console, message.concat(args));
    }

    function highlight() {
        var arg = Array.prototype.slice.call(arguments)[0].magenta;

        console.log.apply(console, [arg]);
    }

    module.exports = {
        info: info,
        warning: warning,
        error: error,
        highlight: highlight
    };
})()