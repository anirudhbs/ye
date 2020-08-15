const { LinkedList } = require("./singly-linked-list");

describe("Singly Linked List", () => {
  it("should create an empty linked list", () => {
    const list = new LinkedList();
    expect(list).toEqual({ head: null, size: 0 });
  });

  it("should create a linked list and insert values", () => {
    const list = new LinkedList();
    list.insertAt(0, 1);
    list.insertAt(12, 8);
    list.add(-1);
    list.add("x");
    list.insertAt(0, 3);
    list.insertAt(2, 32);
    expect(list).toEqual({
      head: {
        value: 3,
        next: {
          value: 1,
          next: {
            value: 32,
            next: {
              value: -1,
              next: {
                value: "x",
                next: null
              }
            }
          }
        }
      },
      size: 5
    });
  });

  it("should create a linked list, insert value, and reverse it", () => {
    const list = new LinkedList();
    list.insertAt(0, 1);
    list.insertAt(12, 8);
    list.add(-1);
    list.add("x");
    list.insertAt(2, 32);
    list.insertAt(0, 3);

    list.remove(32);

    list.reverse();

    expect(list).toEqual({
      head: {
        value: "x",
        next: {
          value: -1,
          next: {
            value: 1,
            next: {
              value: 3,
              next: null
            }
          }
        }
      },
      size: 4
    });
  });

  it("should create a linked list, insert value, and reverse it", () => {
    const list = new LinkedList();
    list.insertAt(0, 1);
    list.insertAt(12, 8);
    list.add(-1);
    list.add("x");
    list.insertAt(0, 3);
    list.insertAt(2, 32);
    list.remove(32);

    list.reverse();

    list.add("offset");
    list.add("quavo");
    list.add("takeoff");
    // list is [ 'x', -1, 1, 3, 'offset', 'quavo', 'takeoff' ]
    expect(list.nthElementFromLast(4)).toEqual(3);
  });

  it("should check for loop, return true", () => {
    const list = new LinkedList();
    list.insertAt(0, 1);
    list.insertAt(12, 8);
    list.add(-1);
    list.add("x");
    list.insertAt(0, 3);
    list.insertAt(2, 32);
    list.remove(32);

    list.reverse();

    list.add("offset");
    list.add("quavo");
    list.add("takeoff");
    list.add("xy");
    list.head.next.next.next.next.next.next.next = list.head;
    // set 'xy' to point to 'x', therefore creating a loop
    // list is [ 'x', -1, 1, 3, 'offset', 'quavo', 'takeoff', 'xy']
    expect(list.detectLoop()).toEqual(true);
  });
});
