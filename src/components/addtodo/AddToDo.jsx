import React, { useRef, useState } from "react";
import './AddToDo.css'
import { useNavigate } from "react-router-dom";

export default function AddToDo(props){
    console.log("props"+props.tasks)
    const setTasks = props.setTasks;
    // const[name, setName] = useState("");
    // const[description, setDescription] = useState("");

    const nameRef = useRef();
    const descriptionRef = useRef();
    const priorityRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        let name = nameRef.current.value;
        let description = descriptionRef.current.value;
        let completed = false;
        let priority = priorityRef.current.value;

        if(name == "" || description == "" || priority == ""){
            alert("fields may not be left empty")
        }else{

            const newTask = {
                name: name,
                completed: completed,
                description: description,
                priority: priority
            }
            // console.log(newTask)

            setTasks(prevState => 
                [...prevState, newTask]
            )
            navigate("/");
        }


        
    }


    return(
        <div className="addTaskCont">
            <h2 className="createH2">Create Task</h2>
            <form>
                <label htmlFor="name">Task Name</label>
                <input type="text" placeholder="name" ref={nameRef}></input>
                <br/>
                <label htmlFor="priority">Priority</label>
                <select className="select" name="priority" ref={priorityRef}>
                    <option value="high" >High</option>
                    <option value="medium" >Medium</option>
                    <option value="low">Low</option>
                </select>
                <br/>
                <label htmlFor="description">Description</label>
                <input type="textarea" ref={descriptionRef}/>
                <br/>
                <button onClick={ handleSubmit}>Save</button>
            </form>
        </div>
    )
}