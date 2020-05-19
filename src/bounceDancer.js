var BounceDancer = function(top, left, timeBetweenSteps) {
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
BounceDancer.prototype = Object.create(Dancer.prototype);
BounceDancer.prototype.constructor = SlideDancer;



BounceDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);
  //this.$node.toggle("bounce",{3},);
  //this.$node.shake({direction: 'up', distance:10, speed: 75, times: 3}); //not a function
    for (var i=1; i<=3; i++) {
      this.$node.animate({top: 30},"slow");
      this.$node.animate({top: 0},"slow");
    }
  // this.$node.animate({
  //   //opacity: 0.25,
  //   left: "+=50",
  //   //left: "toggle",
  //   //height: "toggle"
  // }, 1000, function() {
  //   //$(this).stop(true,true).animate({left: 0}, 1000);
  // });
  //always starts on the very left and never slides back, ideally we would have it side 50px to the left and then back right
  //this.$node.slideToggle(2000);
  //this.callCount += 1; // idk why this is not correctly incrementing the global variable
  //this.setP
};