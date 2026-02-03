import { useDispatch } from "react-redux";
import { changeSource } from "../../redux/actions";

function FileInputButton({ fieldId, fieldAcceptType }) {
  const dispatch = useDispatch();

  const getFile = (getFile, id) => {
    if (!getFile) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const urlFile = reader.result;
      dispatch(changeSource({ urlFile, id }));
    });
    reader.readAsDataURL(getFile);
  };

  return (
    <div>
      <label htmlFor={fieldId} className="fileInputLabel">
        Updload
      </label>
      <input
        type="file"
        id={fieldId}
        style={{ display: "none" }}
        accept={fieldAcceptType}
        onChange={(event) => getFile(event.target.files[0], fieldId)}
      />
    </div>
  );
}

export default FileInputButton;
