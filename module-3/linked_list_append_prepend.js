class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    append(value){
        const newNode = new Node(value);
        
        if(!this.head){
            // linked list is empty right now!!
            this.head = newNode;
            this.tail = this.head;
        } 
        else{
            // Linked list is not empty.

            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    prepend(value){
        const newNode = new Node(value);
        if(this.length == 0){
            this.head = newNode;
            this.length = newNode;
        } 
        else{
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    print(){
        let temp = this.head;
        while(temp!==null){
            console.log(temp.value);
            temp = temp.next;
        }
    }

}

const linkedList = new LinkedList();
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)

linkedList.print()
linkedList.prepend(0)
linkedList.prepend(-1)
linkedList.print()