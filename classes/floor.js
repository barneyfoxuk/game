var Floor = function(game) {
  // Create a group of 20 pipes
  this.group = game.add.group();
  this.group.enableBody = true;
  this.group.createMultiple(20, 'floorTile');

  // Timer that calls 'addRowOfPipes' ever 1.5 seconds
  this.timer = game.time.events.loop(250, this.addFloorTile, this);  
}

Floor.prototype.addFloorTile = function() {
  // Get the first dead pipe of our group
  var floorTile = this.group.getFirstDead();

  // Set the new position of the pipe
  floorTile.reset(400, 460 + (Math.random() * 10)  );

  // Add velocity to the pipe to make it move left
  floorTile.body.velocity.x = -200; 
         
  // Kill the pipe when it's no longer visible 
  floorTile.checkWorldBounds = true;
  floorTile.outOfBoundsKill = true;
};