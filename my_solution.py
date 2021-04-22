class ListNode:
    def __init__(self, value = 0, next = None): 
        self.value = value
        self.next = next
        
def sumElements(head: ListNode) -> int:
    if not head:
        return 0
    
    sum = 0
    curr = head
    while curr:
        sum += curr.value
        curr = curr.next
        
    return sum
    

# Test Cases
LL1 = ListNode(1, ListNode(4, ListNode(5)))
print(sumElements(None)) # 0
print(sumElements(LL1)) # 10
print(sumElements(ListNode(1))) # 1
