import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DeleteDialog from './DeleteDialog';

import {
  getProjects,
  openDeleteProjectDialog,
  closeDeleteProjectDialog,
  deleteSelectedProject,
  logoutUser,
  updateProjectInProjectForm
} from './redux/actions';
import {
  projectsFound,
  isDeleteProjectDialogOpen,
  getProjectIdOfSelectedDeleteProject
} from './redux/selectors';

const styles = {
  thumbnail : {
    height: 500
  },
  container:{
    marginRight: 60,
    marginLeft: 60
  },
  buttons:{
    marginBottom: 20
  },
  button: {
    marginRight: 20
  }
};

export class Dashboard extends React.Component{

  componentDidMount() {
    this.props.getProjects();
  }
  
  render(){
    const updateSelectedProject = (index) => {
      updateProject(index)
      history.push("/projectform")
    }

    const {
      projectsFound,
      history,
      openDeleteProjectDialog,
      closeDeleteProjectDialog,
      isDeleteProjectDialogOpen,
      deleteProject,
      getProjectIdOfSelectedDeleteProject,
      logout,
      updateProject
    } = this.props
    return (
      <div style={styles.container}>
        <h2>Dashboard</h2>
        
        <div style={styles.buttons}>
          <Button 
            style={styles.button}
            variant="contained" 
            color="secondary" 
            onClick={() => {history.push("/projectform")}}>
            Create Project
          </Button>

          <Button 
            style={styles.button}
            variant="contained" 
            color="secondary" 
            onClick={() => {logout()}}>
            Logout
          </Button>
        </div>

        <Grid container spacing = {24} >
            {projectsFound.map(function(project, index){
              return (          
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card>
                    <CardHeader
                      title={project.title}
                      subheader={project.creationDateTime}
                    />
                    <CardMedia
                      component="img"
                      src={project.thumbnail}
                    />
                    <CardActions disableActionSpacing>
                    <IconButton 
                      aria-label="Edit"
                      onClick={() => updateSelectedProject(index)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton 
                      aria-label="Delete"
                      onClick={() => openDeleteProjectDialog(project.id)}
                      >
                      <DeleteIcon/>
                    </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
        </Grid>

        <DeleteDialog
            showDialog={isDeleteProjectDialogOpen}
            closeDialog={closeDeleteProjectDialog}
            projectId={getProjectIdOfSelectedDeleteProject}
            deleteProject={deleteProject}
            scroll='body'
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projectsFound: projectsFound(state),
  isDeleteProjectDialogOpen: isDeleteProjectDialogOpen(state),
  getProjectIdOfSelectedDeleteProject: getProjectIdOfSelectedDeleteProject(state)
});

const mapDispatchToProps = dispatch => ({
  getProjects: () => dispatch(getProjects()),
  openDeleteProjectDialog: projectId => dispatch(openDeleteProjectDialog(projectId)),
  closeDeleteProjectDialog: () => dispatch(closeDeleteProjectDialog()),
  deleteProject: (projectId) => dispatch(deleteSelectedProject(projectId)),
  logout: () => dispatch(logoutUser()),
  updateProject: (index) => dispatch(updateProjectInProjectForm(index))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));