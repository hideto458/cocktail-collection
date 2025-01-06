import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export default function Logo({ size = 1 }) {
  return (
    <h1 className={styles.logo} style={{ fontSize: `${size}rem` }}>
      <Link to="/">🍸 Cocktail Collection</Link>
    </h1>
  );
}
