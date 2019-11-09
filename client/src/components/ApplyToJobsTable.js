import React from "react"

import { withStyles, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core"

import applyToJobsTableStyles from '../styles/applyToJobsTableStyles'

const ApplyToJobsTable = ({ ...props }) => {
	const { classes, tableHead, tableData } = props
	return (
		<div className={classes.tableResponsive}>
		     <Table className={classes.table}>
		         <TableHead className={classes.tableHeaderColor}>
		             <TableRow>
		                 {tableHead.map((prop, key) => {
		                     return (
		                         <TableCell
		                             className={classes.tableCell + " " + classes.tableHeadCell}
		                             key={key}
		                         >
		                             {prop}
		                         </TableCell>
		                     )
		                 })}
		             </TableRow>
		         </TableHead>
		         <TableBody>
		           {tableData.map((prop, key) => {
		             return (
		               <TableRow key={key} onClick={() => this.handleClickOpen(prop)}>
		                 {prop.map((prop, key) => {
		                   return (
		                     <TableCell className={classes.tableCell} key={key}>
		                       {prop}
		                     </TableCell>
		                   );
		                 })}
		               </TableRow>
		             );
		           })}
		         </TableBody>
		     </Table>
		 </div>
	)
}

export default withStyles(applyToJobsTableStyles)(ApplyToJobsTable)