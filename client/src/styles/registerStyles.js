const registerStyles = theme => ({
	'@global': {
		body: {
			backgroundColor: 'lightblue',
		},
	},
	paper: {
		marginTop: theme.spacing(3),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: '25px',
		padding: '40px',
		marginTop: theme.spacing(3)
	},
	titlePaper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		borderRadius: '5px',
		color: 'white',
		padding: '20px 0px 20px 0px',
		backgroundColor: '#2196f3',
		width: '80%',

	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
})

export default registerStyles
