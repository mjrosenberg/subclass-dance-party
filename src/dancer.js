// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  // this.$node = $('<span class="blinkyDancer"> <img src = "/Users/maxrosenberg/Desktop/SEI/ghrphx10-subclass-dance-party/src/dracoSmall.png"> </img></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.liningUp = false;
  this.step();
  this.setPosition(top, left);


  //return dancer;
};
Dancer.prototype.step = function() {
  if (this.liningUp === false){
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  // if (this.liningUp = true){
  //   var styleSettings = {
  //     top: top,
  //     left: "150px"
  //   };
  // }
  //else{
  var styleSettings = {
    top: top,
    left: left
  };
  //}
  this.$node.css(styleSettings);
};
Dancer.prototype.lineUp = function(){
  this.liningUp = true;
  this.$node.css({left: 150});
  //debugger;
};