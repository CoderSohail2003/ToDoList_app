let todo = [];


while(true){

    let req = prompt("Please enter your request").toLowerCase();

    if (req == "quit"){
        console.log("Quitting app");
        break;
    }
    else if (req == "list"){
        console.log("____________");
        for(let i =0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("____________");

    }
    else if (req == "add"){
        let task = prompt("What task do u want to add?");
        todo.push(task);
        console.log("Task added successfully");
    }
    else if (req == "delete"){
        let idx = prompt("Task index u want to delete.");
        todo.splice(idx, 1);
        console.log("Task deleted successfully");
    }
    else{
        console.log("Type a valid request.")
    }





}