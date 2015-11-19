/*global $*/

$(document).ready(function() {
    'use strict';

    var getBackground = function() {

        var dims = '';

        // var winHeight = window.innerHeight;
        // var winWidth = window.innerWidth;
        // if(winHeight > winWidth && winWidth < 481){
        //     dims = '/h_' + winHeight;
        // }

        var backgrounds = [
            'http://res.cloudinary.com/durmsaznb/image/upload' + dims + '/bg3_cvqyli.jpg',
            'http://res.cloudinary.com/durmsaznb/image/upload' + dims + '/bg2_lsi3a0.jpg',
            'http://res.cloudinary.com/durmsaznb/image/upload' + dims + '/bg4_p1m2ox.jpg',
            'http://res.cloudinary.com/durmsaznb/image/upload' + dims + '/bg1_mfjutf.jpg'
        ];

        var num = 1;

        for(var i = 0; i < 500; i++) {
            num = parseInt(Math.random() * backgrounds.length + 1);
            if(num > 0 && num < backgrounds.length + 1) {
                break;
            }
            if(i === 499) {
                num = 1;
            }
        }

        return backgrounds[num - 1];

    };

    $('body').css('background-image', 'url("' + getBackground() + '")');

});
