import { MdVerified } from "react-icons/md";
import classNames from "classnames";
import styles from "./styles.module.css";
import React, { useState } from "react";
import { Task } from ".";

interface ListItemProps {
  tasks: Task[];
  onDeleteTask: (index: number) => void;
}

export default function ListItem({ onDeleteTask, tasks }: ListItemProps) {
  

  return (
    <>
      <ul>
        {tasks.map((task, index: number) => {
          return (
            <>
              <div className={styles["main_list"]} key={`${index}`}>
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
    </>
  );
}
