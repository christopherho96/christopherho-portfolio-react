import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import Grid from '@material-ui/core/Grid';
import Thumbnails from './Thumbnails';
import "react-image-gallery/styles/css/image-gallery.css";

const images = (pictures) => {
  if(pictures){
    return pictures.map( picture => {
      return {
        original: picture.url,
        thumbnail: picture.url,
      }
    })
  }
}

const styles = {
  showCaseContentLeft:{
  },
  showCaseContentRight:{
    paddingLeft:20,
    paddingRight: 20
  },
  description:{
    whiteSpace: 'pre-line'
  }
};

const ProjectDialog = ({
  showDialog,
  closeDialog,
  projectsFound,
  project,
  selectProject,
  shouldShowProjectThumbnails,
  scroll,
}) => {
  return (
      <div>
        <Dialog
          open={showDialog}
          onClose={closeDialog}
          scroll={scroll}
          maxWidth={'md'}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogContent style={styles.gallery}>
          {shouldShowProjectThumbnails ? (          
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Thumbnails 
                  projects={projectsFound}
                  selectProject={selectProject}
                />
              </Grid>
            </Grid>) : (<div></div>)
          }
          <Grid container spacing ={0} style={styles.showcaseContent}>
              <Grid item xs={12} sm={6} style={styles.showCaseContentLeft}>
              <ImageGallery   
                items={images(project.pictures)}
                showFullscreenButton={false}
                showPlayButton={false} 
                />
              </Grid>
              <Grid item xs={12} sm={6} style={styles.showCaseContentRight}>
                <h2>{project.title}</h2>
                <h4>{project.type}</h4>
                <p style={styles.description}>
                {project.description}
                </p>
                {project.linkReference? (<a href={project.linkReference} target="_blank">Click here for more information</a>): (<div></div>)}
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </div>
  );
};

export default ProjectDialog;

ProjectDialog.propTypes = {
  project: PropTypes.object.isRequired,
  showDialog: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  scroll: PropTypes.string.isRequired
};

ProjectDialog.defaultProps = {
  scroll: 'body'
};
