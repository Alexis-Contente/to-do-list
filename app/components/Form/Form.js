"use client";

import styles from "../../page.module.css";

export default function Form(props) {
  return (
    <form onSubmit={props.addTask}>
      <div className={styles.input__container}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add new task"
          value={props.newTask}
          onChange={(e) => props.setNewTask(e.target.value)}
        />
        <button className={styles.addbtn} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
