import { NextPageWithLayout } from "@/pages/_app";
import styles from "./styles.module.css";
import Layout from "@/layout/layout";
import React, { useState } from "react";
import Todo from "../Todo";



const Home: NextPageWithLayout = () => {
  
  const [query, setQuery] = useState("");
  

  return (
    <div className={styles["home"]}>
      <Todo/>
      
    </div>
  );
};

Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default Home;