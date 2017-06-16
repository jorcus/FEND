// Enemies function
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed * dt;

    // The bug repeated after finished the movement
    if (this.x > 500) {
        this.x = -100;
    }

    if (
        player.y + 131 >= this.y + 90 &&
        player.x + 25 <= this.x + 88 &&
        player.y + 73 <= this.y + 135 &&
        player.x + 76 >= this.x + 11) {
        console.log('You had lose');
        alert('You had lose');
        player.x = 201.5;
        player.y = 370;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

Player.prototype.update = function() {

    // Function for completed the challenge

    if (this.y < 0) {
		var enemy = new Enemy(0, Math.random() * 184 + 50, Math.random() * 256);
        this.y = 370;
		level += 1;
        alert('You Win the level: '+level);
		allEnemies.push(enemy);
    }

    // Collision
	
    if (this.y > 370) {
        this.y = 370;
    }
    if (this.x > 401.5) {
        this.x = 401.5;
    }
    if (this.x < 1.5) {
        this.x = 1.5;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    if (key == 'left') {
        this.x -= this.speed + 20;
    }
    if (key == 'up') {
        this.y -= this.speed;
    }
    if (key == 'right') {
        this.x += this.speed + 20;
    }
    if (key == 'down') {
        this.y += this.speed;
    }
    console.log('Button pressed: ' + key);
};


var check = function(a) {


};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
// Level initialize
var level = 0;
var allEnemies = [];
var player = new Player(201.5, 370, 80);
var enemy = new Enemy(0, Math.random() * 184 + 50, Math.random() * 256);

allEnemies.push(enemy);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});