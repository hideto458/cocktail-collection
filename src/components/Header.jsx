import { useNavigate } from "react-router-dom";

import Logo from "./Logo";
import Button from "./Button";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <Logo size={1.25} />
      <Button onClick={() => navigate("/favorites")} type="secondary">
        Watch Favorites
      </Button>
    </header>
  );
}
