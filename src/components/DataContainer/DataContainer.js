import React, { Component } from 'react';
import axios from 'axios';
import { CircularProgress, withStyles } from "@material-ui/core";
import { styles } from './DataContainer.style';
import FullDataTable from "../FullDataTable/FullDataTable";
import PeriodPicker from "../PeriodPicker";
import { dates } from './../DateUtils';

function formatTimeToDate(time) {
    return new Date(time.replace('16-03', '2019-03-16'));
}

function formatTimeToString(time) {
    return formatTimeToDate(time).toLocaleDateString('fr-FR',
        {  year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric',
            second: 'numeric'});
}

function formatDateToString(date) {
    return date.toLocaleDateString('fr-FR',
        {  year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric',
            second: 'numeric'});
}

class DataContainer extends Component {

    state = {
        jsonData: null,
        startDate: null,
        endDate: null
    };

    constructor(props) {
        super(props);

        const axi = axios.create({
            baseURL: 'http://localhost:3000/'
        });

        axi.get('assets/data.json')
            .then(resp => {
                resp.data.forEach(obj => {
                    obj.time = obj.time ? { date: formatTimeToDate(obj.time), dateStr: formatTimeToString(obj.time)} : null;
                });
                resp.data.sort((a, b) => { return a.time !== null && b.time !== null && a.time.date < b.time.date });
                this.setState({
                    endDate: resp.data[0].time.date,
                    startDate: resp.data[resp.data.length-1].time.date,
                }, () => {
                    console.log(resp.data.length);
                    this.setState({jsonData: resp.data})
                });
            });
    }

    updatePeriodValues = (date, isStartDate) => {
        if(isStartDate) {
            this.setState({startDate: date})
        } else {
            this.setState({endDate: date})
        }
    };

    render() {
        const { classes } = this.props;
        if(!this.state.jsonData) {
            return (
                <div className={classes.centered}>
                    <CircularProgress classes={{ root: classes.loader }}/>
                </div>
             );
        } else {
            const sortedData = this.state.jsonData.filter(obj => obj.time && obj.time.date <= this.state.endDate && obj.time.date >= this.state.startDate);
            return (
                <div className={classes.container}>
                    <PeriodPicker updatePeriodValues={this.updatePeriodValues}
                                  startDate={this.state.startDate}
                                  endDate={this.state.endDate}
                    />
                    <FullDataTable data={sortedData}/>
                </div>
            );
        }

    }
}

export default withStyles(styles)(DataContainer);
