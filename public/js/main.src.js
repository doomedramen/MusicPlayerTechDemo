var getPixels = require("get-pixels");

var offset = 1; //default 1, every X pixel
var bandsize = 5;


getPixels("062a3932a49c1a02dd81ee118ccc2fad55c7dfac.jpg", function(err, pixels) {
    if(err) {
        console.log("Bad image path");
        return
    }

    console.log(pixels);

    var colors = [];


    pixels.data.map(function(p){ //TODO make use of offset, might not want to do every pixel

        p.r = '';
        p.g = '';
        p.b = '';

        var closestColor = colors.filter(function(c){
            var rDiff = Math.abs(c.r - p.r);
            var gDiff = Math.abs(c.g - p.g);
            var bDiff = Math.abs(c.b - p.b);
            var diffTotal = rDiff+gDiff+bDiff;
            if(diffTotal <= bandsize){
                return {color:c, diff:diffTotal};
            }
        }).sort(function(a,b){
            return a.diff - b.diff
        }).color;

        if(closestColor){
            console.log('closestColor',closestColor);
        }

    });

});