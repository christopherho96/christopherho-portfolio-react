import React from 'react';
import FbImageLibrary from 'react-fb-image-grid'

const styles = {
  thumbnails: {
    maxWidth: 1000,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 20,
    paddingRight: 20,
    textAlign:'center'
  },

  headerText: {
    fontFamily: 'Roboto Mono',
  },
}

function openProjects(index, openProjectDialog, projects, history, showProjectThumbnails) {
  if(index === 4 && projects.length > 5){
    showProjectThumbnails()
  }
    openProjectDialog(index)
}

class ProjectThumbnails extends React.Component {
  render(){
    const {
      projectsFound,
      openProjectDialog,
      showProjectThumbnails,
      history
    } = this.props
    return(
      <div style = {styles.thumbnails}>
        <h1 style={styles.headerText}>Projects</h1>

        <FbImageLibrary 
          countFrom={5}
          hideOverlay={true}
          images={ projectsFound.map( project => project.thumbnail )} 
          onClickEach={({src, index}) => openProjects(index, openProjectDialog, projectsFound, history, showProjectThumbnails) }
        />
      </div>
    )
  }
}


export default ProjectThumbnails;