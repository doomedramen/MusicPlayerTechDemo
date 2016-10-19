var getColors = require('./getColors');
var $ = require('jquery');
var images = [
    'public/img/albums/SlayerRepentless.png',
    'public/img/albums/Leviathan_special_edition_cover.jpg',
    'public/img/albums/arcgods.jpg',
    'public/img/albums/Architects_-_Lost_Forever_Lost_Together.jpg'
];
var randomImage = images[Math.floor(Math.random() * images.length)];

$('.artwork img').attr('src', randomImage);

getColors(randomImage)
    .then(function (colors) {

        var bgHex = colorToRGB(colors[0]);
        var primaryHex = colorToRGB(colors[1]);
        var secondaryHex = colorToRGB(colors[2]);

        $('.controls').css({
            "background-color": bgHex,
            // "background-image": "url(" + randomImage + ")",
            // "-webkit-filter": "blur(10px)"
        });
        $('.progress').css({"background-color": bgHex});
        $('.progress .bar').css({"background-color": primaryHex});
        $('.artist').css({
            "border-color": primaryHex
        });

        $('.song-name').css({"color": primaryHex});
        $('.album-name').css({"color": secondaryHex});

        $('.play').css({
            "background-color": primaryHex,
            "border-color": bgHex,
            "color": bgHex
        });
        $('.skip').css({
            "background-color": secondaryHex,
            "color": bgHex
        });


        // colors.map(function (c) {
        //     $("<div>", {
        //         css: {
        //             "width": "40px", "height": "40px", "float": "left", "background-color": colorToRGB(c)
        //         }
        //     }).appendTo($('body'));
        // })
    })
    .catch(function (err) {
        console.error(err);
    });

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function colorToRGB(color) {
    return "#" + componentToHex(color.r) + componentToHex(color.g) + componentToHex(color.b);
}

