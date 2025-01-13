import { Link } from "react-router-dom";

export default function Logo({ size = 1 }) {
  return (
    <h1 className="logo" style={{ fontSize: `${size}rem` }}>
      <Link to="/">🍸 Cocktail Collection</Link>
    </h1>
  );
}
