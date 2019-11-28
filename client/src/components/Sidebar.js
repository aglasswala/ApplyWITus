import React from 'react'

import { List, ListItem, ListItemText, Drawer, Hidden, Grid, withStyles } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

import sidebarStyles from "../styles/sidebarStyles"
import image from "../styles/pictures/background1.jpg"

const Sidebar = ({...props}) => {
    const { classes } = props

    const brand = (
        <div className={classes.logo}>
          <div className={classes.logoLink}>
            ApplyWITus
          </div>
        </div>
    )
    return (
        <div>
            <Hidden smDown implementation="css">
                <Drawer
                    anchor="left"
                    variant="permanent"
                    open
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    {brand}
                    <div className={classes.sidebarWrapper}>
                      <List className={classes.list}>
                        <Grid
                          container
                          direction="column"
                          justify="center"
                          style={{height: "100%"}}
                        >
                          <Grid item>
	                         <NavLink
	                            to={"/dashboard"}
	                            exact
	                            className={classes.item}
	                            activeClassName="active"
	                        >
	                            <ListItem button className={classes.itemLink}>
		                            <ListItemText
		                                primary={"Apply to jobs"}
		                                className={classes.itemText}
		                            	  disableTypography={true}
		                            />
	                            </ListItem>
	                        </NavLink>
                            <NavLink
                              to={"/dashboard/jobs"}
                              exact
                              className={classes.item}
                              activeClassName="active"
                            >
                              <ListItem button className={classes.itemLink}>
                                <ListItemText
                                  primary={"View all jobs"}
                                  className={classes.itemText}
                                  disableTypography={true}
                                />
                              </ListItem>
                            </NavLink>
                            <NavLink
                              to={"/dashboard/userprofile"}
                              exact
                              className={classes.item}
                              activeClassName="active"
                            >
                              <ListItem button className={classes.itemLink}>
                                <ListItemText
                                  primary={"User Profile"}
                                  className={classes.itemText}
                                  disableTypography={true}
                                />
                              </ListItem>
                            </NavLink>
                            <NavLink
                              to={"/dashboard/contact"}
                              exact
                              className={classes.item}
                              activeClassName="active"
                            >
                              <ListItem button className={classes.itemLink}>
                                <ListItemText
                                  primary={"Contact Us"}
                                  className={classes.itemText}
                                  disableTypography={true}
                                />
                              </ListItem>
                            </NavLink>
                          </Grid>
                        </Grid>
                      </List>
                    </div>
                    <div
                        className={classes.background}
                        style={{ backgroundImage: "url(" + image + ")" }}
                    />
                </Drawer>
            </Hidden>
        </div>
    )
}

export default withStyles(sidebarStyles)(Sidebar)