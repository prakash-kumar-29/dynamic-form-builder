import Button from "./UI/Button";
import { useDispatch } from "react-redux";
import { addList } from "../redux/actions";

function HeaderButtons() {
  const dispatch = useDispatch();

  const handleSave = (newList) => {
    dispatch(addList(newList));
  };

  return (
    <div className="headerButtons">
      <Button buttonName="Save" background="darkBlue" handleSave={handleSave} />
      <Button buttonName="Cancel" background="red" />
    </div>
  );
}

export default HeaderButtons;
