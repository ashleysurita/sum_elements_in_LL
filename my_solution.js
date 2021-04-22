class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

/* 

hold a sum variable
hold a current variable
while current variable isn't null, then add the value to the sum
return sum

1 > 4 > 5
        c
*/

function sumElements(head) {
   if(!head) return 0
    
    let sum = 0
    let curr = head
    while(curr){
        sum += curr.value
        curr = curr.next
    }
    return sum
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log(sumElements(null)) // 0
console.log(sumElements(LL1)) // 10
console.log(sumElements(new ListNode(1))) // 1
