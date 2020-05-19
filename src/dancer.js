// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"> <img src = "https://www.clipartmax.com/png/middle/269-2698246_top-10-modes-of-transportation-in-harry-potter-harry-potter-on-a.png"> </img></span>');
  //this works but the image is huge and not transparent, need to fix styling and maybe move this to subclasses for uniqueness
  this.timeBetweenSteps = timeBetweenSteps;
  this.step(); //idk why this is needed
  this.setPosition(top, left);

  //return dancer;
};
Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
