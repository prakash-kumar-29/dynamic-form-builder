import * as IconsBi from "react-icons/bi";
import * as IconsFi from "react-icons/fi";
import * as IconsMd from "react-icons/md";

export const templateTexts = [
  {
    name: "TextField",
    icon: IconsMd.MdTextFields,
    type: "text",
    required: false,
    label: "",
    valid: true,
  },
  {
    name: "Number",
    icon: IconsMd.Md123,
    type: "number",
    label: "",
    required: false,
    valid: true,
  },
  {
    name: "CheckList",
    icon: IconsMd.MdCheckCircle,
    type: "checkBox",
    children: true,
    label: "",
    required: false,
    valid: true,
    options: [],
  },
  {
    name: "Radio",
    icon: IconsMd.MdRadioButtonChecked,
    type: "radio",
    children: true,
    label: "",
    required: false,
    valid: true,
    options: [],
  },
  {
    name: "DropDown",
    icon: IconsMd.MdArrowDropDownCircle,
    type: "select",
    children: true,
    label: "",
    required: false,
    valid: true,
    options: [],
  },
  {
    name: "Date",
    icon: IconsMd.MdCalendarMonth,
    type: "date",
    label: "",
    required: false,
    valid: true,
  },
  {
    name: "File Upload",
    icon: IconsMd.MdDriveFolderUpload,
    type: "file",
    src: "",
    acceptType: "",
    valid: true,
  },
  {
    name: "Date Time",
    icon: IconsMd.MdQueryBuilder,
    type: "datetime-local",
    label: "",
    required: false,
    valid: true,
  },
  {
    name: "Multi Line",
    icon: IconsMd.MdSegment,
    type: "textarea",
    label: "",
    required: false,
    valid: true,
  },
  {
    label: "",
    name: "Image",
    icon: IconsMd.MdAddPhotoAlternate,
    type: "file",
    src: "",
    acceptType: "image/*",
    outPutType: true,
  },
  {
    label: "",
    name: "Video",
    icon: IconsMd.MdMovie,
    type: "file",
    src: "",
    acceptType: "video/*",
    outPutType: true,
  },
  {
    label: "",
    name: "Audio",
    icon: IconsMd.MdAudiotrack,
    type: "file",
    src: "",
    acceptType: "audio/*",
    outPutType: true,
  },
];

export const addSubOptions = IconsBi.BiAddToQueue;
export const saveIcon = IconsBi.BiSave;
export const CreateIcon = IconsMd.MdAddchart;
export const CancelIcon = IconsFi.FiXCircle;
export const RemoveIcon = IconsFi.FiX;
export const FolderIcon = IconsMd.MdFolder;
export const AddIcon = IconsMd.MdLibraryAdd;
