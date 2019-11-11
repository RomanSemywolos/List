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

function AList() {
    this.arr = [];
    this.length = 0;
}

AList.prototype = Object.create(SuperList.prototype);
AList.prototype.constructor = AList;

AList.prototype.size = function() {
    return this.length;
}

AList.prototype.clear = function () {
    this.arr = [];
    this.length = 0;
}

AList.prototype.shift = function ()
{
    if (this.length > 0)
    {
        let value = this.arr [0];
        for (let i =0; i<this.length-1; i++)
            this.arr[i] = this.arr[i+1];
        this.pop();
        return value;
    }
    else
        return undefined;
}

    this.arr = [];
    this.length = 0;

AList.prototype.clear = function () {
        this.arr = [];
        this.length = 0;
    }
AList.prototype.sort = function (callback) {
        if (callback) {
            for (let i = 0; i < this.length; i++) {
                let minIndex = i;
                for (let j = i + 1; j < this.length; j++) {
                    if (callback(this.arr[j], this.arr[minIndex]) < 0) {
                        minIndex = j;
                    }
                }
                let temp = this.arr[minIndex];
                this.arr[minIndex] = this.arr[i];
                this.arr[i] = temp;
            }
        } else {
            for (let i = 0; i < this.length; i++) {
                let minIndex = i;
                for (let j = i + 1; j < this.length; j++) {
                    if (this.arr[j] < this.arr[minIndex]) {
                        minIndex = j;
                    }
                }
                let temp = this.arr[minIndex];
                this.arr[minIndex] = this.arr[i];
                this.arr[i] = temp;
            }
        }
        return this;
    }
    AList.prototype.push = function (value) {

        this.arr[this.length] = value;
        ++this.length;
        return this.length;
    }

AList.prototype.unshift = function (value) {
        for (let i = this.length - 1; i >= 0; i--) {
            this.arr[i + 1] = this.arr[i];
        }
        this.arr[0] = value;
        this.length++;
        return this.length;
    }


AList.prototype.pop = function () {
        if (this.length > 0) {
            let value = this.arr[this.length - 1];
            delete this.arr[this.length - 1];
            this.length--;
            return value;
        } else
            return undefined;
    }

//     this.shift = function ()
//     {
//     if (this.length > 0)
//     {
//         let value = this.arr [0];
//         for (let i =0; i<this.length-1; i++)
//             this.arr[i] = this.arr[i+1];
//         this.pop();
//         return value;
//     }
//     else
//         return undefined;
// }

AList.prototype.toString = function () {
        let string = '';

        for (let i = 0; i < this.length - 1; i++) {
            string += this.arr[i] + ',';
        }

        if (this.length > 0) {
            string += this.arr[this.length - 1];
        }

        return string;
    }

AList.prototype.tolinkedList = function () {
        LinkedList.clear();

        for (let i = 0; i < this.length; i++) {
            LinkedList.push(this.arr[i]);
        }
        return LinkedList;
    }

AList.prototype.reverse = function () {

        for (let i = 0; i < this.length / 2; i++) {
            let temp = this.arr[i];
            this.arr[i] = this.arr[this.length - 1 - i];
            this.arr[this.length - 1 - i] = temp;
        }
        return this;
    }

AList.prototype.map = function (f) {
        const arrayList2 = new AList();
        for (let i = 0; i < this.length; i++) {
            arrayList2.push(f(this.arr[i]));
        }
        return arrayList2;

    }

AList.prototype.reduce = function (f, initialValue) {

        let result = typeof initialValue !== "undefined" ? initialValue : this.arr[0];
        let startIndex = typeof initialValue !== "undefined" ? 0 : 1;

        for (let i = startIndex; i < this.length; i++) {
            result = f(result, this.arr[i]);
        }
        return result;
    }


    function Sum(a, b) {
        return a + b;
    }

    const arrayList = new AList();

    console.log (arrayList.push(1));


    console.log(arrayList.size());
    console.log (arrayList.unshift());
    function Plus(a) {
        return a + 1;
    }


// console.log (arrayList.push(5));
// console.log (arrayList.push(16));
// console.log (arrayList.push(13));
// console.log (arrayList);
