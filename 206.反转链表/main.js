import ListNode from '../utility/ListNode.js';

var reverseList = function(head) {

    if(head == null) {
        return null;
    }

    const first = head;
    let last;

    var recursive = function(head){
        if(!head.next) {
            last = head;
            return;
        }
    
        let current = head,
            next = head.next;
    
        
        recursive(next);
        if(!!next) {
            if(current == first) {
                current.next = null;
            }
            
            next.next = current;
        }
    }
    
    recursive(first);
    return last;
};


// var reverseList = function(head) {
//     let pre = next = null
//     let cur = head
//     while(cur){
//         next = cur.next
//         cur.next = pre
//         pre = cur
//         cur = next
//     }
//     return pre
// };


let n1 = new ListNode(1);
let n2 = new ListNode(2);
let n3 = new ListNode(3);
let n4 = new ListNode(4);
let n5 = new ListNode(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;


let node = reverseList(n1);
console.log(node);

