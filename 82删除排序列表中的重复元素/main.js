/**
 Definition for singly-linked list.
 **/
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}



var deleteDuplicates = function(head) {
    if(head == null) {
        return null;
    }
    let l = head,
        r = head.next,
        arr = [];
    if(!r) {
        return l;
    }

    while(!!l){
        if(!!r && r.val == l.val){
            let c = l.val;
            while(!!l && l.val == c) {
                l = l.next;
                if(!!l) {
                    r = l.next;
                }
            }
        }else if(!!r && !!r.next && r.next.val == r.val){
            let c = r.val;
            while(!!r && r.val == c) {
                r = r.next;
            }
        }else{ 
            arr.push(l);
            l = r;
            if(!!l) {
                r = l.next;
            }
            
        }
    }

    for(let i=0; i<arr.length; i++) {
        if(i < arr.length -1) {
            arr[i].next = arr[i+1];
        }else{
            arr[i].next = null;
        }
    }

    return arr[0]
};


// let n1 = new ListNode(1),
//     n2 = new ListNode(2),
//     n3 = new ListNode(3),
//     n4 = new ListNode(3),
//     n5 = new ListNode(4),
//     n6 = new ListNode(4),
//     n7 = new ListNode(5);

// n1.next = n2;
// n2.next = n3;
// n3.next = n4;
// n4.next = n5;
// n5.next = n6;
// n6.next = n7;

// deleteDuplicates(n1);



let n1 = new ListNode(1),
    n2 = new ListNode(1),
    n3 = new ListNode(1),
    n4 = new ListNode(2),
    n5 = new ListNode(3);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

deleteDuplicates(n1);


