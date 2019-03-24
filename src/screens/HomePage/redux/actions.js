import { fetchProjects } from '../../../utils/api'
import { 
  FETCH_PROJECTS,
  OPEN_PROJECT_DIALOG,
  CLOSE_PROJECT_DIALOG,
  OPEN_PROFILE_DIALOG,
  CLOSE_PROFILE_DIALOG,
  SELECT_PROJECT,
  SHOW_PROJECT_THUMBNAILS_IN_PROJECT_DIALOG
} from '../../../utils/constants'

export const getProjects = () => dispatch => {
  return fetchProjects().then(projects => {
    dispatch({
      type: FETCH_PROJECTS,
      payload: projects,
    })
  })
}

export const openProjectDialog = index => dispatch => {
  dispatch({
    type: OPEN_PROJECT_DIALOG,
    payload: index,
  });
};

export const closeProjectDialog = () => dispatch => {
  dispatch({
    type: CLOSE_PROJECT_DIALOG,
  });
};

export const openProfileDialog = () => dispatch => {
  dispatch({
    type: OPEN_PROFILE_DIALOG,
  });
};

export const closeProfileDialog = () => dispatch => {
  dispatch({
    type: CLOSE_PROFILE_DIALOG,
  });
};

export const selectProject = (index) => dispatch => {
  dispatch({
    type: SELECT_PROJECT,
    payload: index
  });
}

export const showProjectThumbnailsInProjectDialog = () => dispatch => {
  dispatch({
    type: SHOW_PROJECT_THUMBNAILS_IN_PROJECT_DIALOG
  })
}