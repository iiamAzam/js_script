class Node{
        constructor(data){
                this.data = data
                this.next = next 
        }           
    
}

class Linklist {

    constructor(){
            this.Head = null
    }

    add(data){
            if (this.Head){
                    const new_node = new Node(data)
                    let current = this.Head
                    while(current){
                        current=current.next
                    }
                    current.next = new_node
            }
            else {
                    const  new_node = new Node(data)
                    new_node.next = this.Head
                    this.Head= new_node
            }
    }
    delete(index){
            if(!this.Head){
                return "list is empty"
            }
            else {
                let i = 0
                 const prev = null
                 let current = this.Head
                 while(i!==index){
                        prev = current
                        current = current.next
                 }
                prev.next = current.next

            }
        

    }

}