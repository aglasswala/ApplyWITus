import { makeStyles } from '@material-ui/core/styles';

const loginStyles = makeStyles((theme) => ({
	root: {
		height: "100vh"
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundRepeat: 'no-repeat',
		backgroundColor: theme.palette.grey[50],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
	 	margin: theme.spacing(8, 4),
	  	display: 'flex',
	  	flexDirection: 'column',
	  	alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main,
	},
	form: {
	 	width: '100%', // Fix IE 11 issue.
	  	marginTop: theme.spacing(1),
	},
	submit: {
	  	margin: theme.spacing(3, 0, 2),
	},
	buttonProgress: {
	  	color: theme.palette.primary.main,
	  	position: 'absolute',
	  	top: '50%',
	  	left: '50%',
	  	marginTop: -200,
	  	marginLeft: 350,
	},
	fullHeight: {
		height: "100vh"
	}
}))

export default loginStyles
