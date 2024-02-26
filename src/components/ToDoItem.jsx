import React, { useContext, useState } from "react";
// import TaskContext from './ToDo'


export default function ToDoItem(props){



    // let randomNumberInRange = Math.floor(Math.random() * ((colors.length - 1) - 0) + 0);

    let colors = props.colors;
    let setOriginalTasks = props.setTasks;
    let removeTasks = props.removeTasks;
    let changeStatus = props.changeStatus


    let checkMark = String.fromCodePoint(0x2713);
    let xMark = String.fromCodePoint(0x2715);



    return(
        <>
            <tr style={{backgroundColor: colors}} className="container">
                <td>{props.name}</td>
                <td onClick={() => changeStatus(props.name, props.completed)}>{props.completed == true ? checkMark : xMark}</td>
                <td onClick={() => removeTasks(props.name)}>Remove</td>
            </tr>
            <br/>
        </>
    )
}