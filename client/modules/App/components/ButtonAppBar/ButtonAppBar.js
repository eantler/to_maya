// @flow weak

import React, { PropTypes } from 'react';
import connect from 'react-redux';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import ToysIcon from 'material-ui-icons/Toys';
import { makeLoginWithGoogle } from '../../AppActions';

const styleSheet = createStyleSheet('ButtonAppBar', () => ({
  root: {
    position: 'relative',
    marginTop: 0,
    width: '100%',
  },
  appBar: {
    position: 'relative',

  },
  flex: {
    flex: 1,
    font: '200dp',
    color: 'rgb(255,255,255)',
  },
}));

function logButton(props) {
  if (this.props.isAuthenticated) {
    return (
      <Button onClick={dispatch(makeLoginWithGoogle())}>Login</Button>
    )
  } else {
  return (
    <Button>Logout</Button>
  )}

}

export default function ButtonAppBar(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton >
            <ToysIcon className={classes.flex}>add_circle</ToysIcon>
          </IconButton>
          <Text type="title" className={classes.flex}>Semsim Memes</Text>
          <logButton/>

        </Toolbar>
      </AppBar>
    </div>
  );
}

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    isAuthenticated: store.app.isAuthenticated,
    user: store.app.user,
  };
}

ButtonAppBar.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

ButtonAppBar.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
}
