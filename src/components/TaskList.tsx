import {Trash} from "phosphor-react";

import styles from "./TaskList.module.css";

export type Task = {
  id: number;
  title: string;
  isComplete: boolean;
}

type TaskListProps = {
  tasks: Task[];
  onChangeTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
};

export function TaskList({tasks, onChangeTask, onDeleteTask}: TaskListProps) {
  function handleChangeTask(id: number) {
    onChangeTask(id);
  }

  function handleDeleteTask(id: number) {
    onDeleteTask(id);
  }

  return (
    <>
      <ul className={styles.taskList}>
        {tasks.map(task => (
          <li key={task.id} className={task.isComplete ? styles.taskComplete : ''}>
            <input
              type='checkbox'
              title='Sinalizar tarefa'
              checked={task.isComplete}
              onChange={() => handleChangeTask(task.id)}
            />
            <p>{task.title}</p>
            <button
              type='button'
              title='Apagar tarefa'
              onClick={() => handleDeleteTask(task.id)}
            >
              <Trash/>
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}