import React from 'react';
import Background from '../../assets/background.jpg';
import InstagramProfilePhone from '../../assets/instagramProfileMobile.png';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ResumePdf from '../../assets/resume.pdf';

const styles = {
  showcase : {
    height: '80vh',
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
    width: '100%',
  },
  showcaseBannerText: {
    fontSize: 46,
    fontFamily: 'Roboto Mono',
    color:'#FFFFFF',
  },

  showcaseContent: {
    maxWidth: 1000,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  showCaseButton:{
    marginRight: 20
  },
  showCaseContentLeft:{
    backgroundImage: `url(${InstagramProfilePhone})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
  },
  showCaseContentRight:{
    height: '100%',
    paddingTop: 250,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttons:{
    flexDirection: 'row'
  }
};

const openLinkedInPage = () => {
  window.open("https://www.linkedin.com/in/hochristophertak/", '_blank')
}

const openResume = () => {
  window.open(ResumePdf, '_blank' )
}


const Showcase = ({
  history
})  => (
        <div style = {styles.showcase}> 
          <div style = {styles.overlay}>
            <Grid container spacing ={0} style={styles.showcaseContent}>
              <Grid item xs={0} sm={6} style={styles.showCaseContentLeft}>
              </Grid>
              <Grid item xs={12} sm={6} style={styles.showCaseContentRight}>
                <Grid container spacing ={0}>
                  <Grid item xs={12}>
                    <h1 style={styles.showcaseBannerText}>Christopher Ho Portfolio</h1>
                  </Grid>
                </Grid>
                <Grid container spacing ={0}>
                  <Grid item xs={12} style={styles.buttons}>
                    <Button 
                    variant="contained" 
                    color="secondary" 
                    style={styles.showCaseButton}
                    onClick={() => {openResume()}}>
                      Resume
                    </Button>
                    <Button 
                    variant="contained" 
                    style={styles.showCaseButton}
                    onClick={() => {openLinkedInPage()}}>
                      LinkedIn
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
);

export default Showcase;