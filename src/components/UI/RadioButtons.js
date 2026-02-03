import clsx from "clsx";

function RadioButtons({ required, label, options, id }) {
  return (
    <div className="mobileElements">
      <label className={clsx("mobileLabel", required && label && "required")}>{label}</label>
      {options?.length > 0 &&
        options.map((option, index) => (
          <div key={index}>
            <input type="radio" name={id} id={`${id}${index}`} />
            <label htmlFor={`${id}${index}`}>{option.value}</label>
          </div>
        ))}
    </div>
  );
}

export default RadioButtons;
