"use client";

import styles from "./page.module.css";

function TaskList(props) {
  return (
    <div className={styles.task__container}>
      <ul className={styles.task__list}>
        {props.tasks.map((task, index) => (
          <li className={styles.task} key={index}>
            <p className={styles.item}>{task}</p>
            <button
              className={styles.delete}
              onClick={() => props.deleteTask(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
