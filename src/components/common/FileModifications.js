import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCurrentForm, pasteCurrentForm, removeForm, showFormActions, turnOffEdit } from "../../redux/actions";

function FileModifications({ formData }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleViewAndEdit = (formData, action) => {
    dispatch(showFormActions());
    dispatch(addCurrentForm(formData?.formName));
    dispatch(pasteCurrentForm(formData));
    if (action === "view") dispatch(turnOffEdit());
    navigate("/dynamicForm");
  };

  const handleDeleteDetails = (deleteIndex) => {
    dispatch(removeForm(deleteIndex));
  };

  return (
    <ul className="fileEditModal">
      <li className="fileEditButton" onClick={() => handleViewAndEdit(formData, "view")}>
        View Details
      </li>
      <li className="fileEditButton" onClick={() => handleViewAndEdit(formData, "edit")}>
        Edit
      </li>
      <li className="fileEditButton" onClick={() => handleDeleteDetails(formData?.formName?.index)}>
        Delete
      </li>
    </ul>
  );
}

export default FileModifications;
