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
  // this.$node.animate({
  //   left: "+=50",
  //   //right: "+=50"
  // }, 2000, function() {
  //   // Animation complete.
  // });
  //for (var i=1; i<=3; i++) {
  // this.$node.animate({height: 200},1000);
  // this.$node.animate({height: 100},1000);
  //if (this.liningUp === false){
  // this.$node.animate({left: this.left + 100},"slow");
  // this.$node.animate({left: this.left},"slow");
  // } else{
  //   this.$node.css({left: 150});
  // }
  this.$node.rotate({
    angle:0,
    animateTo:360
    // callback: rotation,
    // easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
    //     return c*(t/d)+b;
    // }
  });
  //}
  //always starts on the very left and never slides back, ideally we would have it side 50px to the left and then back right
};

// slideDancer.prototype.lineUp = function(){
//   this.$node.animate({left:'150px'});

// }