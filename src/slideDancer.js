var SlideDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.oldStep = this.step;
  // this.timeBetweenSteps = timeBetweenSteps;
  // this.top = top;
  // this.left = left;
  //this.callCount = 0;
  //this.color = 'blue';
  //this.$node = $('<span class="slideDancer"></span>');

};
SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;



SlideDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);
  //this.$node.toggle();
  this.$node.animate({
    //opacity: 0.25,
    left: "+=50",
    //left: "toggle",
    //height: "toggle"
  }, 1000, function() {
    // Animation complete.
  });
  //always starts on the very left and never slides back, ideally we would have it side 50px to the left and then back right
  //this.$node.slideToggle(2000);
  //this.callCount += 1; // idk why this is not correctly incrementing the global variable
  //this.setP
};