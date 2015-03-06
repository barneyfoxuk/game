// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'gameDiv');

// Creates a new 'main' state that will contain the game
var mainState = {

    // Function called first to load all the assets
    preload: function() { 
        // Change the background color of the game
        game.stage.backgroundColor = '#71c5cf';

        // Load the bird sprite
        game.load.image('bird', 'assets/bird.png');  

        // Load the pipe sprite
        game.load.image('floorTile', 'assets/pipe.png');      
    },

    // Fuction called after 'preload' to setup the game 
    create: function() { 
        // Set the physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);

        this.bird = new Bird(game);
        this.floor = new Floor(game);         

        // Add a score label on the top left of the screen
        this.score = 0;
        this.labelScore = this.game.add.text(20, 20, "0", { font: "30px Arial", fill: "#ffffff" });  
    },

    // This function is called 60 times per second
    update: function() {
        // If the bird is out of the world (too high or too low), call the 'restartGame' function
        if (this.bird.sprite.inWorld == false)
            this.restartGame(); 

        // If the bird overlap any pipes, call 'restartGame'
        game.physics.arcade.overlap(this.bird.sprite, this.floor.floor, this.restartGame, null, this);      
    },

    

    // Restart the game
    restartGame: function() {
        // Start the 'main' state, which restarts the game
        game.state.start('main');
    },

    // // Add a pipe on the screen
    // addOnePipe: function(x, y) {
    //     // Get the first dead pipe of our group
    //     var pipe = this.pipes.getFirstDead();

    //     // Set the new position of the pipe
    //     pipe.reset(x, y);

    //     // Add velocity to the pipe to make it move left
    //     pipe.body.velocity.x = -200; 
               
    //     // Kill the pipe when it's no longer visible 
    //     pipe.checkWorldBounds = true;
    //     pipe.outOfBoundsKill = true;
    // },

    // // Add a row of 6 pipes with a hole somewhere in the middle
    // addRowOfPipes: function() {
    //     var hole = Math.floor(Math.random()*5)+1;
        
    //     for (var i = 0; i < 8; i++)
    //         if (i != hole && i != hole +1) 
    //             this.addOnePipe(400, i*60+10);   
    
    //     this.score += 1;
    //     this.labelScore.text = this.score;  
    // },
};

// Add and start the 'main' state to start the game
game.state.add('main', mainState);  
game.state.start('main'); 