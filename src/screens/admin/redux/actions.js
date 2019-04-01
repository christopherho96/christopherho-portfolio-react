import {
  login,
  fetchProjects,
  deleteProject,
  uploadImage,
  createProject,
  updateProject
} from "../../../utils/api";
import {
  LOGIN,
  LOGOUT,
  ACCESS_TOKEN,
  FETCH_PROJECTS_FOR_DASHBOARD,
  OPEN_DELETE_PROJECT_DIALOG,
  CLOSE_DELETE_PROJECT_DIALOG,
  SHOW_PROGRESS_OVERLAY,
  HIDE_PROGRESS_OVERLAY,
  SHOW_SNACKBAR,
  HIDE_SNACKBAR,
  UPDATING_PROJECT,
  FINISHED_CREATING_UPDATING_PROJECT
} from "../../../utils/constants";
import history from "../../../utils/history";

export const loginUser = user => dispatch => {
  login(user).then(token => {
    if (token !== undefined) {
      dispatch({
        type: LOGIN
      });
      localStorage.setItem(ACCESS_TOKEN, token);
      history.push("/dashboard");
    } else {
      dispatch(handleError("Invalid Credentials."));
    }
  });
};

export const logoutUser = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
  localStorage.removeItem(ACCESS_TOKEN);
  history.push("/login");
};

export const deleteSelectedProject = projectId => dispatch => {
  deleteProject(projectId).then(success => {
    if (success) {
      window.location.reload();
    } else {
      dispatch(
        handleError(
          "Failed to delete project. Please check the project exists."
        )
      );
    }
  });
};

export const getProjects = () => dispatch => {
  return fetchProjects().then(projects => {
    dispatch({
      type: FETCH_PROJECTS_FOR_DASHBOARD,
      payload: projects
    });
  });
};

export const updateProjectInProjectForm = index => dispatch => {
  dispatch({
    type: UPDATING_PROJECT,
    payload: index
  });
};

export const finishedCreatingUpdatingProject = () => dispatch => {
  dispatch({
    type: FINISHED_CREATING_UPDATING_PROJECT
  });
};

export const openDeleteProjectDialog = projectId => dispatch => {
  dispatch({
    type: OPEN_DELETE_PROJECT_DIALOG,
    payload: projectId
  });
};

export const closeDeleteProjectDialog = () => dispatch => {
  dispatch({
    type: CLOSE_DELETE_PROJECT_DIALOG
  });
};

export const createAProject = (
  project,
  isUpdatingAPreviousProject
) => dispatch => {
  var errorMessage = formCheck(project);
  if (!errorMessage) {
    dispatch({
      type: SHOW_PROGRESS_OVERLAY
    });
    var uploadImageCalls = [];

    project.pictures.forEach(picture => {
      uploadImageCalls.push(uploadImage(picture));
    });
    Promise.all(uploadImageCalls)
      .then(responses => {
        var pictureUrls = responses.map(response => response.url);
        uploadImage(project.thumbnail)
          .then(json => {
            if (isUpdatingAPreviousProject) {
              updateProject(
                pictureUrls,
                json.url,
                project.title,
                project.description,
                project.type,
                project.id,
                project.linkReference
              )
                .then(json => {
                  dispatch({
                    type: HIDE_PROGRESS_OVERLAY
                  });
                  history.push("/dashboard");
                })
                .catch(error => {
                  dispatch(handleError(error.message));
                });
            } else {
              createProject(
                pictureUrls,
                json.url,
                project.title,
                project.description,
                project.type,
                project.linkReference,
                project.technologies,
                project.summary
              )
                .then(json => {
                  dispatch({
                    type: HIDE_PROGRESS_OVERLAY
                  });
                  history.push("/dashboard");
                })
                .catch(error => {
                  dispatch(handleError(error.message));
                });
            }
          })
          .catch(error => {
            dispatch(handleError(error.message));
          });
      })
      .catch(error => {
        dispatch(handleError(error));
      });
  } else {
    dispatch(handleError(errorMessage));
  }
};

const handleError = message => dispatch => {
  dispatch({
    type: SHOW_SNACKBAR,
    payload: message
  });
};

export const hideSnackBar = () => dispatch => {
  dispatch({
    type: HIDE_SNACKBAR
  });
};

const formCheck = project => {
  var message;
  if (project.title.length < 1) {
    message = "Title of project must be longer than 6 characters.";
  } else if (project.type.length < 1) {
    message = "Project type cannot be empty.";
  } else if (!project.thumbnail) {
    message = "Project must have a thumbnail image.";
  } else if (project.description.length < 40) {
    message = "Description of project must be longer than 40 characters.";
  } else if (project.pictures.length < 1) {
    message = "Project must have one picture.";
  } else if (project.technologies.length < 1) {
    message = "Technologies cannot be empty.";
  } else if (project.summary.length < 1) {
    message = "Summary cannot be empty.";
  }
  return message;
};
