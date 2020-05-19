import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
	top: 'auto',
	bottom: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
	  position: 'relative',
	  marginLeft: 'auto',
	  marginRight: 'auto',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="subtitle2" className={classes.title}>
 				Test realised by Cédric AUDOUY
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

