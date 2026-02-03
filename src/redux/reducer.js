import * as actions from "./actionTypes";

const initialState = {
  isLoginOpen: false,
  isFormOpen: false,
  isPreviewOpen: false,
  draggedItem: null,
  isFormShowing: false,
  formLists: [],
  currentFormName: null,
  currentFormFields: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payLoad } = action;

  switch (type) {
    case actions.SHOW_LOGIN:
    case actions.HIDE_LOGIN:
      return { ...state, isLoginOpen: payLoad };

    case actions.SHOW_FORM_ACTIONS:
    case actions.HIDE_FORM_ACTIONS:
      return { ...state, isFormOpen: payLoad };

    case actions.TURN_ON_EDIT:
    case actions.TURN_OFF_EDIT:
      return { ...state, isFormShowing: payLoad };

    case actions.OPEN_PREVIEW:
    case actions.CLOSE_PREVIEW:
      return { ...state, isPreviewOpen: payLoad };

    case actions.ADD_DRAG:
    case actions.DRAG_OVER:
    case actions.DROP_DRAG:
      return { ...state, draggedItem: { ...payLoad } };

    case actions.ADD_FORM:
    case actions.REMOVE_FORM:
      return { ...state, formLists: payLoad };

    case actions.CREATE_FORM:
    case actions.RESET_FORM_NAME:
    case actions.VALIDATE_FORM:
    case actions.FORM_VALID_STATUS:
      return { ...state, currentFormName: payLoad };

    case actions.UPDATE_VALIDATION:
    case actions.EDIT_FORM:
    case actions.ADD_FIELDS:
    case actions.REMOVE_FIELDS:
    case actions.REQUIRE_FIELD:
    case actions.STORE_LABEL:
    case actions.ADD_OPTIONS:
    case actions.REMOVE_OPTIONS:
    case actions.ADD_OPTION_VALUE:
    case actions.CLEAR_FORM:
    case actions.CHANGE_SOURCE_FILE:
    case actions.SHUFFLE_FIELDS:
      return { ...state, currentFormFields: payLoad };

    default:
      return state;
  }
};
