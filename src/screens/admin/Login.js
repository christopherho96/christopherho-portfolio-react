import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {
  loginUser,
} from './redux/actions';

const styles = {
  paper: {
    width: 700,
    maxWidth: 700,
    marginLeft: 20,
    marginRight: 20,
    paddingRight: 40,
    paddingLeft: 40,
    paddingTop: 10,
    paddingBottom:20,
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  container:{
    height: '100vh',
    textAlign: 'center',
    display: 'flex', 
    justifyContent: 'center'
  },
  submitButton:{
    marginTop: 20
  },
};

export class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      usernameOrEmail: '',
      password: ''
    };
  }

  handleChange = fieldName => event => {
    this.setState({ 
      [fieldName] : event.target.value
    })
  };

  render(){
    const {
      loginUser
    } = this.props
    return (
        <Grid container spacing = {24}>
          <Grid item xs={12} style={styles.container}>
            <Paper style = {styles.paper}>
              <h2>Login</h2>
              <Grid item xs= {12}>
                <TextField
                  id="outlined-name"
                  label="Email"
                  value={this.state.email}
                  onChange={this.handleChange('usernameOrEmail')}
                  margin="normal"
                  variant="outlined"
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs= {12}>
                <TextField
                  id="outlined-name"
                  label="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  margin="normal"
                  variant="outlined"
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs= {12}>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  style={styles.submitButton}
                  onClick={() => {loginUser(this.state)}}>
                  Login
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user)),
});

export default withRouter(connect(null, mapDispatchToProps)(Login));