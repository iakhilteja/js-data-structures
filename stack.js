class Stack {
    constructor(){
        //Initializing Empty stack
        this.item = [];
    }
     //Push a value into a stack
    push(value){
       
        this.item.push(value);
    }
    //pop a value into a stack
    pop(){
       
       return (this.item.length ===0)?'Stack Underflow': this.item.pop();
    }

}

//Create a stack object
const stack = new Stack();

console.log(stack);
stack.push(11);
stack.push(22);
stack.push(33);
stack.push(44);
console.log(Stack);