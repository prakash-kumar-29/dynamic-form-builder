import clsx from "clsx";

function DropDown({ required, label, options }) {
  return (
    <div className="mobileElements">
      <label className={clsx("mobileLabel", required && label && "required")}>{label}</label>
      <select className="dropDown">
        <option>select</option>
        {options.length > 0 && options.map((option, index) => <option key={index}>{option.value}</option>)}
      </select>
    </div>
  );
}

export default DropDown;
