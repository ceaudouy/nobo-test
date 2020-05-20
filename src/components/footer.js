import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	appBar: {
		top: 'auto',
		bottom: 0,
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
	<React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
			<Typography variant="subtitle2" className={classes.title}>
 				Test realized by Cédric AUDOUY
          	</Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

