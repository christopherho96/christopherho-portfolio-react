import React from "react";
import Background from "../../assets/background.jpg";
import InstagramProfilePhone from "../../assets/instagramProfileMobile.png";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ResumePdf from "../../assets/resume.pdf";
import Typography from "@material-ui/core/Typography";

const styles = {
  showcase: {
    height: "100vh",
    maxHeight: 630,
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: "100%",
    width: "100%"
  },

  showcaseBannerText: {
    color: "#FFFFFF",
    maxWidth: 300,
    fontSize: 40
  },

  showcaseContent: {
    maxWidth: 1000,
    marginLeft: "auto",
    marginRight: "auto",
    height: "100%"
  },

  showCaseButton: {
    marginRight: 20,
    color: "#FFFFFF",
    borderColor: "#FFFFFF"
  },

  showCaseContentLeft: {
    backgroundImage: `url(${InstagramProfilePhone})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: "100%"
  },
  showCaseContentRight: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    margin: "auto",
    paddingLeft: 40,
    paddingRight: 40
  },
  buttons: {
    marginTop: 20,
    flexDirection: "row"
  }
};

const openLinkedInPage = () => {
  window.open("https://www.linkedin.com/in/hochristophertak/", "_blank");
};

const openResume = () => {
  window.open(ResumePdf, "_blank");
};

const Showcase = () => (
  <div style={styles.showcase}>
    <div style={styles.overlay}>
      <Grid container spacing={0} style={styles.showcaseContent}>
        <Grid item xs={false} md={6} style={styles.showCaseContentLeft} />
        <Grid item xs={12} sm={6} style={styles.showCaseContentRight}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography
                component="h2"
                variant="h2"
                style={styles.showcaseBannerText}
              >
                Christopher Ho Portfolio
              </Typography>
            </Grid>
            <Grid item xs={12} style={styles.buttons}>
              <Button
                variant="outlined" 
                style={styles.showCaseButton}
                onClick={() => {
                  openResume();
                }}
              >
                Resume
              </Button>
              <Button
                variant="outlined"
                style={styles.showCaseButton}
                onClick={() => {
                  openLinkedInPage();
                }}
              >
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
