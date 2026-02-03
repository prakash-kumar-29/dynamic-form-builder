import { useEffect, useState } from "react";
import TemplateFields from "../components/TemplateFields";
import MainFormContainer from "../components/MainFormContainer";
import MobileContainer from "../components/MobileContainer";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { showFormActions } from "../redux/actions";

function DynamicFormContainer() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const dispatch = useDispatch();
  const formTitle = useSelector((state) => state?.currentFormName?.formName);
  const isFormShowing = useSelector((state) => state?.isFormShowing);

  useEffect(() => {
    dispatch(showFormActions());
  }, [previewOpen]);

  return (
    <div className={clsx("dynamicFormContainer")}>
      <h2 className="formName">{formTitle}</h2>
      <TemplateFields isFormShowing={isFormShowing} />
      <MainFormContainer isFormShowing={isFormShowing} />
      <MobileContainer previewOpen={previewOpen} onPreview={setPreviewOpen} />
    </div>
  );
}

export default DynamicFormContainer;
