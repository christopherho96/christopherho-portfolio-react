import React from "react";
import ProjectCard from "./ProjectCard";
import Typography from '@material-ui/core/Typography';

const styles = {
  thumbnails: {
    maxWidth: 700,
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: 20,
    paddingRight: 20
  },

  headerText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 40
  }
};

class ProjectCards extends React.Component {
  render() {
    const {
      projectsFound,
      openProjectDialog,
    } = this.props;
    return (
      <div style={styles.thumbnails}>
        <Typography
          component="h2"
          variant="h2"
          style={styles.headerText}
        >
          Projects
        </Typography>

        {projectsFound.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            openProjectDialog={openProjectDialog}
          />
        ))}
      </div>
    );
  }
}

export default ProjectCards;
