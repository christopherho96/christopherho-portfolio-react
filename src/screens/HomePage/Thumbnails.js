import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  container:{
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 100,
    height: 100,
  },
  thumbnail:{
    width: 100,
    height: 100,
    overflow:'hidden'
  }
};

const Thumbnails = ({
  projects,
  selectProject,
})  => (
  <Grid   
    container
    spacing={0}
    alignItems="center"
    style={styles.container}
  >
    {projects.map(function(project, index){
      return (          
        <Grid item xs={6} sm={2} key={index}>
          <Card style= {styles.card}>
            <CardActionArea
            onClick={() => selectProject(index)}>
              <CardMedia
                component="img"
                image={project.thumbnail}
                style={styles.thumbnail}
              />
            </CardActionArea>
          </Card>
        </Grid>
      )
    })}
  </Grid>
);

export default Thumbnails;