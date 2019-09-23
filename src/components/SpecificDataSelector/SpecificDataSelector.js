import React, { Component } from "react";
import { Select, withStyles } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { styles } from "./SpecificDataSelector.style";

class SpecificDataSelector extends Component {


    render() {
        const { classes } = this.props;
        const options = this.props.attributes.map(attr => <MenuItem value={attr.id}>attr.label</MenuItem>);
        return (
            <div className={classes.selector_container}>
                <InputLabel className={classes.label}>Paramètre(s) : </InputLabel>
                <Select
                    value={this.props.selectedValue}
                    multiple
                    onChange={this.props.updateSpecificDataParams}
                >
                    {options}
                </Select>
            </div>
        );
    }
}

export default withStyles(styles)(SpecificDataSelector);
