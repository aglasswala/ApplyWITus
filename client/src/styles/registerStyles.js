import { makeStyles } from '@material-ui/core/styles';

const registerStyles = makeStyles((theme) => ({
	'@global': {
		body: {
			backgroundImage: "url('https://cdn.hipwallpaper.com/i/97/16/qvziyP.jpg')",
			height: '100%'
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
