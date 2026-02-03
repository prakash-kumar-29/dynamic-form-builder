import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SavedForms from "../components/common/SavedForms";
import CreateFormModal from "../components/CreateFormModal";
import { clearForm, hideFormActions } from "../redux/actions";

function FormLists() {
  const formLists = useSelector((state) => state.formLists);
  const isLoginOpen = useSelector((state) => state.isLoginOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearForm());
    dispatch(hideFormActions());
  }, []);

  return (
    <div>
      <div className="formLists">
        {formLists.length > 0 &&
          formLists.map((form, index) => <SavedForms key={`${form?.formName?.formName}${index}`} formData={form} />)}
        {isLoginOpen && <CreateFormModal />}
      </div>
    </div>
  );
}

export default FormLists;
