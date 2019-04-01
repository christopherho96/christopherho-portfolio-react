import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const styles = {
  card: {
    display: "flex",
    marginTop: 40,
    marginBottom: 40,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 700
  },
  content: {
    flex: "1 0 auto",
    display: "flex",
    flexDirection: "column",
    width: "60%"
  },
  cover: {
    width: "40%"
  },
  description: {
    marginTop: 20
  },
  technologies: {
    marginTop: 20
  }
};

const ProjectCard = ({ project, index, openProjectDialog }) => {
  return (
    <Card style={styles.card} onClick={() => openProjectDialog(index)}>
      <CardMedia
        style={styles.cover}
        image={project.thumbnail}
        title="Live from space album cover"
      />
        <CardContent style={styles.content}>
          <Typography component="h5" variant="h5">
            {project.title}
          </Typography>
          <Typography
            variant="caption"
            align="left"
            style={styles.description}
          >
            {project.summary? project.summary : "Summary not available"}
          </Typography>
          <Typography
            variant="caption"
            align="left"
            style={styles.technologies}
          >
            {project.technologies? "Technologies: " + project.technologies : "Technologies not available"}
          </Typography>
        </CardContent>
    </Card>
  );
};

export default ProjectCard;
