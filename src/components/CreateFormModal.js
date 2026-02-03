import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCurrentForm, hideLogin, showFormActions } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { RemoveIcon } from "../utils/iconsAndTemplates";
import clsx from "clsx";

function CreateFormModal() {
  const [formName, setFormName] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formName === "") {
      setError(true);
      return;
    }
    navigate("/dynamicForm");
    dispatch(addCurrentForm({ formName, index: "new", isFormValid: false }));
    dispatch(hideLogin());
    dispatch(showFormActions());
  };

  useEffect(() => {
    if (formName) setError(false);
  }, [formName]);

  return (
    <div className="createFormContainer">
      <form onSubmit={handleSubmit} className="createFormModal">
        <h2>Create Form</h2>
        <span className="removeIcon" onClick={() => dispatch(hideLogin())}>
          <RemoveIcon />
        </span>
        <fieldset className="fieldSets">
          <label className={clsx(error && "error")}>Form Name</label>
          <br />
          <input type="text" className="formInputs" onChange={(e) => setFormName(e.target.value)} />
          {error && <p className="errorMessage">Form name cannot be empty</p>}
        </fieldset>
        <button className="appButton lightBlue" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateFormModal;
