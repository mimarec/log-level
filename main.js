(function () {
    'use strict';

    const color = require('colors');

    function info() {
        var message = [('[INFO]'.cyan)],
            args = Array.prototype.slice.call(arguments);

        console.log.apply(console, message.concat(args));
    }

    function success() {
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

    function customLog(title, color) {
         var message = [(title[color])],
            args = Array.prototype.slice.call(arguments);
        
        args.splice(0, 2);

        console.log.apply(console, message.concat(args));
    }

    module.exports = {
        info: info,
        success: success,
        warning: warning,
        error: error,
        customLog: customLog,
        highlight: highlight
    };
})()