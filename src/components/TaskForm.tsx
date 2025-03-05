import React from "react";
import {PlusCircle} from "phosphor-react";

import type {Task} from "./TaskList.tsx";

import styles from "./TaskForm.module.css";

type TaskFormProps = {
  onCreateNewTask: (task: Task) => void;
}

export function TaskForm({ onCreateNewTask } :TaskFormProps) {
  const [newTask, setNewTask] = React.useState<string>('');

  function handleCreateNewTask(event: React.FormEvent) {
    event.preventDefault();

    const newEmptyTask = {
      id: Date.now(),
      title: newTask,
      isComplete: false
    }
    onCreateNewTask(newEmptyTask);
    setNewTask('');
  }

  function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: React.InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Necessário preencher o campo');
  }

  const isNewTaskFieldEmpty = newTask.trim().length === 0;
  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.newTaskForm}>
        <input
          required
          type='text'
          name='task'
          placeholder='Adicione uma nova tarefa'
          value={newTask}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
        />
        <button
          type='submit'
          disabled={isNewTaskFieldEmpty}
        >
          Criar
          <PlusCircle/>
        </button>
      </form>
    </>
  )
}