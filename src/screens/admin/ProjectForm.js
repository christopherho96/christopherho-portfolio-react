import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {DropzoneArea} from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {
  createAProject, 
  hideSnackBar,
  finishedCreatingUpdatingProject
} from './redux/actions';
import {
  shouldShowProgressOverlay, 
  shouldShowSnackBar,
  messageForSnackBar,
  isUpdatingProject,
  getSelectedProjectForUpdating
} from './redux/selectors';

const styles = {
  paper: {
    maxWidth: 700,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingRight: 40,
    paddingLeft: 40,
  },
  field: {
    marginRight: 20,
    marginLeft: 20
  },
  container:{
    marginRight: 40,
    marginLeft: 40,
    position: 'relative',
  },
  dropzone:{
    marginTop: 20,
  },
  submitButton:{
    marginTop: 20,
    marginBottom: 20,
  },
  thumbnailUpload:{
    marginTop:10,
    flexDirection: 'row'
  },
  title:{
    textAlign:'center'
  },
  overlay:{
    opacity: 0.5 ,
    background: "#000",
    width: "100%",
    height: "100%", 
    zIndex:  10,
    top: 0, 
    left: 0, 
    position: "fixed", 
    textAlign: "center"
  },
  progressSpinner:{
    position: "absolute",
    top:0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    width: 100,
    height: 100,
    zIndex: 11
  }
};

export class ProjectForm extends React.Component{

  componentDidMount(){
    this.setState({
      id: this.props.getSelectedProjectForUpdating.id,
      title: this.props.getSelectedProjectForUpdating.title,
      type: this.props.getSelectedProjectForUpdating.type,
      thumbnail: '',
      description: this.props.getSelectedProjectForUpdating.description,
      pictures: [],
      linkReference: this.props.getSelectedProjectForUpdating.linkReference
    });
  }

  componentWillUnmount(){
    this.props.clearProjectForm()
  }

  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      title: '',
      type: '',
      thumbnail: '',
      description: '',
      pictures: [],
      linkReference: undefined,
    };
  }

  handleChange = fieldName => event => {
    this.setState({ 
      [fieldName] : event.target.value
    })
  };

  handleThumbnail = fieldName => event => { 
    this.setState({ 
      [fieldName] : event.target.files[0]
    })
  }

  handleImageDrop = fieldName => file => {
    var files = this.state.pictures
    files.push(file)
    this.setState({ 
      [fieldName] : files
    })
  }

  render(){
    const {
      uploadProject,
      shouldShowProgressOverlay,
      closeSnackBar,
      shouldShowSnackBar,
      snackBarMessage,
      isUpdatingProject,
    } = this.props
    return (
      <div>
        {
          shouldShowProgressOverlay? 
          (
          <div>
            <div style={styles.overlay}></div>
            <div style={styles.progressSpinner}>
              <CircularProgress color="secondary" />
            </div>
          </div>
          ): 
          (< div></div>)
        }
        <Grid container spacing = {24}>
          <Grid item xs={12} style={styles.container}>
            <div style={styles.title}>
              <h2>{isUpdatingProject? ("Update Project"): ("Create Project")}</h2>
            </div> 
            <Paper style = {styles.paper}>
              <Grid item xs= {12}>
                <TextField
                  id="outlined-name"
                  label="Name"
                  value={this.state.title}
                  onChange={this.handleChange('title')}
                  margin="normal"
                  variant="outlined"
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs= {12}>
                <TextField
                  id="outlined-type"
                  label="Type"
                  value={this.state.type}
                  onChange={this.handleChange('type')}
                  margin="normal"
                  variant="outlined"
                  multiline={true}
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={12} style={styles.thumbnailUpload}>
                <Button variant="contained"component="label">
                  Upload Thumbnail
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={this.handleThumbnail('thumbnail')}
                  />
                </Button>
                <p>{this.state.thumbnail.name}</p>
              </Grid>
              <Grid item xs= {12}>
                <TextField
                  id="outlined-description"
                  label="Description"
                  value={this.state.description}
                  onChange={this.handleChange('description')}
                  margin="normal"
                  variant="outlined"
                  multiline={true}
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs= {12} style={styles.dropzone}>
                <DropzoneArea 
                  filesLimit={6}
                  onDrop={this.handleImageDrop('pictures')}
                  />
              </Grid>
              <Grid item xs= {12}>
                <TextField
                  id="outlined-linkReference"
                  label="Link Reference (Optional)"
                  value={this.state.linkReference}
                  onChange={this.handleChange('linkReference')}
                  margin="normal"
                  variant="outlined"
                  multiline={true}
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs= {12}>
                <Button 
                variant="contained" 
                color="secondary" 
                style={styles.submitButton}
                onClick={() => {uploadProject(this.state, isUpdatingProject)}}>
                  {isUpdatingProject? ("Update Project"): ("Create Project")}
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={shouldShowSnackBar}
          autoHideDuration={5000}
          onClose={closeSnackBar}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{snackBarMessage}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={closeSnackBar}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isUpdatingProject: isUpdatingProject(state),
  shouldShowProgressOverlay: shouldShowProgressOverlay(state),
  shouldShowSnackBar: shouldShowSnackBar(state),
  snackBarMessage: messageForSnackBar(state),
  getSelectedProjectForUpdating: getSelectedProjectForUpdating(state)
});

const mapDispatchToProps = dispatch => ({
  uploadProject: (project, isUpdatingProject) => dispatch(createAProject(project, isUpdatingProject)),
  closeSnackBar: () => dispatch(hideSnackBar()),
  clearProjectForm: () => dispatch(finishedCreatingUpdatingProject())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectForm));