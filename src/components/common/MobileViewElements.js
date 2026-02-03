import RadioButtons from "../UI/RadioButtons";
import CheckBoxField from "../UI/CheckBoxField";
import DropDown from "../UI/DropDown";
import OutPutFile from "./OutPutFile";
import clsx from "clsx";

function MobileViewElements({ mobileField }) {
  switch (mobileField.type) {
    case "radio":
      return <RadioButtons {...mobileField} />;

    case "checkBox":
      return <CheckBoxField {...mobileField} />;

    case "select":
      return <DropDown {...mobileField} />;

    case "file":
      return <OutPutFile {...mobileField} />;

    default:
      return (
        <div className="mobileElements">
          <label className={clsx("mobileLabel", mobileField.required && mobileField.label && "required")}>
            {mobileField.label}
          </label>
          {mobileField.name === "Multi Line" ? (
            <textarea className="mobileInputs fitWidthSize" />
          ) : (
            <input
              type={mobileField.type}
              className={clsx("mobileInputs", mobileField.type === "date" && "fitWidthSize")}
              max={new Date().toISOString().slice(0, 10)}
            />
          )}
        </div>
      );
  }
}

export default MobileViewElements;
