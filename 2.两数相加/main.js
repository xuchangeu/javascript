/**
 * Definition for singly-linked list.
*/
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let c1 = l1,
        c2 = l2,
        carry = 0,
        head = new ListNode(),
        current = head;
    
    while(!!c1 || !!c2 || carry > 0) {
        let v1 = 0,
            v2 = 0;

        if(!!c1) {
            v1 = c1.val
        }
        if(!!c2) {
            v2 = c2.val;
        }

        let sum = v1 + v2 + carry;
        current.val = sum % 10;
        carry = Math.floor(sum / 10);

        if((!!c1 && !!c1.next) || (!!c2 && !!c2.next) || carry > 0) {
            current.next = new ListNode();
            current = current.next;
        }

        if(!!c1) {
            c1 = c1.next;
        }

        if(!!c2) {
            c2 = c2.next;
        }
    }

    return head;
};

let n1 = new ListNode(2)
let n2 = new ListNode(4)
let n3 = new ListNode(3)
let n4 = new ListNode(5)
let n5 = new ListNode(6)
let n6 = new ListNode(4)

n1.next = n2;
n2.next = n3;
n4.next = n5;
n5.next = n6;

addTwoNumbers(n1,n4);
