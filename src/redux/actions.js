import { store } from "./store";
import * as actions from "./actionTypes";

const getCurrentFields = () => store.getState().currentFormFields;

const filterFields = (originalArray, filterId) => {
  return [...originalArray].filter((element) => element.id !== filterId);
};

export const showLogin = () => ({ type: actions.SHOW_LOGIN, payLoad: true });

export const hideLogin = () => ({ type: actions.HIDE_LOGIN, payLoad: false });

export const showFormActions = () => ({ type: actions.SHOW_FORM_ACTIONS, payLoad: true });

export const hideFormActions = () => ({ type: actions.HIDE_FORM_ACTIONS, payLoad: false });

export const turnOffEdit = () => ({ type: actions.TURN_OFF_EDIT, payLoad: true });

export const turnOnEdit = () => ({ type: actions.TURN_ON_EDIT, payLoad: false });

export const onOpenPreview = () => ({ type: actions.OPEN_PREVIEW, payLoad: true });

export const onClosePreview = () => ({ type: actions.CLOSE_PREVIEW, payLoad: false });

export const addDrag = (dragged) => ({ type: actions.ADD_DRAG, payLoad: dragged });

export const dropDrag = () => ({ type: actions.DROP_DRAG, payLoad: null });

export const addDragOver = (dragOverItem) => {
  const prevDragItem = store.getState().draggedItem;

  return { type: actions.DRAG_OVER, payLoad: { ...prevDragItem, dragOver: dragOverItem } };
};

export const addList = (newList) => {
  const currentFormLists = store.getState().formLists;
  const currentForm =
    newList.formName.index === "new"
      ? { ...newList, formName: { ...newList.formName, index: currentFormLists.length } }
      : { ...newList };
  const updatedFormList =
    newList.formName.index === "new"
      ? [...currentFormLists, currentForm]
      : currentFormLists.map((form, listIndex) => (listIndex === newList.formName.index ? { ...currentForm } : form));

  return { type: actions.ADD_FORM, payLoad: updatedFormList };
};

export const removeForm = (removeIndex) => {
  const currentFormLists = store.getState().formLists;
  const updatedList = currentFormLists
    .filter((list) => list.formName.index !== removeIndex)
    .map((list, index) => ({ ...list, formName: { ...list.formName, index: index } }));

  return { type: actions.REMOVE_FORM, payLoad: updatedList };
};

export const addCurrentForm = (formName) => ({ type: actions.CREATE_FORM, payLoad: formName });

export const addField = (addedElement) => {
  const currentFormFields = getCurrentFields();
  const newField = { ...addedElement, id: `${addedElement.name}${currentFormFields.length + 1}` };
  const updatedFields = [...currentFormFields, newField];

  return { type: actions.ADD_FIELDS, payLoad: updatedFields };
};

export const shuffleFields = () => {
  const draggedItem = store.getState().draggedItem;
  const dragOverIndex = getCurrentFields().findIndex((field) => field.id === draggedItem.dragOver.id);
  const updatedFields =
    draggedItem.dragged.id === draggedItem.dragOver.id
      ? getCurrentFields()
      : getCurrentFields()
          .filter((field) => field.id !== draggedItem.dragged.id)
          .toSpliced(dragOverIndex, 0, draggedItem.dragged);

  return { type: actions.SHUFFLE_FIELDS, payLoad: updatedFields };
};

export const removeElement = (removeId) => {
  const currentFormFields = getCurrentFields();
  const updatedFields = filterFields(currentFormFields, removeId);

  return { type: actions.REMOVE_FIELDS, payLoad: updatedFields };
};

export const getRequired = (req) => {
  const currentFormFields = getCurrentFields();
  const updatedFields = currentFormFields.map((ele) => (ele.id === req.id ? { ...ele, required: req.required } : ele));

  return { type: actions.REQUIRE_FIELD, payLoad: updatedFields };
};

export const storeLabel = (value) => {
  const currentFormFields = getCurrentFields();
  const updatedFields = currentFormFields.map((ele) =>
    ele.id === value.id ? { ...ele, label: value.value, valid: value.valid } : ele
  );

  return { type: actions.STORE_LABEL, payLoad: updatedFields };
};

export const addOptions = (id) => {
  const currentFormFields = getCurrentFields();
  const updatedFields = currentFormFields.map((ele) =>
    ele.id === id ? { ...ele, options: [...ele?.options, { id: ele.options.length + 1, value: "", valid: true }] } : ele
  );

  return { type: actions.ADD_OPTIONS, payLoad: updatedFields };
};

export const removeOptions = (removeItem) => {
  const currentFormFields = getCurrentFields();
  const updatedFields = currentFormFields.map((ele) =>
    ele.id === removeItem.parentId
      ? {
          ...ele,
          options: filterFields(ele.options, removeItem.childId).map((filtered, index) => ({
            ...filtered,
            id: index,
          })),
        }
      : { ...ele }
  );

  return { type: actions.REMOVE_OPTIONS, payLoad: updatedFields };
};

export const addOptionValue = (item) => {
  const currentFormFields = getCurrentFields();
  const updatedFields = currentFormFields.map((ele) =>
    ele.id === item.parent
      ? {
          ...ele,
          options: ele.options.map((option) =>
            option.id === item.child ? { ...option, value: item.value, valid: item.valid } : { ...option }
          ),
        }
      : { ...ele }
  );

  return { type: actions.ADD_OPTION_VALUE, payLoad: updatedFields };
};

export const changeSource = (sourceItem) => {
  const currentFormFields = getCurrentFields();
  const updatedFields = currentFormFields.map((ele) =>
    ele.id === sourceItem.id ? { ...ele, src: sourceItem.urlFile } : { ...ele }
  );

  return { type: actions.CHANGE_SOURCE_FILE, payLoad: updatedFields };
};

export const updateValidation = () => {
  const currentFormFields = getCurrentFields();
  const updateValidation = currentFormFields.map((field) => {
    if (field.children)
      return {
        ...field,
        valid: Boolean(field.label),
        options: field.options.map((option) => ({ ...option, valid: Boolean(option.value) })),
      };

    return { ...field, valid: Boolean(field.label) };
  });

  return { type: actions.UPDATE_VALIDATION, payLoad: updateValidation };
};

export const updateFormValidStatus = () => {
  const currentFormFields = getCurrentFields();
  const currentFormName = store.getState().currentFormName;
  const isFormValid = currentFormFields.every((field) => {
    if (field.type === "file" && field.name !== "File Upload") return true;
    if (field.children) return field.valid && field.options.every((option) => option.value);
    return field.valid;
  });

  return { type: actions.FORM_VALID_STATUS, payLoad: { ...currentFormName, isFormValid } };
};

export const pasteCurrentForm = (formData) => ({ type: actions.EDIT_FORM, payLoad: formData.formFields });

export const clearCurrentFormName = () => ({ type: actions.RESET_FORM_NAME, payLoad: null });

export const clearForm = () => ({ type: actions.CLEAR_FORM, payLoad: [] });
