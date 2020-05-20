// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  // this.$node = $('<span class="blinkyDancer"> <img src = "/Users/maxrosenberg/Desktop/SEI/ghrphx10-subclass-dance-party/src/dracoSmall.png"> </img></span>');
  this.left = left;
  this.top = top;
  this.timeBetweenSteps = timeBetweenSteps;
  this.liningUp = false;
  this.step();
  this.setPosition(top, left);

  this.$node.on('mouseover', this.changeColor.bind(this));
  //this.$node.mouseover(this.changeColor.bind(this));
  this.$node.on('mouseout', this.offColor.bind(this));

};
Dancer.prototype.step = function() {
  if (this.liningUp === false) {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  this.liningUp = true;
  this.left = 150;
  this.$node.animate({left: 150});
};

Dancer.prototype.changeColor = function() {

    this.$node.css({'border': '10px solid red'});

};
Dancer.prototype.offColor = function() {

  this.$node.css({});

};
