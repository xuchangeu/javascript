//给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表



/**
Definition for singly-linked list.
**/
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}



/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let current = head;
    let arr = [];
    while(!!current) {
        arr.push(current);
        current = current.next
    }

    if(left-1>=0) {
        left = left-1;
    }else{
        left = 0;
    }

    if(right-1>=0) {
        right = right -1;
    }else{
        right = 0;
    }


    while(left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left ++;
        right --;
    }

    for(let i=0;i < arr.length - 1; i++){
        arr[i].next = arr[i+1];
    }
    
    return arr[0];
};


let n1 = new ListNode(1);
let n2 = new ListNode(2);
let n3 = new ListNode(3);
let n4 = new ListNode(4);
let n5 = new ListNode(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

let left = 2,
    right = 4;

reverseBetween(n1,left,right)



