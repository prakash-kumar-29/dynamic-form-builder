import { useDispatch } from "react-redux";
import { templateTexts } from "../utils/iconsAndTemplates";
import { addDrag } from "../redux/actions";
import clsx from "clsx";

function TemplateFields({ isFormShowing }) {
  const dispatch = useDispatch();

  const handleDragStart = (item) => {
    dispatch(addDrag({ item, from: "template" }));
  };

  return (
    <div className={clsx("templateContainer", isFormShowing && "turnFalse")}>
      {templateTexts.map((text) => (
        <div key={text.name} className="templateFields" draggable onDragStart={() => handleDragStart(text)}>
          <p className="templateTexts">{text.name}</p>
          <span className="templateIcons">
            <text.icon />
          </span>
        </div>
      ))}
    </div>
  );
}

export default TemplateFields;
