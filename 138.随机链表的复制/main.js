
function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};


var copyRandomList = function(head, cachedNode = new Map()) {
    if (!head) {
        return null;
    }
    if (!cachedNode.has(head)) {
        cachedNode.set(head, {val: head.val});
        let next = copyRandomList(head.next, cachedNode);
        let random = copyRandomList(head.random, cachedNode);
        Object.assign(cachedNode.get(head), 
        {
            next,
            random
        })
    }
    return cachedNode.get(head);
}


let n1 = new Node(7),
    n2 = new Node(13),
    n3 = new Node(11),
    n4 = new Node(10),
    n5 = new Node(1);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

n1.random = null;
n2.random = n1;
n3.random = n5;
n4.random = n3;
n5.random = n1;

let head = copyRandomList(n1);
console.log(head)