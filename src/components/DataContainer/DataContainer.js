import React, { Component } from 'react';
import axios from 'axios';
import { CircularProgress, withStyles } from "@material-ui/core";
import { styles } from './DataContainer.style';
import FullDataTable from "../FullDataTable/FullDataTable";
import PeriodPicker from "../PeriodPicker/PeriodPicker";
import SpecificDataDisplay from "../SpecificDataDisplay/SpecificDataDisplay";

function formatTimeToDate(time) {
    return new Date(time.replace('16-03', '03/16/2019'));
}

function formatTimeToString(time) {
    return formatTimeToDate(time).toLocaleDateString('en-US',
        {  year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric',
            second: 'numeric'});
}


const columns = [
    {
        name: "time.dateStr",
        label: "SystemTime",
    },
    {
        name: "files",
        label: "Files",
    },
    {
        name: "inodes",
        label: "Inodes",
    },
    {
        name: "recv",
        label: "Bytes Received",
    },
    {
        name: "send",
        label: "Bytes Sent",
    },
    {
        name: "used",
        label: "Memory Used",
    },
    {
        name: "buff",
        label: "Memory Buffered",
    },
    {
        name: "cach",
        label: "Memory Cached",
    },
    {
        name: "free",
        label: "Memory Free",
    },
    {
        name: "usr",
        label: "User",
    },
    {
        name: "sys",
        label: "System",
    },  {
        name: "idl",
        label: "Idle",
    },  {
        name: "wai",
        label: "Waiting",
    },
    {
        name: "hiq",
        label: "HIQ",
    },
    {
        name: "siq",
        label: "SIQ",
    },
    {
        name: "read",
        label: "Read Bytes",
    },
    {
        name: "writ",
        label: "Write Bytes",
    },
    {
        name: "1m",
        label: "1m",
    },
    {
        name: "1m",
        label: "5m",
    },
    {
        name: "1m",
        label: "15m",
    },

];


class DataContainer extends Component {

    state = {
        jsonData: null,
        startDate: null,
        endDate: null,
        selectedValues: [],
        specificData: []
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
                resp.data.sort((a, b) => { return a.time !== null && b.time !== null && a.time.date - b.time.date });
                this.setState({
                    endDate: resp.data[resp.data.length-1].time.date,
                    startDate: resp.data[0].time.date,
                }, () => {
                    this.setState({jsonData: resp.data})
                });
            });
    }

    updatePeriodValues = (date, isStartDate) => {
        if(isStartDate) {
            this.setState({startDate: date});
        } else {
            this.setState({endDate: date});
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
            if(this.props.selectedTab === 0) {
                return (
                    <div className={classes.container}>
                        <PeriodPicker updatePeriodValues={this.updatePeriodValues}
                                      startDate={this.state.startDate}
                                      endDate={this.state.endDate}
                        />
                        <FullDataTable data={this.state.startDate && this.state.endDate ? sortedData : this.state.jsonData} columns={columns}/>
                    </div>
                );
            } else {
                return (
                    <SpecificDataDisplay
                        jsonData={this.state.jsonData}
                    />
                );
            }
        }

    }
}

export default withStyles(styles)(DataContainer);
