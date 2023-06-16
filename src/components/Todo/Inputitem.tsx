import React from "react";
import { Task } from ".";

interface InputItemProps {
  onAddTask: () => void;
  onChangeInput: (query: string) => void;
}

export default function InputItem({
  onAddTask,
  onChangeInput,
}: InputItemProps) {
  return (
    <>
      <input
        type="text"
        placeholder="Add todo..."
        onChange={(e) => onChangeInput(e.target.value)}
      />
      <button onClick={onAddTask}>Add</button>
    </>
  );
}
