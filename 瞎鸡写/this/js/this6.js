


class Father {
  constructor() {
    this.eat = this.eat.bind(this)
  }
  get fruit () {
    return 'apple'
  }

  eat() {
    console.log('eat an ' + this.fruit);
  }
}



class Son {
  get fruit() {
    return 'orange'
  }
}



const father = new Father()
father.eat()


const son = new Son()
son.eat = father.eat
son.eat()


console.log(father, son);