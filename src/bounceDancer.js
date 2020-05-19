var BounceDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  //this.$node = $('<span class="dancer"> <img src = "/Users/maxrosenberg/Desktop/SEI/ghrphx10-subclass-dance-party/src/harrySmall.png"> </img></span>');
  this.$node.addClass('bounceDancer');
};
BounceDancer.prototype = Object.create(Dancer.prototype);
BounceDancer.prototype.constructor = BounceDancer;
BounceDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  if (this.liningUp){
    return;
  }
  this.$node.animate({top: this.top + 80},"slow");
  this.$node.animate({top: this.top},"slow");
};