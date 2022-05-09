class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
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
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = this.head;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    const currentHead = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) this.tail = null;

    return currentHead;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let counter = 0;
    let value = this.head;

    while (counter !== index) {
      value = value.next;
      counter++;
    }

    return value;
  }
}

const list = new SinglyLinkedList();

console.log(list.unshift('Namaste'));
console.log(list.unshift('motherfuckers'));
console.log(list.push('Hello'));
console.log(list.push('World'));
console.log(list.push('!'));
console.log(list.push('Finished'));
console.log(list.get(5));
// console.log(list.pop());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
