class Node {
    constructor (value) {
    this.value = value;
    this.next = null;
    this.previous = null;
}
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }

    unshift(value) {
        const newNode = new Node(value);
        newNode.next = this.head;

        if (this.head)
            this.head.previous = newNode;
        else
            this.tail = newNode;

        this.head = newNode;
        this.length++;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.previous = this.tail;
        if (this.tail)
            this.tail.next = newNode;
        else
            this.head = newNode;
        this.tail = newNode;
        this.length++;
    }

    shift() {
        if (!this.head)
            return undefined;
        let value = this.head.value;
        this.head = this.head.next;
        if (this.head) {
            this.head.previous = null;
        } else {
            this.tail = null;
        }
        this.length--;
        return value;
    }

    pop() {
        if (!this.tail)
            return undefined;
        let value = this.tail.value;
        this.tail = this.tail.previous;
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        this.length--;
        return value;
    }

    size2() {
        let i = 0;
        let node = this.head;
        while (node != null) {
            i++;
            node = node.next;
        }
        return i;
    }

    toString()
    {
        let string = '';
        let node = this.head;
        while (node != null) {
            string += node.value;

            if (node.next != null)
                string += ',';

            node = node.next;

        }
        return string;
    }

    toArray() {
        const nodes = new ArrayList;
        let node = this.head;
        while (node) {
            nodes.push(node.value);
            node = node.next;
        }

        return nodes;
    }

    sort () {

            for (let node = this.head; node; node = node.next) {
                let nodeWithMinValue = node;
                for (let searchNode = node.next; searchNode; searchNode = searchNode.next)
                {
                  if (searchNode.value < nodeWithMinValue.value)
                      nodeWithMinValue = searchNode;
                }
                let temp = nodeWithMinValue.value;
                nodeWithMinValue.value = node.value;
                node.value = temp;
            }
    }
}

let llist = new LinkedList;
llist.push(1);
llist.push(2);
llist.push(15);
llist.push(26);
llist.push(11);
llist.push(-9);
llist.push(1);
llist.push(2);
llist.sort();
console.log (llist.toString());

