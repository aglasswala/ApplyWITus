const loginStyles = theme => ({
	placeHolderTop: {
		flexGrow: 1
	},
	placeHolderBottom: {
		flexGrow: 1
	},
	signinBox: {
		width: "400px",
		background: "white",
		padding: "40px 0 33px 0",
		borderRadius: "5px",
		border: "1px solid #eeeeee",
		margin: "20vh auto"
	},
	signinContainer: {
		maxWidth: "340px",
		margin: "0 auto",
	},
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "stretch"
	},
	form: {
		display: "flex",
		flexDirection: "column",
		alignItems: "stretch"
	},
	wrapper: {
		display: "inline-block",
		position: "relative",
	},
	textField: {
		width: "100%",
		boxSizing: "border-box",
		fontWeight: "300",
		textOverflow: "ellipsis",
		transition: ".4s all"
	},
	button: {
		position: "relative",
		width: "100%",
		borderRadius: "3px",
		boxSizing: "border-box",
		marginTop: "20px",
	},
	actions: {
        display: "flex",
        alignItems: "center",
        marginTop: "20px",
        justifyContent: "space-between"
	},
	overlay: {
		width: "300px",
		background: "#2196f3",
		height: "50px",
		padding: "40px",
		marginTop: "-75px",
		marginLeft: "-20px",
		borderRadius: "6px"
	}
})

export default loginStyles
