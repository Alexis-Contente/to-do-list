"use client";

import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const taskCount = tasks.length;
  console.log(taskCount);

  return (
    <>
      <Header></Header>

      <main className={styles.main}>
        <Form
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        ></Form>

        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          taskCount={taskCount}
        ></TaskList>
      </main>
    </>
  );
}
