class Node {
  constructor(ele) {
    this.ele = ele
    this.next = null
  }
}



class LinkNodeList {
  constructor() {
    this.head = null
    this.head = new Node(1)
    this.head.next = new Node(2)
    this.head.next.next = new Node(3)
    this.head.next.next.next = new Node(4)
    let p = this.head
    while(p != null) {
      console.log(p.ele);
      p = p.next
    }
  }
}


let list = new LinkNodeList()
console.log(list);
