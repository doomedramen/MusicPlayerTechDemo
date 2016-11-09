module.exports = function (url) {
    var sc = require("node-album-color");
    return new Promise(function (good) {
        sc.getColorsArray(url, function (colors) {
            return good(colors.map(function (c) {
                return {r: c[0], g: c[1], b: c[2]}
            }))
        })
    })
};