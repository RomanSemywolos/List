function SuperList () {}
SuperList.prototype.push = function () {};
SuperList.prototype.pop = function () {};
SuperList.prototype.unshift = function() {};
SuperList.prototype.shift = function() {};
SuperList.prototype.sort = function () {};
SuperList.prototype.size = function () {};
SuperList.prototype.toString = function () {};
SuperList.prototype.map = function () {};
SuperList.prototype.reverse = function () {};
SuperList.prototype.reduce = function () {};

function LList() {

    this.Node = {
        head: null,
        tail: null,
        length: 0,
    };

    this.createNewNode = function (value) {
        return {
            value: value ? value : null,
            next: null,
            previous: null,
        }
    }
}

LList.prototype = Object.create(SuperList.prototype);
LList.prototype.constructor = LList;

LList.prototype.size = function() {
    return this.length;
}


LList.prototype.clear = function()
{
    this.head = null;
    this.tail = null;
    this.length = 0;
}
LList.prototype.size = function () {
        return this.length;
    }

LList.prototype.unshift = function (value) {

        const newNode = LinkedList.createNewNode(value);

        if (this.head) {
            this.head.previous = newNode;
        } else {
            this.tail = newNode;
        }
        this.head = newNode;
        this.length++;
    }

LList.prototype.push = function(value) {

        const newNode = LinkedList.createNewNode(value);
        newNode.previous = this.tail;
        if (this.tail)
            this.tail.next = newNode;
        else
            this.head = newNode;
        this.tail = newNode;
        this.length++;
    }

LList.prototype.shift = function() {
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

LList.prototype.pop = function()  {
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

LList.prototype.size2 = function() {
        let i = 0;
        let node = this.head;
        while (node != null) {
            i++;
            node = node.next;
        }
        return i;
    }

LList.prototype.toString = function ()
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

LList.prototype.toArray = function () {

        arrayList.clear();
        let node = this.head;
        while (node) {
            arrayList.push(node.value);
            node = node.next;
        }

        return arrayList;
    }

LList.prototype.sort = function (callback) {

        if (callback) {

            for (let node = this.head; node; node = node.next) {
                let nodeWithMinValue = node;
                for (let searchNode = node.next; searchNode; searchNode = searchNode.next) {
                    if (callback (searchNode.value,nodeWithMinValue.value) < 0) 
                        nodeWithMinValue = searchNode;
                }
                let temp = nodeWithMinValue.value;
                nodeWithMinValue.value = node.value;
                node.value = temp;
            }
        } else {

            for (let node = this.head; node; node = node.next) {
                let nodeWithMinValue = node;
                for (let searchNode = node.next; searchNode; searchNode = searchNode.next) {
                    if (searchNode.value < nodeWithMinValue.value)
                        nodeWithMinValue = searchNode;
                }
                let temp = nodeWithMinValue.value;
                nodeWithMinValue.value = node.value;
                node.value = temp;
            }
        }
    }

LList.prototype.reverse = function() {

    let node = this.head;
    let previous = null;
    let next = this.head;

    while(node !== null) {
    next = next.next
    node.next = previous
    previous = node
    node = next
    this.head = this.tail;

}
return this;
};
// LinkedList.push(1);
// LinkedList.push(2);
// LinkedList.push(3);
// LinkedList.push(4);
// LinkedList.push(5);

//console.log(LinkedList);
//LinkedList.reverse();
//console.log(LinkedList.toString());

LList.prototype.map = function(f) {
    const LinkedList2 = new LList();
    for (let node = this.head; node; node = node.next) {
        LinkedList2.push(f(node.value));
    }
    return LinkedList2;
}
LList.prototype.reduce = function (f, initialValue) {
        if (this.head == null) {
            if (initialValue !== "undefined") return initialValue;
            else return undefined;
        }
        let result = typeof initialValue !== "undefined" ? initialValue : this.head.value;
        let startNode = typeof initialValue !== "undefined" ? this.head : this.head.next;

        for (let node = startNode; node; node = node.next) {
            result = f(result, node.value);
        }
        return result;
    }


    const LinkedList = new LList();
console.log (LinkedList.toString());

function Sum (a,b)
{
    return a+b;
}

function Plus (a)
{
    return a+1;
}



