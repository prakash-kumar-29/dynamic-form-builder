import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CancelIcon } from "../../utils/iconsAndTemplates";
import { addOptionValue, removeOptions } from "../../redux/actions";

function ChildOptions({ childId, childName, parentId, valid }) {
  const dispatch = useDispatch();
  const [optionValue, setOptionValue] = useState(childName);
  const [isValid, setIsValid] = useState(valid);

  const removeChild = (parentId, childId) => {
    dispatch(removeOptions({ parentId, childId }));
  };

  const handleValueChange = (value) => {
    setOptionValue(value);
    setIsValid(Boolean(value));
  };

  useEffect(() => {
    dispatch(addOptionValue({ value: optionValue, parent: parentId, child: childId, valid: isValid }));
  }, [optionValue]);

  return (
    <div>
      <div className="childOptions">
        <input
          type="text"
          className="childOptionInputs"
          onChange={(e) => handleValueChange(e.target.value)}
          value={childName}
        />
        <span className="removeChildButton" onClick={(e) => removeChild(parentId, childId)}>
          <CancelIcon />
        </span>
      </div>
      {!valid && <p className="optionsFieldError">Value must be filled</p>}
    </div>
  );
}

export default ChildOptions;
