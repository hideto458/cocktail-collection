export default function Button({ children, onClick, type }) {
  return (
    <button className={`button ${type && `button--${type}`}`} onClick={onClick}>
      {children}
    </button>
  );
}
