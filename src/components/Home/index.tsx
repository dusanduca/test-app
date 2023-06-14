import { NextPageWithLayout } from "@/pages/_app";
import styles from "./styles.module.css";
import Layout from "@/layout/layout";
import { useState } from "react";
import React from "react";

const Home: NextPageWithLayout = () => {
  const [array, setArray] = React.useState<string[]>([]);
  const [query, setQuery] = useState("");

  const handleBtn = () => {
    const newArray = [...array];
    newArray.push(query);
    setArray(newArray);
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setQuery(enteredName);
  };

  //Todo component <-- TodoInput, TodoList, TodoItem

  return (
    <div className={styles["home"]}>
      <div className="todo_container">
        <input
          type="text"
          placeholder="Add todo..."
          onChange={inputHandler}
          value={query}
        />
        <button onClick={handleBtn} disabled={!query}>
          Add
        </button>
        <ul>
          {array.map((value, index: number) => {
            return <li key={`${value}-${index}`}>{value}</li>;
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
