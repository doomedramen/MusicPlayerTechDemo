module.exports = function (filePath) {
    var getPixels = require("get-pixels");
    var kMeans = require('kmeans-js');
    return new Promise(function (good, bad) {

        var OFFSET = 100;
        // var BAND_SIZE = 50;

        getPixels(filePath, function (err, pixels) {
            if (err) {
                return bad(err);
            }

            var colors = [];

            var wSize = pixels.shape[0];
            var hSize = pixels.shape[1];

            for (var w = 0; w < wSize; w += OFFSET) {
                for (var h = 0; h < hSize; h += OFFSET) {

                    var pointer = pixels.offset + (pixels.stride[0] * w) + (pixels.stride[1] * h);

                    var pixel = [];
                    pixel[0] = pixels.data[pointer];
                    pixel[1] = pixels.data[pointer + (pixels.stride[2]) * 1];
                    pixel[2] = pixels.data[pointer + (pixels.stride[2]) * 2];


                    // var pixel = {
                    //     r: pixels.data[pointer],
                    //     g: pixels.data[pointer + (pixels.stride[2]) * 1],
                    //     b: pixels.data[pointer + (pixels.stride[2]) * 2]
                    // };
                    colors.push(pixel);
                }
            }


            var km = new kMeans({
                K: 5
            });

            km.cluster(colors);
            while (km.step()) {
                km.findClosestCentroids();
                km.moveCentroids();
                if (km.hasConverged()) break;
            }

            var output = km.centroids.map(function (k) {
                return {r: Math.floor(k[0]), g: Math.floor(k[1]), b: Math.floor(k[2])};
            });

            return good(output);

        })
    })
};
