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

  insert(value, index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    const newNode = new Node(value);

    newNode.next = nextNode;
    nextNode.previous = newNode;
    prevNode.next = newNode;
    newNode.previous = prevNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    removedNode.previous.next = removedNode.next;
    removedNode.next.previous = removedNode.previous;
    removedNode.next = null;
    removedNode.previous = null;
    this.length--;

    return removedNode;
  }
}
