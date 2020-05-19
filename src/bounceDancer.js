var BounceDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  //this.$node = $('<span class="dancer"> <img src = "/Users/maxrosenberg/Desktop/SEI/ghrphx10-subclass-dance-party/src/harrySmall.png"> </img></span>');
  this.$node.addClass('bounceDancer');
};
BounceDancer.prototype = Object.create(Dancer.prototype);
BounceDancer.prototype.constructor = SlideDancer;
BounceDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //this.$node.toggle("bounce",{3},);
  //this.$node.shake({direction: 'up', distance:10, speed: 75, times: 3}); //not a function
  for (var i=1; i<=3; i++) {
    this.$node.animate({top: this.top + 80},"slow");
    this.$node.animate({top: this.top},"slow");
  }
};