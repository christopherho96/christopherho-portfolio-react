import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Showcase  from './Showcase';
import ProjectDialog from './ProjectDialog';
import ProfileDialog from './ProfileDialog';
import ProjectThumbnails from './ProjectThumbnails';
import {
  getProjects,
  openProjectDialog,
  closeProjectDialog,
  closeProfileDialog,
  selectProject,
  showProjectThumbnailsInProjectDialog
} from './redux/actions';
import {
  projectsFound,
  isProjectDialogOpen,
  isProfileDialogOpen,
  currentSelectedProject,
  shouldShowProjectThumbnails
} from './redux/selectors';

export class Home extends React.Component {

  componentDidMount() {
    this.props.getProjects();
  }
  render(){
    const {
      projectsFound,
      openEditDeveloperDialog,
      closeEditDeveloperDialog,
      isProjectDialogOpen,
      currentSelectedProject,
      projectSelected,
      showProjectThumbnails,
      shouldShowProjectThumbnails,
      isProfileDialogOpen,
      closeProfileDialog,
      history
    } = this.props
    
    return(
      <div>
        <Showcase
          history = {history}/>
        <ProjectThumbnails
          projectsFound={projectsFound}
          openProjectDialog={openEditDeveloperDialog}
          showProjectThumbnails={showProjectThumbnails}
          history={history}
        />
        <ProjectDialog
          projectsFound={projectsFound}
          project={currentSelectedProject}
          selectProject={projectSelected}
          showDialog={isProjectDialogOpen}
          closeDialog={closeEditDeveloperDialog}
          shouldShowProjectThumbnails={shouldShowProjectThumbnails}
          scroll='body'
        />
        <ProfileDialog
          showDialog={isProfileDialogOpen}
          closeDialog={closeProfileDialog}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  projectsFound: projectsFound(state),
  isProjectDialogOpen: isProjectDialogOpen(state),
  isProfileDialogOpen: isProfileDialogOpen(state),
  currentSelectedProject: currentSelectedProject(state),
  shouldShowProjectThumbnails: shouldShowProjectThumbnails(state)
});

const mapDispatchToProps = dispatch => ({
  getProjects: () => dispatch(getProjects()),
  openEditDeveloperDialog: index => dispatch(openProjectDialog(index)),
  closeEditDeveloperDialog: () => dispatch(closeProjectDialog()),
  closeProfileDialog: () => dispatch(closeProfileDialog()),
  projectSelected: index => dispatch(selectProject(index)),
  showProjectThumbnails: () => dispatch(showProjectThumbnailsInProjectDialog())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));