const objL = new LinkedList()
describe("Tests for LinkedList", function () {
  describe("Tests for function push", function () {
    it("get arg = 333 and return this value", function () {
      objL.clear();
      assert.equal(333, objL.push(333));
    });
    it("get arg = 'aaa' and return this value", function () {
      assert.equal("aaa", objL.push("aaa"));
    });
    it("get arg = [1,2,3,5] ad return this value", function () {
      assert.deepEqual([1, 2, 3, 5], objL.push([1, 2, 3, 5]));
    });
    it("get arg = {} ad return this value", function () {
      assert.deepEqual({}, objL.push({}));
    });
    it("size of objL will be bigger after push", function () {
      objL.push(111);
      assert.equal(5, objL.size());
    });
  });
  describe("Tests for function size", function () {
    it("return size of objL", function () {
      objL.clear();
      objL.push(2)
      objL.push(3)
      objL.push(5)
      objL.push(7)
      objL.push(4)
      assert.equal(5, objL.size());
    });
  });
  describe("Tests for function pop", function () {
    it("delete element from end and return this element", function () {
      objL.clear();
      objL.push(2)
      objL.push(3)
      objL.push(5)
      objL.push(7)
      objL.push(4)
      assert.equal(4, objL.pop());
    });
    it("delete element from end and return this element", function () {
      objL.clear();
      objL.push(2)
      objL.push(3)
      objL.push(5)
      objL.push(7)
      objL.push({})
      assert.deepEqual({}, objL.pop());
    });
    it("delete element from end and return this element", function () {
      objL.clear();
      objL.push(2)
      objL.push(3)
      objL.push(5)
      objL.push(7)
      objL.push([1, 2, 3, 5])
      assert.deepEqual([1, 2, 3, 5], objL.pop());

    });
  });
  describe("Tests for function unshift", function () {
    it("add element to begin and return this element", function () {
      objL.clear();
      objL.push(2)
      objL.push(3)
      objL.push(5)
      objL.push(7)
      assert.equal(777, objL.unshift(777));
    });
    it("add element to begin and size will be  bigger", function () {
      objL.unshift(111)
      objL.unshift(333)
      assert.equal(7, objL.size());
    });
  });
  describe("Tests for function shift", function () {
    it("delete element from begin and return this element", function () {
      objL.clear();
      objL.push(2)
      objL.push(3)
      objL.push(5)
      objL.push(7)
      assert.equal(2, objL.shift());
    });
    it("delete element from begin and size will be  bigger", function () {
      objL.shift()
      assert.equal(2, objL.size());
    });
  });
  describe("Tests for function toString", function () {
    it("return  all elements of objL  as string", function () {
      objL.clear();
      objL.push("aaa");
      objL.push([1, 2, 3, 4]);
      objL.push({});
      assert.equal("aaa, 1,2,3,4, [object Object]", objL.toString());
    });
  });
  describe("Tests for function sort", function () {
    it("is arg function?", function () {
      objL.clear();
      objL.push(2)
      objL.push(60)
      objL.push(500)
      objL.push(70)
      objL.push(8)
      assert.equal(false, objL.sort(333));
    });
  });
  describe("Tests for function toArrayList", function () {
    it("convert objL to ArrayList and return ArrayList", function () {
      objL.clear();
      const array = new ArrayList();
      array.clear();
      objL.push(2)
      objL.push(60)
      objL.push(500)
      objL.push(70)
      objL.push(8)
      array.push(2)
      array.push(60)
      array.push(500)
      array.push(70)
      array.push(8)
      assert.deepEqual(typeof array, typeof objL.toArrayList());
    });
  });
});