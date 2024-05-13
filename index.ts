#! /usr/bin/env node
import inquirer from "inquirer";

let todos:string[] = [];
let condition = true;
let main = async() =>{
while(condition === true){
    let operators = await inquirer.prompt([
        {
            name:"operation",
            type:"list",
            message:"Select a operation what you want to do",
            choices:["Add Task","View Task","Delete Task","Update Task","Exit"]

    }
    ]);
    if (operators.operation === "Add Task"){
    await addTask();
    }
    else if (operators.operation === "View Task"){
    await viewTask();
    }
    else if (operators.operation === "Delete Task"){
    await deleteTask();
    }
    else if (operators.operation === "Update Task"){
    await updateTask();
    }
    }

    };
    let addTask = async () => {
    let firstTask = await inquirer.prompt([
    {
    name: "add",
    type: "input",
    message:"Enter your add Task?",
    }
    ]);
    todos.push(firstTask.add);
    console.log("Your Task has been Addad Successfully");
    };
    let viewTask = async () => {
    todos.forEach((task, index) =>{
    console.log(`${index+1}:${task}`);
    });
    };
    let deleteTask = async () => {
    let thirdTask = await inquirer.prompt([
    {
    name:"delete",
    type:"list",
    message:"Select a task to delete",
    choices:todos.map((item) => item),
    },
    ]);
    let newTodo = todos.filter ((val) => val !== thirdTask.delete);
    todos = [...newTodo];
    console.log("Your Task has been Deleted Successfully",);

    };
    let updateTask = async () => {
    await viewTask();
    let fourthTask = await inquirer.prompt([
    {
    name:"update",
    type:"number",
    message:"Enter a index no what you want to update",
    },
    ]);
    todos[fourthTask.update - 1] = fourthTask.add;
    console.log(`Your Task ${fourthTask.update} updated successfully`);
    todos;
    };
    main();        
