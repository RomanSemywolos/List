describe('Array list', function () {
    beforeEach(function () {
        arrayList.clear();
    });

    it('Check push method', function () {

        const exp = 1;
        arrayList.push(exp);
        const act = arrayList.arr[0];

        assert.equal(exp, act);
    });

    it('Check push method', function () {

        const exp = "apple";
        arrayList.push(exp);
        const act = arrayList.arr[0];

        assert.equal(exp, act);
    });

    it('Check push and pop method', function () {

        const exp = 4;
        arrayList.push(exp);
        const act = arrayList.pop();
        assert.equal(exp, act);
    });

    it('Check shift method', function () {

        arrayList.push(1);
        arrayList.push(2);
        const act = arrayList.shift();
        let exp = 1;

        assert.equal(exp, act);
    });

    it('Check unshift method', function () {

        arrayList.push(1);
        arrayList.push(2);
        arrayList.unshift(3);
        const act = arrayList.shift();
        let exp = 3;

        assert.equal(exp, act);
    });

    it('Check size method', function () {

        arrayList.push(1);
        arrayList.push(2);
        let act = arrayList.size();
        let exp = 2;

        assert.equal(exp, act);
    });

    it('Check toString method', function () {

        arrayList.push(1);
        arrayList.push(2);
        const act = arrayList.toString();
        let exp = "1,2";

        assert.equal(exp, act);
    });

    it('Check sort method', function () {

        arrayList.push(1);
        arrayList.push(12);
        arrayList.push(2);

        arrayList.sort();
        const act = arrayList.toString();
        let exp = "1,2,12";

        assert.equal(exp, act);
    });

    it('Check TolinkedList method', function () {

        LinkedList.clear();
        arrayList.push(1);
        arrayList.push(2);
        const act = arrayList.tolinkedList().toString();
        let exp = "1,2";

        assert.equal(exp, act);
    });

    it('Check Reverse method', function () {

        arrayList.push(1);
        arrayList.push(2);
        arrayList.push(3);
        arrayList.push(4);
        arrayList.push(5);

        const act = arrayList.reverse().toString();
        let exp = "5,4,3,2,1";

        assert.equal(exp, act);
    });

    it('Check Map method', function () {
        arrayList.push(1);
        arrayList.push(2);
        arrayList.push(3);
        arrayList.push(4);
        arrayList.push(5);
        const act = arrayList.map(Plus).toString();
        let exp = "2,3,4,5,6";

        assert.equal(exp, act);
    });

    it('Check Reduce method with InValue', function () {
        arrayList.push(1);
        arrayList.push(2);
        arrayList.push(3);
        arrayList.push(4);
        arrayList.push(5);
        const act = arrayList.reduce(Sum,10).toString();
        let exp = "25";

        assert.equal(exp, act);
    });

    it('Check Reduce method without InValue', function () {
        arrayList.push(1);
        arrayList.push(2);
        arrayList.push(3);
        arrayList.push(4);
        arrayList.push(5);
        const act = arrayList.reduce(Sum).toString();
        let exp = "15";

        assert.equal(exp, act);
    });
});

describe('LinkedList', function () {

    beforeEach(function () {
        LinkedList.clear();
    });

    it('Check push method', function () {

        const exp = 1;

        LinkedList.push(exp);
        const act = LinkedList.head.value;

        assert.equal(exp, act);
    });

    it('Check push and pop method', function () {
        const exp = 4;

        LinkedList.push(exp);
        const act = LinkedList.pop();
        assert.equal(exp, act);
    });

    it('Check shift method', function () {

        LinkedList.push(1);
        LinkedList.push(2);
        const act = LinkedList.shift();
        let exp = 1;

        assert.equal(exp, act);
    });

    it('Check unshift method', function () {

        LinkedList.push(1);
        LinkedList.push(2);
        LinkedList.unshift(3);
        const act = LinkedList.shift();

        let exp = 3;

        assert.equal(exp, act);
    });

    it('Check size method', function () {

        LinkedList.push(1);
        LinkedList.push(2);
        const act = LinkedList.size();
        let exp = 2;

        assert.equal(exp, act);
    });

    it('Check toString method', function () {

        LinkedList.push(1);
        LinkedList.push(2);
        const act = LinkedList.toString();
        let exp = "1,2";

        assert.equal(exp, act);
    });

    it('Check sort method', function () {


        LinkedList.push(1);
        LinkedList.push(12);
        LinkedList.push(2);

        LinkedList.sort();
        const act = LinkedList.toString();
        let exp = "1,2,12";

        assert.equal(exp, act);
    });

    it('Check ToArrayList method', function () {

        LinkedList.push(1);
        LinkedList.push(2);
        const act = LinkedList.toArray().toString();
        let exp = "1,2";

        assert.equal(exp, act);
    });
    it('Check Reverse method', function () {
        const LinkedList = new LList();
        LinkedList.push(1);
        LinkedList.push(2);
        LinkedList.push(3);
        LinkedList.push(4);
        LinkedList.push(5);

        const act = LinkedList.reverse().toString();
        let exp = "5,4,3,2,1";

        assert.equal(exp, act);
    });

    it('Check Map method', function () {
        const LinkedList = new LList();
        LinkedList.push(1);
        LinkedList.push(2);
        LinkedList.push(3);
        LinkedList.push(4);
        LinkedList.push(5);

        const act = LinkedList.map(Plus).toString();
        let exp = "2,3,4,5,6";

        assert.equal(exp, act);
    });

    it('Check Reduce method with InValue', function () {
        const LinkedList = new LList();
        LinkedList.push(1);
        LinkedList.push(2);
        LinkedList.push(3);
        LinkedList.push(4);
        LinkedList.push(5);

        const act = LinkedList.reduce(Sum,10).toString();
        let exp = "25";

        assert.equal(exp, act);
    });

    it('Check Reduce method without InValue', function () {
        const LinkedList = new LList();
        LinkedList.push(1);
        LinkedList.push(2);
        LinkedList.push(3);
        LinkedList.push(4);
        LinkedList.push(5);

        const act = LinkedList.reduce(Sum).toString();
        let exp = "15";

        assert.equal(exp, act);
    });

});