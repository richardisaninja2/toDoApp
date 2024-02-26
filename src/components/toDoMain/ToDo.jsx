import React, { createContext, useEffect, useState } from "react";

import ToDoItem from "../ToDoItem";
import AddToDo from "../addtodo/AddToDo";
import './ToDoMain.css'
import { Link } from "react-router-dom";
const TaskContext = createContext();
// let tasks = [

// ]

export default function ToDo(props){
    let tasks = props.tasks;
    let setTasks = props.setTasks;
    let changeStatus = props.changeStatus;

    // let colors = ["#DE9E36", "#DEB841", "#3f96ec", "#fd6e41", "#EDD4B2", "#ECDCC9"];
    let colors = ["#1b1b1b", "#1b1b1b", "#1b1b1b", "#1b1b1b", "#1b1b1b", "#1b1b1b"];
    // let colors = "#1b1b1b";



    
    let checkMark = String.fromCodePoint(0x2713);
    let xMark = String.fromCodePoint(0x2715);


    useEffect(() => {

    },[])



    return(
        
        <>
            <TaskContext.Provider value={setTasks}>
                <h2 className="title">To Do Application</h2>
                <table>
                    <tbody>
                    {tasks.map((item, i) => {

                        return(
                            // <div className="container">
                            //     <td>{item.name}</td>
                            //     <td onClick={() => changeStatus(i)}>{item.completed == true ? checkMark : xMark}</td>
                            // </div>
                            <ToDoItem key={i} completed={item.completed} name={item.name} setTasks={setTasks} tasks={tasks} removeTasks={props.removeTasks} changeStatus={props.changeStatus} colors={colors[Math.ceil(i /2)]}/>
                        )
                    })}

                    </tbody>
                </table>
                <div style={{marginTop: "20px;"}} className="addNew">
                    <Link to="/add"><p>Add New Item</p></Link>
                </div>
                {/* <AddToDo setTasks={setTasks}/> */}
            </TaskContext.Provider>
        </>
    )
}