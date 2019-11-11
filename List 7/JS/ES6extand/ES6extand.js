class ArrayList extends List {
  _aList = [];
  _length = 0;
  getList() {
    return this._aList;
  }
  push = element => {
    this._aList[this._length] = element;
    this._length++;
    return element;
  };
  clear = () => {
    this._length = 0;
    this._aList = [];
  };
  pop = () => {
    let element = this._aList[this._length - 1];
    let a = [];
    for (let i = 0; i < this._length - 1; i++) {
      a[i] = this._aList[i];
    }
    this._aList = a;
    this._length--;
    return element;
  };
  size = () => {
    return this._length;
  };
  shift = () => {
    const a = [];
    let j = 0;
    for (let i = 1; i < this._length; i++) {
      a[j] = this._aList[i];
      j++;
    }
    this._aList = a;
    this._length--;
    return this._length;
  };
  unshift = element => {
    const a = [];
    a[0] = element;
    let j = 1;
    for (let i = 0; i < this._length; i++) {
      a[j] = this._aList[i];
      j++;
    }
    this._aList = a;
    this._length++;
    return this._length;
  };
  toString = () => {
    let string = String(this._aList[0]);
    for (let i = 1; i < this._length; i++) {
      string += ", " + String(this._aList[i]);
    }
    return string;
  };
  sort = commit => {
    if (commit) {
      if (typeof commit == "function") {
        for (let i = 0; i < this._length; i++) {
          for (let j = 0; j < this._length; j++) {
            if (j == this._length - 1) break;
            if (commit(this._aList[j], this._aList[j + 1]) > 0) {
              let easy = this._aList[j + 1];
              this._aList[j + 1] = this._aList[j];
              this._aList[j] = easy;
            }
          }
        }
      }
    } else {
      for (let i = 0; i < this._length; i++) {
        for (let j = 0; j < this._length; j++) {
          if (j == this._length - 1) break;
          if (String(this._aList[j]) > String(this._aList[j + 1])) {
            let easy = this._aList[j + 1];
            this._aList[j + 1] = this._aList[j];
            this._aList[j] = easy;
          }
        }
      }
    }
  };
  get = index => {
    if (index >= this._length || index < 0) return false;
    return this._aList[index];
  };
  toLinkedList = () => {
    const linked = new LinkedList();
    linked.clear();
    for (let i = 0; i <= this.size() - 1; i++) {
      linked.push(this.get(i));
    }
    return linked;
  };
}

class LinkedList extends List {
  _root = {
    next: null,
    prev: null,
    lenght: 0
  };
  createNode = el => {
    return {
      el: el ? el : null,
      next: null,
      prev: null
    };
  };
  push = el => {
    let newNoda = this.createNode(el);
    let Noda = this._root;
    while (Noda.next && Noda.next.el != null) {
      Noda = Noda.next;
      newNoda.prev = Noda;
    }
    Noda.next = newNoda;
    this._root.lenght = Number(this._root.lenght) + 1;
    return el;
  };
  size = () => {
    return this._root.lenght;
  };
  clear = () => {
    this._root.next = null;
    this._root.prev = null;
    this._root.lenght = 0;
  };
  pop = () => {
    let Noda = this._root;
    while (Noda.next && Noda.next.el != null) {
      Noda = Noda.next;
    }
    let el = Noda.el;
    Noda.el = null;
    Noda.next = null;
    Noda.prev = null;
    this._root.lenght--;
    return el;
  };
  unshift = el => {
    let Noda = this._root;
    let newNoda = this.createNode(el);
    newNoda.next = Noda.next;
    Noda.next.prev = newNoda;
    Noda.next = newNoda;
    newNoda.prev = null;
    this._root.lenght++;
    return el;
  };
  shift = () => {
    let Noda = this._root;
    let secondNoda = Noda.next;
    let el = secondNoda.el;
    secondNoda.next.prev = null;
    Noda.next = secondNoda.next;
    this._root.lenght--;
    return el;
  };
  toString = () => {
    let Noda = this._root;
    Noda = Noda.next;
    let string = String(Noda.el);
    while (Noda.next && Noda.next.el != null) {
      Noda = Noda.next;
      string += ", " + String(Noda.el);
    }
    return string;
  };
  sort = commit => {
    if (commit) {
      if (typeof commit != "function") return false;
      for (let i = 0; i < this.size() + 1; i++) {
        let Noda = this._root;
        let first = Noda.next;
        if (!first.next) return;
        let second = first.next;
        for (let j = 0; j < this.size() + 1; j++) {
          if (commit(first.el, second.el) > 0) {
            let easy = second.el;
            second.el = first.el;
            first.el = easy;
          }
          if (!first.next) break;
          else first = first.next;
          if (!first.next) break;
          second = first.next;
        }
      }
    } else {
      for (let i = 0; i < this.size() + 1; i++) {
        let Noda = this._root;
        let first = Noda.next;
        if (!first.next) return;
        let second = first.next;
        for (let j = 0; j < this.size() + 1; j++) {
          if (String(first.el) > String(second.el)) {
            let easy = second.el;
            second.el = first.el;
            first.el = easy;
          }
          if (!first.next) break;
          else first = first.next;
          if (!first.next) break;
          second = first.next;
        }
      }
    }
  };
  toArrayList = () => {
    const array = new ArrayList();
    let Noda = this._root;
    while (Noda.next && Noda.next.el != null) {
      Noda = Noda.next;
      array.push(Noda.el);
    }
    return array;
  };
}