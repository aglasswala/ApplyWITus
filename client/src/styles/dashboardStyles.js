const dashboardStyles = theme => ({
	wrapper: {
	     position: "relative",
	     top: "0"
	 },
	 mainPanel: {
	     [theme.breakpoints.up("md")]: {
	       width: `calc(100% - 260px)`
	     },
	     overflow: "auto",
	     position: "relative",
	     float: "right",
	     transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
	     maxHeight: "100%",
	     width: "100%"
	 },
	 content: {
	     marginTop: "20px",
	     minHeight: "calc(100vh - 123px)"
	 },
	 container: {
	     paddingRight: "15px",
	     paddingLeft: "15px",
	     marginRight: "auto",
	     marginLeft: "auto",
	 }
})

export default dashboardStyles