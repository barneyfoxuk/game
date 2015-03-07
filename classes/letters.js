var Letters = function(game) {
  // Create a group of 20 pipes
  this.group = game.add.group();
  this.group.enableBody = true;
  this.group.createMultiple(20, 'floorTile');

  // Timer that calls 'addRowOfPipes' ever 1.5 seconds
  this.timer = game.time.events.loop(250, this.addFloorTile, this);  
}

Letters.prototype.addOne = function() {
  // Get the first dead pipe of our group
  var letter = this.group.getFirstDead();

  // Set the new position of the pipe
  letter.reset(400, 50 + (Math.random() * 300)  );

  // Add velocity to the pipe to make it move left
  letter.body.velocity.x = -200; 
         
  // Kill the pipe when it's no longer visible 
  letter.checkWorldBounds = true;
  letter.outOfBoundsKill = true;
};