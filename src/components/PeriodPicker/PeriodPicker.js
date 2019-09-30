import React, { Component } from 'react';
import DateTimePicker  from "react-datetime-picker";
import { styles } from './PeriodPicker.style';
import { withStyles } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";



class PeriodPicker extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.period_picker}>
                <InputLabel className={classes.picker_label}>Start Date : </InputLabel>
                <DateTimePicker
                    className={classes.picker}
                    value={this.props.startDate}
                    onChange={date => this.props.updatePeriodValues(date, true)}
                    disableClock
                    locale="en-US"
                    clearIcon={null}
                />
                <InputLabel className={classes.picker_label}>End Date : </InputLabel>
                <DateTimePicker
                    className={classes.picker}
                    value={this.props.endDate}
                    onChange={date => this.props.updatePeriodValues(date,false)}
                    disableClock
                    locale="en-US"
                    clearIcon={null}
                />
            </div>
        );
    }
}

export default withStyles(styles)(PeriodPicker);
