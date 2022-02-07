export default class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y
  }

  fly() {
    console.log(`飞到${this.x}, ${this.y}位置`);
  }
}