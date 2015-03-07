var Bird = function(game) {
    var that = this;
    this.game = game;
    this.startOfFlight = false;
    // Display the bird on the screen
    this.sprite = this.game.add.sprite(100, 245, 'bird');

    // Add gravity to the bird to make it fall
    game.physics.arcade.enable(this.sprite);
    this.sprite.body.gravity.y = 500;

    // Call the 'jump' function when the spacekey is hit
    var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.startFlying, this);
    game.input.onDown.add(this.startFlying, this);
    spaceKey.onUp.add(this.stopFlying, this);
    game.input.onDown.add(this.stopFlying, this);


    //create fly loop
    this.jumpTimer = game.time.events.loop(50, function() {
        var ammount = (that.startOfFlight === true) ? -100 : -40;
        that.startOfFlight = false;
        that.jump(ammount);
    }, this);

    this.jumpTimer.timer.pause();
}

Bird.prototype.jump = function(ammount) {
    ammount = ammount || -1000;
    // Add a vertical velocity to the bird
    this.sprite.body.velocity.y += ammount;
}

Bird.prototype.startFlying = function() {
    // Add a vertical velocity to the bird
    this.startOfFlight = true;
    this.jumpTimer.timer.resume();
}

Bird.prototype.stopFlying = function() {
    // Add a vertical velocity to the bird
    
    this.jumpTimer.timer.pause();
}
