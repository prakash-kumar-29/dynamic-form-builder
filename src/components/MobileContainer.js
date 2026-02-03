import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import MobileViewElements from "./common/MobileViewElements";
import { onClosePreview, onOpenPreview } from "../redux/actions";

function MobileContainer({ previewOpen, onPreview }) {
  const mobileElements = useSelector((state) => state.currentFormFields);
  const dispatch = useDispatch();

  const handlePreviewClick = () => {
    onPreview(!previewOpen);
    previewOpen ? dispatch(onClosePreview()) : dispatch(onOpenPreview());
  };

  return (
    <div className={clsx("previewContainer", previewOpen && "previewOpened")}>
      <div className={clsx("mobileDisplay", previewOpen && "scaleMobile")}>
        <div className={clsx("mobileContainer", previewOpen && "previewMobile")}>
          <span className="mobileCamera"></span>
          {mobileElements.length > 0 &&
            mobileElements.map((element) => <MobileViewElements key={element.id} mobileField={element} />)}
          <button className="previewButton" onClick={() => handlePreviewClick()}>
            {previewOpen ? "Back" : "Preview"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileContainer;
