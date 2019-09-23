import React, { Component } from 'react';
import axios from 'axios';
import { CircularProgress, withStyles } from "@material-ui/core";
import { styles } from './DataContainer.style';
import FullDataTable from "../FullDataTable/FullDataTable";

function formatTimeToDate(time) {
    return new Date(time.replace('16-03', '2019-03-16'));
}

function formatTimeToString(time) {
    return formatTimeToDate(time).toLocaleDateString('fr-FR',
        {  year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric',
            second: 'numeric'});
}

class DataContainer extends Component {

    state = {
      jsonData: null
    };

    constructor(props) {
        super(props);

        const axi = axios.create({
            baseURL: 'http://localhost:3000/'
        });

        axi.get('assets/data.json')
            .then(resp => {
                console.log(resp.data);
                resp.data.forEach(obj => {
                    obj.time = obj.time ? formatTimeToString(obj.time) : null;
                });
                this.setState({ jsonData: resp.data });
            });

    }

    render() {
        const { classes } = this.props;
        if(!this.state.jsonData) {
            return (
                <div className={classes.centered}>
                    <CircularProgress classes={{ root: classes.loader }}/>
                </div>
             );
        } else {
            return (
                <div className={classes.container}>
                    <FullDataTable data={this.state.jsonData}/>
                </div>
            );
        }

    }
}

export default withStyles(styles)(DataContainer);
