describe('Array list', function () {

    it('Check push method', function () {
        const exp = 1;

        let arrayList = new ArrayList();
        arrayList.push(exp);
        const act = arrayList.arr[0];

        assert.equal(exp, act);
    });
    it('Check push and pop method', function () {
        const exp = 4;
        let arrayList = new ArrayList();
        arrayList.push(exp);
        const act = arrayList.pop();
        assert.equal(exp, act);
    });

    it('Check shift method', function () {

        let arrayList = new ArrayList();
        arrayList.push(1);
        arrayList.push(2);
        const act = arrayList.shift();
        let exp = 1;

        assert.equal(exp, act);
    });

    it('Check unshift method', function () {

        let arrayList = new ArrayList();
        arrayList.push(1);
        arrayList.push(2);
        arrayList.unshift(3);
        const act = arrayList.shift();
        let exp = 3;

        assert.equal(exp, act);
    });

    it('Check size method', function () {

        let arrayList = new ArrayList();
        arrayList.push(1);
        arrayList.push(2);
        const act = arrayList.size();
        let exp = 2;

        assert.equal(exp, act);
    });

    it('Check toString method', function () {

        let arrayList = new ArrayList();
        arrayList.push(1);
        arrayList.push(2);
        const act = arrayList.toString();
        let exp = "1,2";

        assert.equal(exp, act);
    });

    it('Check sort method', function () {

        let arrayList = new ArrayList();
        arrayList.push(1);
        arrayList.push(12);
        arrayList.push(2);

        arrayList.sort();
        const act = arrayList.toString();
        let exp = "1,2,12";

        assert.equal(exp, act);
    });

    it('Check ToLinkedList method', function () {

        let arrayList = new ArrayList();
        arrayList.push(1);
        arrayList.push(2);
        const act = arrayList.ToLinkedList().toString();
        let exp = "1,2";

        assert.equal(exp, act);
    });


});

describe('LinkedList', function () {
    it('Check push method', function () {
        const exp = 1;

        let linkedList = new LinkedList();
        linkedList.push(exp);
        const act = linkedList.head.value;

        assert.equal(exp, act);
    });

    it('Check push and pop method', function () {
        const exp = 4;
        let linkedList = new LinkedList();
        linkedList.push(exp);
        const act = linkedList.pop();
        assert.equal(exp, act);
    });

    it('Check shift method', function () {

        let linkedList = new LinkedList();
        linkedList.push(1);
        linkedList.push(2);
        const act = linkedList.shift();
        let exp = 1;

        assert.equal(exp, act);
    });

    it('Check unshift method', function () {

        let linkedList = new LinkedList();
        linkedList.push(1);
        linkedList.push(2);
        linkedList.unshift(3);
        const act = linkedList.shift();

        let exp = 3;

        assert.equal(exp, act);
    });

    it('Check size method', function () {

        let linkedList = new LinkedList();
        linkedList.push(1);
        linkedList.push(2);
        const act = linkedList.size();
        let exp = 2;

        assert.equal(exp, act);
    });

    it('Check toString method', function () {

        let linkedList = new LinkedList();
        linkedList.push(1);
        linkedList.push(2);
        const act = linkedList.toString();
        let exp = "1,2";

        assert.equal(exp, act);
    });

    it('Check sort method', function () {

        let linkedList = new LinkedList();
        linkedList.push(1);
        linkedList.push(12);
        linkedList.push(2);

        linkedList.sort();
        const act = linkedList.toString();
        let exp = "1,2,12";

        assert.equal(exp, act);
    });

    it('Check ToArrayList method', function () {

        let linkedList = new LinkedList();
        linkedList.push(1);
        linkedList.push(2);
        const act = linkedList.toArray().toString();
        let exp = "1,2";

        assert.equal(exp, act);
    });


});