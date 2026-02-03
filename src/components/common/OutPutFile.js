import ReactPlayer from "react-player";
import clsx from "clsx";

function OutPutFile({ name, src, required, label, type }) {
  switch (name) {
    case "Image": {
      return (
        <div className="imageField">
          <img className="imageField" src={src && src} alt={"Supported formats are .jpg, .png, .jpeg, .avif, .gif"} />
        </div>
      );
    }

    case "Video":
      return (
        <div className="videoField">
          <ReactPlayer
            url={src && src}
            width="100"
            height="50"
            alt="Supported formats are mp4, webm"
            autoplay
            controls
          />
        </div>
      );

    case "Audio":
      return (
        <div className="audioFieldContainer">
          <audio className="audioField" src={src && src} type="audio/mpeg" alt="Supported formats are mp3" controls />
        </div>
      );

    default:
      return (
        <div className="mobileElements">
          <label className={clsx("mobileLabel", required && label && "required")}>{label}</label>
          <input type={type} className="mobileInputs"></input>
        </div>
      );
  }
}

export default OutPutFile;
