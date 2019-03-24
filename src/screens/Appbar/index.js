import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {
  openProfileDialog
} from '../HomePage/redux/actions';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    float: 'right'
  }
};

export class Appbar extends React.Component {
  render(){
    const {
      openProfileDialog
    } = this.props
    return(
      <AppBar style={{ background: 'transparent', boxShadow: 'none'}} >
        <Toolbar>
          <div style={styles.grow} />
            <IconButton
              aria-owns={'material-appbar'}
              aria-haspopup="true"
              onClick={openProfileDialog}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
        </Toolbar>
      </AppBar>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  openProfileDialog: () => dispatch(openProfileDialog()),
});

export default connect(null, mapDispatchToProps)(Appbar);