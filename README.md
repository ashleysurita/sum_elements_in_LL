# sum_elements_in_LL

### Problem:
JS
```class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function sumElements(head) {
    // Write your code here.
    return -1
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log(sumElements(null)) // 0
console.log(sumElements(LL1)) // 10
console.log(sumElements(new ListNode(1))) // 1
```

Python
```
class ListNode:
    def __init__(self, value = 0, next = None): 
        self.value = value
        self.next = next
        
def sumElements(head: ListNode) -> int:
    # Write your code here.
    pass

# Test Cases
LL1 = ListNode(1, ListNode(4, ListNode(5)))
print(sumElements(None)) # 0
print(sumElements(LL1)) # 10
print(sumElements(ListNode(1))) # 1
```
