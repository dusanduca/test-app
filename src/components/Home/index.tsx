import { NextPageWithLayout } from "@/pages/_app";
import styles from "./styles.module.css";
import Layout from "@/layout/layout";
import { useState } from "react";
import React from "react";
import { MdVerified } from "react-icons/md";
import classNames from "classnames";

interface Task {
  label: string;
  isDone: boolean;
}

const Home: NextPageWithLayout = () => {
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
  //task 1 --> task 1 (done)
  //task 1 --> --task1--
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setQuery(enteredName);
  };

  //Todo component <-- TodoInput, TodoList, TodoItem

  return (
    <div className={styles["home"]}>
      <div className={styles["todo_container"]}>
        <input
          type="text"
          placeholder="Add todo..."
          onChange={inputHandler}
          value={query}
        />
        <button onClick={onAddTask} disabled={!query}>
          Add
        </button>
        <ul>
          {tasks.map((task, index: number) => {
            return (
              <>
                <div className={styles["main_list"]}>
                  <li
                    key={`${task}-${index}`}
                    className={classNames({
                      [styles["list-item"]]: task.isDone,
                    })}
                  >
                    {task.label}
                  </li>
                  <button onClick={() => onDeleteTask(index)}>
                    <MdVerified />
                  </button>
                </div>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default Home;
