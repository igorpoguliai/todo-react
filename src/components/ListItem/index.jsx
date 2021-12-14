import { ReactComponent as CheckIcon } from "../../assets/icons/check.svg";
import { ReactComponent as RemoveIcon } from "../../assets/icons/remove.svg";

export default function ListItem({
  checked,
  id,
  addetDate,
  todo,
  onCheckedClick,
  onDeleteClick,
}) {
  return (
    <li
      key={id}
      className={`list__item ${checked ? "list__item--checked" : ""}`}
    >
      <div className="list__item-checkbox">
        <CheckIcon />
      </div>
      <div onClick={() => onCheckedClick(id)} className="list__item-text">
        {todo}
      </div>
      <div className="list__item-date">{addetDate}</div>
      <button onClick={() => onDeleteClick(id)} className="list__item-remove">
        <RemoveIcon />
      </button>
    </li>
  );
}
