var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.oldStep = this.step;
  // this.timeBetweenSteps = timeBetweenSteps;
  // this.top = top;
  // this.left = left;
  //this.callCount = 0;


};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;



BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep();
  //Dancer.prototype.step.call(this);
  //console.log(this.step);
  //console.log(this.setPosition(top, left));
  //this.step();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  Dancer.prototype.step.call(this);
  this.$node.toggle();
  //this.callCount += 1; // idk why this is not correctly incrementing the global variable
  //this.setP
};

