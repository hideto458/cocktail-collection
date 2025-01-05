import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <p className={styles.emoji}>🍸</p>
      <p className={styles.text}>Loading...</p>
    </div>
  );
}
