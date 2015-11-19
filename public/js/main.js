/*global $*/

$(document).ready(function() {
    'use strict';

    var getBackground = function() {

        var backgrounds = [
            'bg1.jpg',
            'bg2.jpg',
            'bg3.jpg',
            'bg4.jpg'
        ];

        var num = 1;

        for(var i = 0; i < 500; i++) {
            num = parseInt(Math.random() * backgrounds.length + 1);
            if(num > 0 && num < backgrounds.length + 1) {
                break;
            }
        }

        return backgrounds[num - 1];

    };

    $('body').css('background-image', 'url("/images/backgrounds/' + getBackground() + '")');

});
