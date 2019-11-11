function ArrayList() {
    List.call(this);
    this.aList = [];
    this.length = 0;

    this.getList = function () {
        return this.aList;
    }
    this.push = function (element) {
        this.aList[this.length] = element;
        this.length++;
        return element;
    }
    this.clear = function () {
        this.length = 0;
        this.aList = [];
    }
    this.pop = function () {
        let element = this.aList[this.length - 1];
        let a = [];
        for (let i = 0; i < this.length - 1; i++) {
            a[i] = this.aList[i];
        }
        this.aList = a;
        this.length--;
        return element;
    }
    this.size = function () {
        return this.length;
    }
    this.shift = function () {
        const a = [];
        let j = 0;
        for (let i = 1; i < this.length; i++) {
            a[j] = this.aList[i];
            j++;
        }
        this.aList = a;
        this.length--;
        return this.length;
    }
    this.unshift = function (element) {
        const a = [];
        a[0] = element;
        let j = 1;
        for (let i = 0; i < this.length; i++) {
            a[j] = this.aList[i];
            j++;
        }
        this.aList = a;
        this.length++;
        return this.length;
    }
    this.toString = function () {
        let string = String(this.aList[0]);
        for (let i = 1; i < this.length; i++) {
            string += ", " + String(this.aList[i]);
        }
        return string;
    }
    this.sort = function (commit) {
        if (commit) {
            if (typeof commit == "function") {
                for (let i = 0; i < this.length; i++) {
                    for (let j = 0; j < this.length; j++) {
                        if (j == this.length - 1)
                            break;
                        if (commit(this.aList[j], this.aList[j + 1]) > 0) {
                            let easy = this.aList[j + 1];
                            this.aList[j + 1] = this.aList[j];
                            this.aList[j] = easy;
                        }
                    }
                }
            }
        } else {
            for (let i = 0; i < this.length; i++) {
                for (let j = 0; j < this.length; j++) {
                    if (j == this.length - 1)
                        break;
                    if (String(this.aList[j]) > String(this.aList[j + 1])) {
                        let easy = this.aList[j + 1];
                        this.aList[j + 1] = this.aList[j];
                        this.aList[j] = easy;
                    }
                }
            }
        }
    }
    this.get = function (index) {
        if (index >= this.length || index < 0)
            return false;
        return this.aList[index];
    }
    this.toLinkedList = function () {
        const linked = new LinkedList();
        linked.clear();
        for (let i = 0; i <= this.size() - 1; i++) {
            linked.push(this.get(i));
        }
        return linked;
    }
}

function LinkedList() {
    List.call(this);
    this.root = {
        next: null,
        prev: null,
        lenght: 0
    }
    this.createNode = function (el) {
        return {
            el: el ? el : null,
            next: null,
            prev: null
        };
    }
    this.push = function (el) {
        let newNoda = this.createNode(el);
        let Noda = this.root;
        while (Noda.next && Noda.next.el != null) {
            Noda = Noda.next;
            newNoda.prev = Noda;
        }
        Noda.next = newNoda;
        this.root.lenght = Number(this.root.lenght) + 1;
        return el;
    }
    this.size = function () {
        return this.root.lenght;
    }
    this.clear = function () {
        this.root.next = null;
        this.root.prev = null;
        this.root.lenght = 0;
    }
    this.pop = function () {
        let Noda = this.root;
        while (Noda.next && Noda.next.el != null) {
            Noda = Noda.next;
        }
        let el = Noda.el;
        Noda.el = null;
        Noda.next = null;
        Noda.prev = null;
        this.root.lenght--;
        return el;
    }
    this.unshift = function (el) {
        let Noda = this.root;
        let newNoda = this.createNode(el);
        newNoda.next = Noda.next;
        Noda.next.prev = newNoda;
        Noda.next = newNoda;
        newNoda.prev = null;
        this.root.lenght++;
        return el;
    }
    this.shift = function () {
        let Noda = this.root;
        let secondNoda = Noda.next;
        let el = secondNoda.el;
        secondNoda.next.prev = null;
        Noda.next = secondNoda.next;
        this.root.lenght--;
        return el;
    }
    this.toString = function () {
        let Noda = this.root;
        Noda = Noda.next;
        let string = String(Noda.el);
        while (Noda.next && Noda.next.el != null) {
            Noda = Noda.next;
            string += ", " + String(Noda.el);
        }
        return string;
    }
    this.sort = function (commit) {
        if (commit) {
            if (typeof commit != "function") return false;
            for (let i = 0; i < this.size() + 1; i++) {
                let Noda = this.root;
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
                let Noda = this.root;
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
    this.toArrayList = function () {
        const array = new ArrayList();
        let Noda = this.root;
        while (Noda.next && Noda.next.el != null) {
            Noda = Noda.next;
            array.push(Noda.el);
        }
        return array;
    }
}