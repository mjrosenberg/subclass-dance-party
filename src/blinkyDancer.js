var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  //this.changeColor();
  // this.$node = $('<span class="blinkyDancer"> <img src = "/Users/maxrosenberg/Desktop/SEI/ghrphx10-subclass-dance-party/src/dracoSmall.png"> </img></span>');
  this.$node.addClass('blinkyDancer');
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function() {
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

// BlinkyDancer.prototype.changeColor = function (){
//   this.$node.css({'border':'10px solid blue'});
// };
