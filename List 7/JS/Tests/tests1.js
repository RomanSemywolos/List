const obj = new ArrayList();
describe("ArrayList ", function () {
    describe("function size", function () {
        it("function must return size of obj, ", function () {
            obj.clear();
            obj.push(2);
            obj.push(3);
            obj.push(1);
            assert.equal(3, obj.size());
        })
    })
    describe("fuction push", function () {
        it("add 2 and return 2", function () {
            assert.equal(2, obj.push(2));
        })
        it("add -3 and return -3", function () {
            assert.equal(-3, obj.push(-3));
        })
        it("add '123' and return '123'", function () {
            assert.equal("123", obj.push("123"));
        })
        it("add '-123' and return '-123'", function () {
            assert.equal("-123", obj.push("-123"));
        })
        it("add 'aaaaaaa' and return 'aaaaaaa'", function () {
            assert.equal("aaaaaaa", obj.push("aaaaaaa"));
        })
        it("add [1,3,1,6,2] and return [1,3,1,6,2]", function () {
            let a = [1, 3, 1, 6, 2];
            assert.deepEqual([1, 3, 1, 6, 2], obj.push(a));
        })
        it("add empty object and return empty object", function () {
            let a = {};
            assert.deepEqual({}, obj.push(a));
        })
        it("add object and return object", function () {
            let a = {
                i: 2,
                g: 3
            };
            let b = {
                i: 2,
                g: 3
            };
            assert.deepEqual(b, obj.push(a));
        });
        it("add empty object and return empty object", function () {
            let a = {};
            assert.deepEqual({}, obj.push(a));
        });
    });
    describe("function pop", function () {
        it("delete element = 10 from end obj and return this ", function () {
            obj.push(20)
            obj.push(10)
            assert.equal(10, obj.pop());
        })
        it("delete element = 'aa' from end obj and return this ", function () {
            obj.push("dsd")
            obj.push("aa")
            assert.equal("aa", obj.pop());
        })
        it("delete element = array from end obj and return this ", function () {
            obj.push([1, 2, 3, 4, 5])
            obj.push([3, 2, 5, 2, 5])
            assert.deepEqual([3, 2, 5, 2, 5], obj.pop());
        })
        it("delete element = object from end obj and return this ", function () {
            let a = {
                i: 2
            }
            obj.push(a)
            assert.equal(a, obj.pop());
        })
    });

    describe("function shift", function () {
        it("delete element = 10 from begin obj and return size of obj ", function () {
            obj.clear();
            obj.length = 0;
            obj.push(20)
            obj.push(10)
            assert.equal(1, obj.shift());
        })
        it("delete element = '10' from begin obj and return size of obj ", function () {
            obj.clear();
            obj.length = 0;
            obj.push('20')
            obj.push('10')
            assert.equal(1, obj.shift());
        })
        it("delete element = 'aaa' from begin obj and return size of obj ", function () {
            obj.clear();
            obj.length = 0;
            obj.push('aaa')
            obj.push('dsds')
            assert.equal(1, obj.shift());
        })
        it("delete element = 'aaa' from begin obj and return size of obj ", function () {
            obj.clear();
            obj.length = 0;
            obj.push('aaa')
            obj.push('dsds')
            obj.push('dsds')
            obj.push('dsds')
            assert.equal(3, obj.shift());
        })
    });

    describe("function unshift", function () {
        it("add element = 10 from begin obj and return size of obj ", function () {
            obj.clear();
            obj.length = 0;
            obj.push(20)
            obj.push(10)
            assert.equal(3, obj.unshift());
        })
        it("add element = '10' from begin obj and return size of obj ", function () {
            obj.clear();
            obj.length = 0;
            obj.push('20')
            obj.push('10')
            assert.equal(3, obj.unshift());
        })
        it("add element = 'aaa' from begin obj and return size of obj ", function () {
            obj.clear();
            obj.length = 0;
            obj.push('aaa')
            obj.push('dsds')
            assert.equal(3, obj.unshift());
        })
        it("add element = 'aaa' from begin obj and return size of obj ", function () {
            obj.clear();
            obj.length = 0;
            obj.push('aaa')
            obj.push('dsds')
            obj.push('dsds')
            obj.push('dsds')
            assert.equal(5, obj.unshift());
        })
    });
    describe("function toString", function () {
        it("return obj as String", function () {
            obj.clear();
            obj.push(20)
            obj.push(10)
            obj.push("10")
            obj.push("aaa")
            obj.push([1, 4, 2, 4])
            obj.push({})
            assert.deepEqual("20, 10, 10, aaa, 1,4,2,4, [object Object]", obj.toString());
        })
    });
    describe("function sort()", function () {
        it("function sort obj and  save changes in this obj", function () {
            obj.clear();
            obj.push(40)
            obj.push(20)
            obj.push(300)
            obj.sort();

            assert.deepEqual([20, 300, 40], obj.getList());
        })
        it("function sort obj using commit function and  save changes in this obj", function () {
            obj.clear();
            obj.push(7)
            obj.push(4)
            obj.push(9)
            obj.push(1)
            obj.push(5)
            obj.push(3)

            obj.sort(function (a, b) {
                return a - b;
            });

            assert.deepEqual([1, 3, 4, 5, 7, 9], obj.getList());
        })
    });
    describe("Tests for function toLinkedList", function () {
        it("convert obj to LinkedList and return LinkedList", function () {
            const linked = new LinkedList()
            const array = new ArrayList();
            obj.clear();
            obj.push(2)
            obj.push(60)
            obj.push(500)
            obj.push(70)
            obj.push(8)
            linked.push(2)
            linked.push(60)
            linked.push(500)
            linked.push(70)
            linked.push(8)
            let a = array.toLinkedList()
            assert.deepEqual(typeof linked, typeof a);
        });
    });
    describe("Tests for function get", function () {
        it("get one arg = index of element and return this element", function () {
            obj.clear();
            obj.push(2)
            obj.push(60)
            obj.push(500)
            obj.push(70)
            obj.push(8)
            assert.deepEqual(60, obj.get(1));
        });
        it("get one arg = index of element(an elemenet is from outside the borders) and return this element", function () {
            obj.clear();
            obj.push(2)
            obj.push(60)
            obj.push(500)
            obj.push(70)
            obj.push(8)
            assert.deepEqual(false, obj.get(10));
        });
        it("get one arg = index of element(an elemenet is from outside the borders(is negative)) and return this element", function () {
            obj.clear();
            obj.push(2)
            obj.push(60)
            obj.push(500)
            obj.push(70)
            obj.push(8)
            assert.deepEqual(false, obj.get(-5));
        });
    });
});