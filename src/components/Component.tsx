import React from "react";

import {Header} from "./Header.tsx";
import {EmptyList} from "./EmptyList.tsx";
import {TaskForm} from "./TaskForm.tsx";

import {TaskList} from "./TaskList.tsx";
import type {Task} from "./TaskList.tsx";

import styles from "./Component.module.css";

const TASKS: Task[] = [
  {
    id: 1,
    title: 'Estudar React',
    isComplete: false,
  }
];

export function Component() {
  const [tasks, setTasks] = React.useState<Task[]>(TASKS);

  function createNewTask(task: Task) {
    setTasks((prev) => [...prev, task]);
  }

  function changeTask(id: number) {
    setTasks((prev) => prev.map(task => task.id === id ? {...task, isComplete: !task.isComplete} : task))
  }

  function deleteTask(id: number) {
    setTasks((prev) => prev.filter(task => task.id !== id));
  }

  const totalTasks = tasks.length;
  const tasksCompleted = tasks.filter(task => task.isComplete).length;
  const totalTasksCompleted = totalTasks ? `${tasksCompleted} de ${totalTasks}` : '0';
  const isTaskListEmpty = tasks.length === 0;
  return (
    <>
      <main className={styles.container}>
        <Header />

        <section className={styles.taskContainer}>
          <TaskForm onCreateNewTask={createNewTask}/>

          <div className={styles.tasks}>
            <header className={styles.taskbar}>
              <h2 total-tasks={totalTasks}>Tarefas criadas</h2>
              <h2 total-tasks-completed={totalTasksCompleted}>Concluídas</h2>
            </header>

            <article className={styles.list}>
              {isTaskListEmpty && <EmptyList />}
              {!isTaskListEmpty && <TaskList tasks={tasks} onChangeTask={changeTask} onDeleteTask={deleteTask} /> }
            </article>
          </div>
        </section>
      </main>
    </>
  )
}