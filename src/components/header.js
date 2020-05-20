import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import SelectLanguage from './selectLanguage';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	  },
	  menuButton: {
		marginRight: theme.spacing(2),
	  },
	  title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
		  display: 'block',
		},
	  },
	  search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
		  backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
		  marginLeft: theme.spacing(3),
		  width: 'auto',
		},
	  },
	  searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	  },
	  inputRoot: {
		color: 'inherit',
	  },
	  inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
		  width: '20ch',
		},
	  },
	  langue: {
		padding: theme.spacing(1, 1, 1, 0),
		marginLeft: 'auto',
		marginRight: '2%',
	},
	
  }));

function Header() {
	const classes = useStyles();
	const [search, setSearch]= React.useState('');

	const handleSubmit = () => {
		if (search !== '') {
			localStorage.setItem('search', search);
			document.location.href = '/';
		}
	}

	const handleChange = (event) => {
		setSearch(event.target.value);
	}

	const handleAccueil = () =>{
		localStorage.removeItem('search');
		document.location.href = "/";
	}

	return (
		<div className={classes.grow}>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="open drawer"
					>
						<MenuIcon />
					</IconButton>
					<Typography className={classes.title} onClick={handleAccueil} variant="h6" noWrap>
						Nobo
					</Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
		  					onChange={handleChange}
						/>
					</div>
					<Button onClick={handleSubmit} variant="contained" color="primary">
		  				Search
		  			</Button>
					  <div className={classes.langue}>
					  	{ SelectLanguage() }
					  </div> 
				</Toolbar>
			</AppBar>
		</div>
	)




		// <div className={classes.root}>
      	// 	<AppBar position="static">
        // 		<Toolbar>
        // 	  		<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        // 	    		<MenuIcon />
        // 	  		</IconButton>
        // 	  		<Typography variant="h6" className={classes.title}>
        // 	   			Nobo
        // 	  		</Typography>
		// 		
		// 			 <div className={classes.search}>
		//  				<div className={classes.searchIcon}>
		//  					<SearchIcon />
		//  				</div>
		//  				<InputBase
		//  					placeholder="Search…"
		//  					classes={{
		//  					root: classes.inputRoot,
		//  					input: classes.inputInput,
		//  					}}
		//  					inputProps={{ 'aria-label': 'search' }}
		//  				/>
		//  			</div>
        // 		</Toolbar>
      	// 	</AppBar>
    	// </div>



		// <div className={classes.grow}>
		// 	<AppBar position="static" color="secondary">
		// 		<Toolbar>
		// 			<Typography className={classes.title} variant="h6" noWrap onClick={handleAccueil}>
		// 				Nobo
		// 			</Typography>
		// 			
		// 			<div className={classes.grow} />
		// 				<div className={classes.sectionDesktop}>
		// 				</div>
		// 		</Toolbar>
		// 	</AppBar>
		// </div>

}

export default Header;