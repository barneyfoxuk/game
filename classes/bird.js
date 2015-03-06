var Bird = function(game) {
    this.game = game;
    // Display the bird on the screen
    this.sprite = this.game.add.sprite(100, 245, 'bird');

    // Add gravity to the bird to make it fall
    game.physics.arcade.enable(this.sprite);
    this.sprite.body.gravity.y = 1000;

    // Call the 'jump' function when the spacekey is hit
    var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.jump, this); 
}

Bird.prototype.jump = function() {
    // Add a vertical velocity to the bird
    this.sprite.body.velocity.y = -350;
}
