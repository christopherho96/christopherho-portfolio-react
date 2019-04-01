import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import ImageGallery from "react-image-gallery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "react-image-gallery/styles/css/image-gallery.css";

const images = pictures => {
  if (pictures) {
    return pictures.map(picture => {
      return {
        original: picture.url,
        thumbnail: picture.url
      };
    });
  }
};

const styles = {
  showCaseContentLeft: {},
  showCaseContentRight: {
    paddingLeft: 20,
    paddingRight: 20
  },
  title:{
    marginBottom: 20
  },
  type:{
    marginBottom: 20
  },
  description: {
    whiteSpace: "pre-line",
    marginBottom: 20
  }
};

const ProjectDialog = ({
  showDialog,
  closeDialog,
  project,
  scroll
}) => {
  return (
    <div>
      <Dialog
        open={showDialog}
        onClose={closeDialog}
        scroll={scroll}
        maxWidth={"md"}
        aria-labelledby="scroll-dialog-title"
      >
        <DialogContent style={styles.gallery}>
          <Grid container spacing={24} style={styles.showcaseContent}>
            <Grid item xs={12} sm={6} style={styles.showCaseContentLeft}>
              <ImageGallery
                items={images(project.pictures)}
                showFullscreenButton={false}
                showPlayButton={false}
              />
            </Grid>
            <Grid item xs={12} sm={6} style={styles.showCaseContentRight}>
              <Typography component="h5" variant="h5" align="left" style={styles.title}>
                {project.title}
              </Typography>
              <Typography variant="subtitle1" align="left" style={styles.type}>
                {project.type}
              </Typography>
              <Typography variant="body1" align="left" style={styles.description}>
                {project.description}
              </Typography>
              {project.linkReference ? (
                <a
                  href={project.linkReference}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here for more information
                </a>
              ) : (
                <div />
              )}
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDialog;
