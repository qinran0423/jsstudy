
import Enemy from './enemy.js'

export default class Plane extends Enemy {
  constructor(x, y, score) {
    super(x, y)
    this.score = score
  }

  getScore() {
    console.log(`落敌机得${this.score}分`);
  }
}




