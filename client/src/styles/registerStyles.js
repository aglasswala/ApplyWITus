import { makeStyles } from '@material-ui/core/styles';

const registerStyles = makeStyles((theme) => ({
	'@global': {
		body: {
			background: 'lightblue'
		},
	},
	paper: {
		padding: '30px',
		backgroundColor: 'white',
		borderRadius: '10px'
	},
	titlePaper: {
		textAlign: 'center',
		borderRadius: '5px',
		color: 'white',
		backgroundColor: '#2196f3',
		padding: '20px'

	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	mainItem: {
		width: "30%"
	}
}))

export default registerStyles
