import "../../assets/styles/block.css";
import { useDispatch } from "react-redux";
import { changeBackground } from "../../store/actions";

export const ButtonH = ({ title, color, active }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(changeBackground(color))}
      className={active}
      id="blockH"
    >
      {title}
    </button>
  );
};
