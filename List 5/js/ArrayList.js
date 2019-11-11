class ArrayList
{
    constructor()
    {
        this.length = 0;
        this.arr = [];
    }

    size ()
    {
        return this.length;
    }

    sort ()
    {
        for (let i = 0; i < this.length; i++)
        {
            let minIndex = i;
            for (let j = i + 1; j < this.length; j++)
            {
                if (this.arr[j] < this.arr[minIndex])
                {
                    minIndex = j;
                }
            }
            let temp = this.arr[minIndex];
            this.arr[minIndex] = this.arr[i];
            this.arr[i] = temp;
        }
        return this;
    }

    clearArray()
    {
        let length = this.length();
        for(let i = 0; i < length; i++){
            delete this[i];
        }
    }

    push(value)
    {
        this.arr[this.length]=value;
        ++this.length;
        return this.length;
    }

    unshift(value) {
        for (let i = this.length - 1; i >= 0; i--) {
            this.arr[i + 1] = this.arr[i];
        }
        this.arr[0] = value;
        length++;
        return length;
    }


    pop ()
    {
        if (this.length>0)
        {
            let value = this.arr[this.length-1];
            delete this.arr[this.length-1];
            this.length--;
            return value;
        }
        else
            return undefined;
    }

    shift ()
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

    toString()
    {
        let string = '';

        for (let i = 0; i < this.length - 1; i++)
        {
            string += this.arr[i] + ',';
        }

        if (this.length > 0)
        {
            string += this.arr[this.length - 1];
        }

        return string;
    }

    ToLinkedList ()
    {
        const linkedList = new LinkedList;
        for (let i = 0; i <this.length; i++)
        {
            linkedList.push(this.arr[i]);
        }
        return linkedList;
    }
}

arrayList.push(2);
let value = arrayList.pop();
console.log(value);