// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
    // todoFunctions.generateId() will give you a unique id
    // You do not need to understand the implementation of this function.
    generateId: (function () {
        var idCounter = 0;

        function incrementCounter() {
            return (idCounter += 1);
        }

        return incrementCounter;
    })(),

    //cloneArrayOfObjects will create a copy of the todos array 
    //changes to the new array don't affect the original
    cloneArrayOfObjects: function (todos) {
        return todos.map(function (todo) {
            return JSON.parse(JSON.stringify(todo));
        });
    },

    addTodo: function (todos, newTodo) {
        // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
        // returns a new array, it should contain todos with the newTodo added to the end.
        // add an id to the newTodo. You can use the generateId function to create an id.
        // hint: array.concat
        (!isNaN(newTodo)) ? -1 : true;
        (newTodo === ' ' || newTodo === null) ? -1 : true;
        let newTodos = todos.map(todo => ({ ...todo }));
        let obj = {};
        let obj2 = {};
        obj.id = todoFunctions.generateId();
        obj.description = newTodo;
        obj.done = false;
        newTodos.push(obj);
        //   console.log(newTodos);
        return newTodos;

    },
    deleteTodo: function (todos, idToDelete) {
        // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
        // return a new array, this should not contain any todo with an id of idToDelete
        // hint: array.filter
        let newTodos = todos.map(todo => ({ ...todo }));
        (isNaN(idToDelete))?-1:true;
        newTodos=newTodos.filter(todo=>todo.id!==idToDelete);
        return newTodos;
    },
    markTodo: function (todos, idToMark) {
        // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
        // in the new todo array, all elements will remain unchanged except the one with id: idToMark
        // this element will have its done value toggled
        // hint: array.map
        let newTodos = todos.map(todo => ({ ...todo }));
        for(let todo in newTodos) {
            if(todo.id==idToMark) todo.done=true;
        } 
        return newTodos;
    },
    sortTodos: function (todos, sortFunction) {
        // stretch goal! Do this last
        // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
        // sortFunction will have same signature as the sort function in array.sort
        // hint: array.slice, array.sort
        let newTodos = todos.map(todo => ({ ...todo }));
        let todosNotDone = [];
        let todosDone=[];
        
        for(let todo in newTodos){
            if(todo.done) todosDone.push(todo);
            else todosNotDone.push(todo);
        }
        //sort todosDone
        todosDone=sortFunction(todosDone);
        //sort todosNotDone
        
        todosNotDone=sortFunction(todosNotDone);

    },
    //sortFunction used to sort todos 
    sortFunction: function(todos){
        let newArray = todos.map(todo => ({ ...todo })); 
        newArray.sort((a,b)=>{
            if(a.description<b.description) return -1;
            if(a.description>b.description) return 1;
            return 0;
        });
        return newArray;
    },
};


// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details: 
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
    module.exports = todoFunctions;
}

