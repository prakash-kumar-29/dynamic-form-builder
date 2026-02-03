import { useDispatch, useSelector } from "react-redux";
import HeaderButtons from "./HeaderButtons";
import { CreateIcon } from "../utils/iconsAndTemplates";
import { showLogin } from "../redux/actions";

function Header() {
  const isFormOpen = useSelector((state) => state.isFormOpen);
  const isPreviewOpen = useSelector((state) => state.isPreviewOpen);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(showLogin());
  };

  return (
    <div className="appHeader">
      <h1 className="appHeaderTitle">Dynamic Form</h1>
      {!isPreviewOpen && (
        <div>
          {isFormOpen ? (
            <HeaderButtons />
          ) : (
            <button className="headerIcon" onClick={handleOnClick}>
              {<CreateIcon />}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
