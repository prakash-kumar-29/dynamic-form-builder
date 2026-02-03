import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeSource, storeLabel } from "../redux/actions";
import AddOptionField from "./common/AddOptionField";
import FileInputButton from "./UI/FileInputButton";

function FormFieldSet({ currentField }) {
  const [inputValue, setInputValue] = useState(currentField?.label);
  const dispatch = useDispatch();

  const fieldId = currentField.id;
  const isValid = currentField?.valid;

  useEffect(() => {
    if (currentField?.outPutType) {
      dispatch(changeSource({ urlFile: inputValue, id: fieldId }));
    }
    dispatch(storeLabel({ id: fieldId, value: inputValue, valid: isValid }));
  }, [inputValue]);

  return (
    <fieldset className="newFieldSets">
      <label className="newFieldLabel">{currentField.name}</label>
      <input className="formInputs" type="text" value={inputValue} onInput={(e) => setInputValue(e.target.value)} />
      {currentField?.outPutType && (
        <FileInputButton fieldId={currentField.id} fieldAcceptType={currentField.acceptType} />
      )}
      {currentField?.children && <AddOptionField fieldId={currentField.id} />}
      {!inputValue && !isValid && !currentField.outPutType && (
        <p className="dynamicFormError">Label name must be filled</p>
      )}
    </fieldset>
  );
}

export default FormFieldSet;
