import { createSelector } from 'reselect';

export const homeSelector = state => state.home

export const projectsFound = createSelector(
  homeSelector,
  home => home.projectsFound
)

export const isProjectDialogOpen = createSelector(
  homeSelector,
  home => home.isProjectDialogOpen
)

export const isProfileDialogOpen = createSelector(
  homeSelector,
  home => home.isProfileDialogOpen
)

export const currentSelectedProject = createSelector(
  homeSelector,
  home => home.project
)

export const shouldShowProjectThumbnails = createSelector(
  homeSelector,
  home => home.showProjectThumbnailsInDialog
)