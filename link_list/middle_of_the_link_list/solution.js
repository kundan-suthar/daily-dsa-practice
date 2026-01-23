function Node(val){
    this.val = val;
    this.next = null
}
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
      if (index < 0 || index >= this.size) return -1;
    let curr = this.head;
    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }
    return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val)
    newNode.next = this.head;
    this.head = newNode;
    this.size++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val)
    if(this.head==null){
        this.head = newNode
    }else{
        let curr =this.head
        while(curr.next!==null){
            curr = curr.next
        }
        curr.next = newNode
    }
    this.size++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.size) return;

    if (index === 0) {
        this.addAtHead(val);
        return;
    }

    if (index === this.size) {
        this.addAtTail(val);
        return;
    }

    let newNode = new Node(val);
    let curr = this.head;

    for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }

    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
   if (index < 0 || index >= this.size) return;

    if (index === 0) {
        this.head = this.head.next;
        this.size--;
        return;
    }

    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }

    curr.next = curr.next.next;
    this.size--;
};
MyLinkedList.prototype.middleOfList =function(){
    let slow =fast = this.head;
    while(fast !=null&& fast.next!=null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
MyLinkedList.prototype.lltoArray = function(head){

}
///comment to stash my code
 let myLinkList = new MyLinkedList()
 myLinkList.addAtHead(5)
 myLinkList.addAtIndex(1,6)
 myLinkList.addAtIndex(2,7)
 myLinkList.addAtIndex(3,9)
 myLinkList.addAtTail(10)
 console.log(myLinkList);
 console.log(myLinkList.middleOfList(myLinkList.head));