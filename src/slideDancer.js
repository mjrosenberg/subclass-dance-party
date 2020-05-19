var SlideDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.left = left;
};
SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;
SlideDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.animate({
  //   left: "+=50",
  //   //right: "+=50"
  // }, 2000, function() {
  //   // Animation complete.
  // });
  for (var i=1; i<=3; i++) {
    this.$node.animate({left: this.left + 200},1000);
    this.$node.animate({left: this.left},1000);
  }
  //always starts on the very left and never slides back, ideally we would have it side 50px to the left and then back right
};