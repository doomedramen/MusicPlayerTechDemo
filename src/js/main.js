var getColors = require('./getColors');
var $ = require('jquery');
var images = [
    'public/img/albums/09db34a1cc5031d12e7dd2f34b1eab94f79a62fa.jpg',
    'public/img/albums/062a3932a49c1a02dd81ee118ccc2fad55c7dfac.jpg',
    'public/img/albums/76c86f33b0ffc852e4141e59d485d9c6020241e1.jpg',
    'public/img/albums/c3bcafba79c9c5651f5aa175331f57136a66a441.jpg',
    'public/img/albums/4df6382e37587a673c3bef07a41df8bdcc0b4217.jpg',
    'public/img/albums/b8573097db504033f5d725b902f27cd03f04d7e4.jpg'
];
var randomImage = images[Math.floor(Math.random() * images.length)];

$('.artwork img').attr('src', randomImage);

getColors(randomImage)
    .then(function (colors) {
        // console.log('colors', colors);

        colors.map(function (c) {
            $("<div>", {
                css: {
                    "width": "40px", "height": "40px", "float": "left", "background-color": colorToRGB(c)
                }
            }).appendTo($('body'));
        })
    })
    .catch(function (err) {
        console.error(err);
    });

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function colorToRGB(color) {
    // console.log('convert', color);
    return "#" + componentToHex(color.r) + componentToHex(color.g) + componentToHex(color.b);
}

