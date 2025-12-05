import React from "react";

const Task = (props) => {
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <span className={`priority ${getPriorityClass(props.priority)}`}>{props.priority}</span>
            <button className="doneButton" onClick={props.markDone}>Done</button>
            <button className="deleteButton" onClick={props.deleteTask}>Delete</button>
        </div>
    );
}
    const getPriorityClass = (priority) => {
        if (!priority) return "priority-low";
        switch (priority.toLowerCase()) {
            case "high":
                return "priority-high";
            case "medium":
                return "priority-medium";
            case "low":
            default:
                return "priority-low";
        }
    };
export default Task;
