import { useNavigate, useParams } from "react-router-dom";
import { useDrink } from "../contexts/DrinkContext";

export default function Modal() {
  const navigate = useNavigate();

  const { id } = useParams();
  const { favorites } = useDrink();
  const drink = id && favorites.find((fav) => fav.id === id);

  const handleCloseModal = (e) => {
    const isOverlayClicked = !e.target.closest(".modal__contents");
    const isButtonClicked = !!e.target.closest(".modal__button-close");
    if (isOverlayClicked || isButtonClicked) navigate("/favorites");
  };

  if (!id) return;

  return (
    <div className="modal__overlay" onClick={handleCloseModal}>
      <div className="modal__contents">
        <div className="modal__box">
          <img width={200} src={drink.imgUrl} alt={drink.name} />
        </div>
        <div className="modal__box">
          <h2 className="modal__drink-name">{drink.name}</h2>
          <p className="modal__instruction">{drink.instruction}</p>
        </div>
        <button className="modal__button-close" onClick={handleCloseModal}>
          ⨉
        </button>
      </div>
    </div>
  );
}
