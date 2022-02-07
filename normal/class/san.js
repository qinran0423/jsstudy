import Enemy from './enemy.js'
export default class San extends Enemy {
  constructor(x, y, award) {
    super(x, y)
    this.award = award
  }

  getAward() {
    console.log('击落降落伞得xx分');
  }
}


