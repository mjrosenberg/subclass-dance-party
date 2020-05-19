var SlideDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.left = left;
  //this.$node = $('<span class="dancer"> <img src = "/Users/maxrosenberg/Desktop/SEI/ghrphx10-subclass-dance-party/src/dracoSmall.png"> </img></span>');
  this.liningUp = false;
  this.$node.addClass('slideDancer');
};
SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;
SlideDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  if (this.liningUp){
    return;
  }
  this.$node.animate({left: this.left + 100},"slow");
  this.$node.animate({left: this.left},"slow");
  };

// slideDancer.prototype.lineUp = function(){
//   this.$node.animate({left:'150px'});

// }