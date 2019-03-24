import {
  FETCH_PROJECTS,
  OPEN_PROJECT_DIALOG,
  CLOSE_PROJECT_DIALOG,
  OPEN_PROFILE_DIALOG,
  CLOSE_PROFILE_DIALOG,
  SELECT_PROJECT,
  SHOW_PROJECT_THUMBNAILS_IN_PROJECT_DIALOG
} from '../../../utils/constants';

export const defaultState = {
  projectsFound: [],
  isProjectDialogOpen: false,
  isProfileDialogOpen: false,
  project: {},
  showProjectThumbnailsInDialog: false
};

const home = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        projectsFound: action.payload,
      };
    case OPEN_PROJECT_DIALOG:
      return {
        ...state,
        isProjectDialogOpen: true,
        project: state.projectsFound[action.payload]
      };
    case CLOSE_PROJECT_DIALOG:
      return {
        ...state,
        isProjectDialogOpen: false,
        project: {},
        showProjectThumbnailsInDialog: false
      };
    case SELECT_PROJECT:
      return {
        ...state,
        project: state.projectsFound[action.payload]
      };
    case SHOW_PROJECT_THUMBNAILS_IN_PROJECT_DIALOG:
      return {
        ...state,
        showProjectThumbnailsInDialog: true
      };
    case OPEN_PROFILE_DIALOG:
      return {
        ...state,
        isProfileDialogOpen: true
      };
    case CLOSE_PROFILE_DIALOG:
      return {
        ...state,
        isProfileDialogOpen: false,
      };
    default:
      return state;
  }
};

export default home;