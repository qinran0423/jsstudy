class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkNodeList{
  constructor() {

    this.head = null
    this.length = 0
  }

  // 增
  append(element) {
    let node = new Node(element)
    let cur
    if (this.head === null) {
      this.head = node
    } else {
      // 遍历链表
      cur = this.head
      while(cur.next) {
        cur = cur.next
      }      
      cur.next = node
    }
    this.length += 1
    console.log(this.head);
  }

  print() {
    let cur = this.head
    let ret = []
    while(cur) {
      ret.push(cur.element)
      cur = cur.next
    }
    console.log(ret.join('==>'));
    return ret.join('==>')
  }

  removeAt(index) {
    let cur = this.head
    let prev 
    let i = 0
    if (index == 0) {
      this.head = cur.next
    } else {
      while(i< index) {
        prev = cur
        cur = cur.next
        console.log(prev, cur);
        i++
      }
      prev.next = cur.next
      cur.next = null
    }
    this.length -= 1
    return cur.element
  }
}


let linkNode = new LinkNodeList()

linkNode.append('111')
linkNode.append('222')
linkNode.append('333')
linkNode.append('444')
linkNode.print()

linkNode.removeAt(1)
linkNode.print()