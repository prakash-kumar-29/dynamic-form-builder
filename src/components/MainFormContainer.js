import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { addField, dropDrag } from "../redux/actions";
import FormFieldsContainer from "./FormFieldsContainer";

function MainFormContainer({ isFormShowing }) {
  const addedElement = useSelector((state) => state.draggedItem);
  const currentFormElements = useSelector((state) => state.currentFormFields);
  const dispatch = useDispatch();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = () => {
    if (addedElement?.from === "template") {
      dispatch(addField(addedElement.item));
      dispatch(dropDrag());
    }
  };

  return (
    <div
      className={clsx("mainFormContainer", isFormShowing && "turnFalse")}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {currentFormElements?.length > 0 &&
        currentFormElements.map((field) => <FormFieldsContainer key={field.id} currentField={field} />)}
    </div>
  );
}

export default MainFormContainer;
