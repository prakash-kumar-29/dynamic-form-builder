import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CancelIcon } from "../utils/iconsAndTemplates";
import { addDrag, addDragOver, getRequired, removeElement, shuffleFields } from "../redux/actions";
import ChildOptions from "./common/ChildOptions";
import FormFieldSet from "./FormFieldSet";

function FormFieldsContainer({ currentField }) {
  const [checked, setChecked] = useState(currentField.required);
  const dispatch = useDispatch();

  const options = currentField.options;

  const handleRemove = (key) => {
    dispatch(removeElement(key));
  };

  const pickDragField = () => {
    dispatch(addDrag({ dragged: currentField, dragOver: currentField }));
  };

  const handleDragEnd = () => {
    dispatch(shuffleFields());
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    dispatch(addDragOver(currentField));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    dispatch(getRequired({ id: currentField.id, required: checked }));
  }, [checked]);

  return (
    <div
      className="newFieldsContainer"
      draggable
      onDragStart={pickDragField}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}>
      <div className="formFieldSets">
        <FormFieldSet currentField={currentField} />
        {!currentField.outPutType && (
          <div className="checkBoxField">
            <input
              type="checkbox"
              className="checkBox"
              checked={checked}
              id={currentField.id}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <label className="requiredText" htmlFor={currentField.id}>
              Required
            </label>
          </div>
        )}
        <span className="cancelIcon" onClick={() => handleRemove(currentField.id)}>
          <CancelIcon />
        </span>
      </div>
      {options?.length > 0 &&
        options.map((option) => (
          <ChildOptions
            key={option.id}
            childId={option.id}
            childName={option.value}
            parentId={currentField.id}
            valid={option.valid}
          />
        ))}
    </div>
  );
}

export default FormFieldsContainer;
