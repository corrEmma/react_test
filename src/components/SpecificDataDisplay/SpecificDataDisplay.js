import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { styles } from "./SpecificDataDisplay.style";
import FullDataTable from "../FullDataTable/FullDataTable";

const columns = [
    { name: 'label', label: 'Parameter', options: { viewColumns: false }},
    { name: 'average', label: 'Average Value'}  ,
    { name: 'tops.min', label: 'Minimum Value'}  ,
    { name: 'tops.max', label: 'Maximum Value'}  ,
];

const attributes = [
    {selector: 'files', label: 'files'},
    {selector: 'inodes', label: 'inodes'},
    {selector: 'recv', label: 'bytes received'},
    {selector: 'send', label: 'bytes sent'},
    {selector: 'used', label: 'memory used'},
    {selector: 'buff', label: 'memory buffered'},
    {selector: 'cach', label: 'memory cached'},
    {selector: 'free', label: 'memory free'},
    {selector: 'usr', label: 'cpu : user'},
    {selector: 'sys', label: 'cpu : system'},
    {selector: 'idl', label: 'cpu : idle'},
    {selector: 'wai', label: 'cpu : waiting'},
    {selector: 'hiq', label: 'cpu : hiq'},
    {selector: 'siq', label: 'cpu : siq'},
    {selector: 'read', label: 'read bytes'},
    {selector: 'writ', label: 'write bytes'},
    {selector: '1m', label: 'load average : 1m'},
    {selector: '5m', label: 'load average : 5m'},
    {selector: '15m', label: 'load average : 15m'}
];


class SpecificDataDisplay extends Component {

    state = {
      specificData: []
    };

    componentDidMount() {
        let formattedData = attributes.map(attr => {
            return this.getSpecificDataForAttribute(attr);
        });
        this.setState({specificData: formattedData});
    }

    getAverageForAttribute = attr => {
        let avg = 0;
        let index = 0;
        this.props.jsonData.forEach(data => {
            if(data[attr]) {
                avg += data[attr];
                index++;
            }
        });
        return avg === 0 ? avg : (avg / index).toFixed(2);
    };

    getMinAndMaxForAttribute = attr => {
        let values = [];
        this.props.jsonData.forEach(data => {
            if(data[attr]) {
                values.push(data[attr]);
            }
        });
        values.sort((a, b) => a - b);
        return values.length !== 0 ? { min: values[0], max: values[values.length - 1] } : { min: 0, max: 0 };
    };

    getSpecificDataForAttribute = (attr) => {
        let specs = { average: null, tops : { min: null, max: null } };
        specs.label = attr.label;
        specs.average = this.getAverageForAttribute(attr.selector);
        specs.tops = this.getMinAndMaxForAttribute(attr.selector);
        return specs;
    };

    render() {
        const { classes } = this.props;
        return (
            <>
                <div className={classes.specific_data_container}>
                    <FullDataTable data={this.state.specificData} columns={columns}/>
                </div>
            </>
        );
    }
}

export default withStyles(styles)(SpecificDataDisplay);
