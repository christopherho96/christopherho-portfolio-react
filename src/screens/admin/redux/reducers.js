import {
  LOGIN,
  LOGOUT,
  FETCH_PROJECTS_FOR_DASHBOARD,
  OPEN_DELETE_PROJECT_DIALOG,
  CLOSE_DELETE_PROJECT_DIALOG,
  SHOW_PROGRESS_OVERLAY,
  HIDE_PROGRESS_OVERLAY,
  SHOW_SNACKBAR,
  HIDE_SNACKBAR,
  UPDATING_PROJECT,
  FINISHED_CREATING_UPDATING_PROJECT
} from '../../../utils/constants';

export const defaultState = {
  isLoggedIn: false,
  projectsFound : [],
  isDeleteDialogOpen: false,
  deleteProjectId: '',
  isUpdatingProject: false,
  projectSelectedForUpdating: {},
  showProgressOverlay: false,
  showSnackBar: false,
  snackBarMessage: ''
};

const admin = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      };
    case FETCH_PROJECTS_FOR_DASHBOARD:
      return {
        ...state,
        projectsFound : action.payload
      };
    case OPEN_DELETE_PROJECT_DIALOG:
      return {
        ...state,
        isDeleteDialogOpen: true,
        deleteProjectId: action.payload
      };
    case CLOSE_DELETE_PROJECT_DIALOG:
      return {
        ...state,
        isDeleteDialogOpen: false,
      };
    case HIDE_PROGRESS_OVERLAY:
      return {
        ...state,
        showProgressOverlay: false,
      };
    case SHOW_PROGRESS_OVERLAY:
      return {
        ...state,
        showProgressOverlay: true,
      };
    case SHOW_SNACKBAR:
      return {
        ...state,
        showSnackBar: true,
        snackBarMessage: action.payload
      };
    case HIDE_SNACKBAR:
      return {
        ...state,
        showSnackBar: false,
        snackBarMessage: ''
      };
    case UPDATING_PROJECT:
      return {
        ...state,
        isUpdatingProject: true,
        projectSelectedForUpdating: state.projectsFound[action.payload]
      };
    case FINISHED_CREATING_UPDATING_PROJECT:
      return {
        ...state,
        isUpdatingProject: false,
        projectSelectedForUpdating: {}
      };
    default:
      return state;
  }
};

export default admin;