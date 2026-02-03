import { useDispatch } from "react-redux";
import { AddIcon } from "../../utils/iconsAndTemplates";
import { addOptions } from "../../redux/actions";

function AddOptionField({ fieldId }) {
  const dispatch = useDispatch();

  const addNewOption = () => {
    dispatch(addOptions(fieldId));
  };

  return (
    <div className="addOptionContainer" onClick={() => addNewOption()}>
      <p>Add option</p>
      <span>
        <AddIcon />
      </span>
    </div>
  );
}

export default AddOptionField;
