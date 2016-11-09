var React = require('React');
var ReactDOM = require('React-dom');
var getColors = require('./getColors');
var Hammer = require('hammerjs');
var $ = require('jquery');
var images = [
    'public/img/albums/SlayerRepentless.png',
    'public/img/albums/Leviathan_special_edition_cover.jpg',
    'public/img/albums/arcgods.jpg',
    'public/img/albums/Architects_-_Lost_Forever_Lost_Together.jpg'
];

var App = React.createClass({
    displayName: 'App',
    render: function render() {
        return render(
            <div className="player">
                <div className="coverSet">
                    <div className="1">
                        <img src=""/>
                    </div>
                    <div className="2">
                        <img src=""/>
                    </div>
                    <div className="3">
                        <img src=""/>
                    </div>
                </div>
                <div className="controlsSet">
                    <div className="1">
                        <img src=""/>
                    </div>
                    <div className="2">
                        <img src=""/>
                    </div>
                    <div className="3">
                        <img src=""/>
                    </div>
                </div>
            </div>
        )
    },
    componentToHex: function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    },
    colorToRGB: function colorToRGB(color) {
        return "#" + this.componentToHex(color.r) + this.componentToHex(color.g) + this.componentToHex(color.b);
    }
});

ReactDOM.render(React.createElement(App), document.getElementById('app'));