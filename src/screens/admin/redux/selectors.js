import { createSelector } from 'reselect';

export const adminSelector = state => state.admin

export const projectsFound = createSelector(
  adminSelector,
  admin => admin.projectsFound
)

export const isDeleteProjectDialogOpen = createSelector(
  adminSelector,
  admin => admin.isDeleteDialogOpen
)

export const getProjectIdOfSelectedDeleteProject = createSelector(
  adminSelector,
  admin => admin.deleteProjectId
)

export const shouldShowProgressOverlay = createSelector(
  adminSelector,
  admin => admin.showProgressOverlay
)

export const shouldShowSnackBar = createSelector(
  adminSelector,
  admin => admin.showSnackBar
)

export const messageForSnackBar = createSelector(
  adminSelector,
  admin => admin.snackBarMessage
)

export const getSelectedProjectForUpdating = createSelector(
  adminSelector,
  admin => admin.projectSelectedForUpdating
)

export const isUpdatingProject = createSelector(
  adminSelector,
  admin => admin.isUpdatingProject
)