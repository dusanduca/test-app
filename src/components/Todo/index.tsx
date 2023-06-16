import { useState } from "react";
import React from "react";
import styles from "./styles.module.css";
import ListItem from "./ListItem";
import InputItem from "./Inputitem";

export interface Task {
  label: string;
  isDone: boolean;
}



export default function Todo() {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [query, setQuery] = useState("");


  const onAddTask = () => {
    const newArray = [...tasks];
    newArray.push({
      label: query,
      isDone: false,
    });
    setTasks(newArray);
  };

  const onChangeInput = (query: string) => {
    setQuery(query);
  };
  
  const onDeleteTask = (index: number) => {
    const newTasks = [...tasks];
    const foundTask = newTasks[index];
    const newTask: Task = {
      isDone: true,
      label: foundTask.label,
    };
    newTasks.splice(index, 1, newTask);
    setTasks(newTasks);
  };

  return (
    <div className={styles["todo_container"]}>
      <>
        <InputItem onAddTask={onAddTask} onChangeInput={onChangeInput} />
        <ListItem  onDeleteTask={onDeleteTask}   tasks={tasks} />
      </>
    </div>
  );
}
