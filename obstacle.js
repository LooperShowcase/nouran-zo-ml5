class Obstacle {
  constructor() {
    this.size = 50;
    this.x = width;
    this.y = height - this.size - 50;
  }

  show() {
    image(obstacleImage, this.x, this.y, this.size - 20, this.size);
  }

  move() {
    this.x = this.x - 10;
  }
}
