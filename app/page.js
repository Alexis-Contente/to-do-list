import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>My to do list</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.input}>
          <input type="text" placeholder="Add a new task" />
          <button>Add</button>
        </div>

        <div className={styles.task__container}>
          <ul className={styles.task__list}>
            <li className={styles.task}>
              <p className={styles.item}>Task</p>
              <button className={styles.delete}>X</button>
            </li>
            <li className={styles.task}>
            <p className={styles.item}>Task</p>
              <button className={styles.delete}>X</button>
            </li>
            <li className={styles.task}>
            <p className={styles.item}>Task</p>
              <button className={styles.delete}>X</button>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}
