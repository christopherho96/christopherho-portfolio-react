import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import SchoolIcon from '@material-ui/icons/School';
import DevIcon from '@material-ui/icons/DeveloperMode';
import PencilIcon from '@material-ui/icons/Edit';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import pink from '@material-ui/core/colors/pink';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = {
  avatar: {
    backgroundColor: pink[500]
  },
};

const ProfileDialog = ({
  showDialog,
  closeDialog
}) => {
  return (
    <Dialog
      open={showDialog}
      TransitionComponent={Transition}
      keepMounted
      maxWidth={'xs'}
      onClose={closeDialog}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        <h2>Who am I?</h2>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <Avatar style={styles.avatar}> 
              <SchoolIcon/>
            </Avatar>
          </Grid>
          <Grid item xs={10}>
            <p>Currently in my 3rd year of Mechanical Engineering at the University of Waterloo</p>
            <br/>
          </Grid>
        </Grid>

        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Avatar style={styles.avatar}> 
              <DevIcon/>
            </Avatar>
          </Grid>
          <Grid item xs={10}>
            <p>Mobile application development is a passion for me. I have learned to develop mobile apps on both native platforms for iOS and Android. I have worked for previous companies where I have shipped features that reached audiences of over 1 million users.
            </p>
            <br/>
          </Grid>
        </Grid>

        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Avatar style={styles.avatar}> 
              <PencilIcon/>
            </Avatar>
          </Grid>
          <Grid item xs={10}>
            <p>I am constantly learning new technologies in order to make myself a more marketable engineer. I see myself moving into product management in the future.</p>
            <br/>
          </Grid>
        </Grid>

        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Avatar style={styles.avatar}> 
              <RestaurantIcon/>
            </Avatar>
          </Grid>
          <Grid item xs={10}>
            <p>Catch me at your local all-you-can-eat/ buffet restaurants at a city near you.</p>
          </Grid>
        </Grid>

      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;