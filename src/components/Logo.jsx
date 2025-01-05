import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <h1 className={styles.logo}>
      <Link to="/">🍸 Cocktail Collection</Link>
    </h1>
  );
}
