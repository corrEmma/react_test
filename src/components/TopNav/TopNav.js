import React, { Component } from 'react';
import { AppBar, withStyles } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { styles } from "./TopNav.style";

class TopNav extends Component {

    render() {
        const { classes } = this.props;
        return(
            <AppBar position="static" classes={{root: classes.app_bar}} >
                <Tabs value={this.props.selectedTab} onChange={this.props.onTabChange} classes={{root: classes.tabs}}>
                    <Tab label="DataTable View" value={0}/>
                    <Tab label="Specific Data View" value={1}/>
                </Tabs>
            </AppBar>
        );
    }
}
export default withStyles(styles)(TopNav);
