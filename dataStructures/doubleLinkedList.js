class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    const removedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.previous;
      this.tail.next = null;
      removedNode.previous = null;
    }

    this.length--;
    return removedNode;
  }

  shift() {
    if (!this.head) return undefined;

    const removedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.previous = null;
      removedNode.next = null;
    }

    this.length--;
    return removedNode;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.previous = node;
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    const condition = index <= this.length / 2;
    let counter = condition ? 0 : this.length - 1;
    let value = condition ? this.head : this.tail;

    while (counter !== index) {
      value = condition ? value.next : value.previous;

      if (condition) counter++;
      else counter--;
    }

    return value;
  }

  set(value, index) {
    const node = this.get(index);
    if (!node) return false;

    node.value = value;
    return true;
  }
}

const list = new DoubleLinkedList();

console.log(list.push(10));
console.log(list.push(20));
console.log(list.push(30));
console.log(list.push(40));
console.log(list.push(50));
console.log(list.push(60));
console.log(list.push(70));
console.log(list.push(80));
console.log(list.push(90));
console.log(list.push(100));
console.log('get: ', list.get(7));
