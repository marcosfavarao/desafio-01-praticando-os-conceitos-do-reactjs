import {Rocket} from "phosphor-react";

import styles from "./Header.module.css";

export function Header() {
  return (
    <>
      <header className={styles.appHeader}>
        <span className={styles.appLogo}>
          <Rocket/>
          <h1>{`todo`}</h1>
        </span>
      </header>
    </>
  )
}