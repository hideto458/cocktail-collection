import styles from "./Button.module.css";

export default function Button({ children, onClick, type }) {
  return (
    <button
      className={`${styles.btn} ${type && styles[`btn-${type}`]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
