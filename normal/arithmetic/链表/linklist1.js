class Node {
  constructor(ele) {
    this.data = new Array(10)
    this.next = new Array(10)
  }
}

class NodeList {
  constructor() {
    this.node = new Node()
    this.head = 3
    this.node.data[3] = 0
    this.add(3,5,1)
    this.add(5,2,6)
    this.add(2,0,3)
    console.log(this.node);

    let p = this.head
    // console.log(this.node.data[p]);
    // p = this.node.next[p]
    // console.log(this.node.data[p]);
    while(p != 0){
      console.log(this.node.data[p]);
      p = this.node.next[p]
    }
  }


  add(ind, p ,val) {
    this.node.next[ind] = p
    this.node.data[p] = val  
  } 
}


let list = new NodeList()