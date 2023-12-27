import styles from "./Layout.module.css";

import MainForm from "../components/mainform/main";

export default function Layout() {
  return (
    <div className={styles.main}>
      <div className={`${styles.color} first`}></div>
      <div className={`${styles.color} second`}></div>
      <div className={`${styles.color} third`}></div>
      <img
        src="/wave.svg"
        className="wave"
        alt="wave"
      />
      <MainForm />
    </div>
  );
}
