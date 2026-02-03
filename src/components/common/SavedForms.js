import { useState } from "react";
import { FolderIcon } from "../../utils/iconsAndTemplates";
import FileModifications from "./FileModifications";

function SavedForms({ formData }) {
  const [editForm, setEditForm] = useState(false);

  const showEditOptions = () => {
    setEditForm(!editForm);
  };

  const handleEscape = () => {
    if (editForm) setEditForm(!editForm);
  };

  return (
    <div>
      {editForm && <div className="transparentBackground" onClick={() => handleEscape()}></div>}
      <div className="savedForms">
        <div className="folderContainer" onClick={() => showEditOptions()}>
          <span className="folderIcon">
            <FolderIcon />
          </span>
        </div>
        <h2 className="folderName">{formData?.formName?.formName}</h2>
        {editForm && <FileModifications formData={formData} />}
      </div>
    </div>
  );
}

export default SavedForms;
