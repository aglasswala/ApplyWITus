const applyToJobsStyles = theme => ({
    dialogPaper: {
      minHeight: '85vh',
        maxHeight: '85vh',
    },
    gridContainer: {
        margin: "0 -15px !important",
        width: "unset"
    },
    gridItem: {
        padding: "0 15px !important"
    },
    card: {
        border: "0",
        marginBottom: "30px",
        marginTop: "30px",
        borderRadius: "6px",
        color: "rgba(0, 0, 0, 0.87)",
        background: "#fff",
        width: "100%",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        fontSize: ".875rem"
    },  
    cardHeader: {
        padding: "0.75rem 1.25rem",
        marginBottom: "0",
        borderBottom: "none",
        zIndex: "3 !important",
        "&:first-child": {
          borderRadius: "calc(.25rem - 1px) calc(.25rem - 1px) 0 0"
        },
        color: "#FFFFFF",
        background: theme.palette.primary.main,
        boxShadow:
          "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    },
    cardCategoryWhite: {
      "&,& a,& a:hover,& a:focus": {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
      },
      "& a,& a:hover,& a:focus": {
        color: "#FFFFFF"
      }
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none",
      "& small": {
        color: "#777",
        fontSize: "65%",
        fontWeight: "400",
        lineHeight: "1"
      }
    },
    cardBody: {
        padding: "0.9375rem 20px",
        flex: "1 1 auto",
        position: "relative"
    },
    buttons: {
        display: "inline-block"
    },
    wrapper: {  
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10
    }
})

export default applyToJobsStyles