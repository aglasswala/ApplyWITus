import { makeStyles } from '@material-ui/core/styles';

const onboardingStyles = makeStyles((theme) => ({
	wrapper: {
		padding: 20
	},
	uploadButton: {
		width: "100%",
		height: "100%"
	},
	paper: {
		boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
	}
}))

export default onboardingStyles