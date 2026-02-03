import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearCurrentFormName,
  clearForm,
  turnOnEdit,
  updateValidation,
  updateFormValidStatus,
} from "../../redux/actions";
import { store } from "../../redux/store";

function Button({ buttonName, background, handleSave }) {
  const newFormName = useSelector((state) => state.currentFormName);
  const newFormFields = useSelector((state) => state.currentFormFields);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (buttonName === "Save") {
      dispatch(updateValidation());
      dispatch(updateFormValidStatus());
      const isFormValid = store.getState().currentFormName?.isFormValid;
      if (!isFormValid) return;
      handleSave({
        formName: { ...newFormName },
        formFields: newFormFields,
      });
    }
    dispatch(clearCurrentFormName());
    dispatch(clearForm());
    dispatch(turnOnEdit());
    navigate("/");
  };

  return (
    <button className={clsx("appButton", background)} onClick={handleClick}>
      {buttonName}
    </button>
  );
}

export default Button;
