import Phaser from "phaser";

export default class Game extends Phaser.Scene {
  preload() {}

  create() {
    // ball
    const ball = this.add.circle(400, 250, 10, 0xffffff, 1);
    this.physics.add.existing(ball);
    ball.body.setBounce(1, 1);

    // ball world collider
    ball.body.setCollideWorldBounds(true, 1, 1);

    // init ball velocity
    ball.body.setVelocity(
      Phaser.Math.Between(-200, 200),
      Phaser.Math.Between(-200, 200)
    );

    //paddleLeft
    this.paddleLeft = this.add.rectangle(50, 250, 30, 100, 0xffffff, 1);
    this.physics.add.existing(this.paddleLeft, true);

    //this.paddleLeft ball collider
    this.physics.add.collider(this.paddleLeft, ball);

    //paddleRight
    this.paddleRight = this.add.rectangle(750, 250, 30, 100, 0xffffff, 1);
    this.physics.add.existing(this.paddleRight, true);

    //this.paddleRight ball collider
    this.physics.add.collider(this.paddleRight, ball);

    //keyboard input
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.up.isDown) {
      this.paddleLeft.y -= 10;
      this.paddleLeft.body.updateFromGameObject(); // move boy with object
    } else if (this.cursors.down.isDown) {
      this.paddleLeft.y += 10;
      this.paddleLeft.body.updateFromGameObject();
    }
  }
}
