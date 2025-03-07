import {ClipboardText} from "phosphor-react";

import styles from "./EmptyList.module.css";

export function EmptyList() {
  return (
    <>
      <div className={styles.emptyList}>
        <ClipboardText/>
        <p>
          <span><strong>Você ainda não tem tarefas cadastradas</strong></span>
          <br/>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </p>
      </div>
    </>
  )
}