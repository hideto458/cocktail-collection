import { useNavigate } from "react-router-dom";

import Logo from "./Logo";
import Button from "./Button";
import styles from "./Header.module.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <Logo />
      <Button onClick={() => navigate("/favorites")} type="secondary">
        Watch Favorites
      </Button>
    </header>
  );
}
