import React from "react";
import MUIDataTable from "mui-datatables";

export default function FullDataTable(props) {

    const data = props.data;
    const columns = props.columns;

    const options = {
        filter: false,
        print: false,
        download: false,
        search: false,
        responsive: 'stacked',
        rowsPerPage: 15,
        rowsPerPageOptions: [15,30,50,100],
        selectableRows: 'none'
    };

    return (
        <MUIDataTable
            title={"Data Analysis"}
            data={data}
            columns={columns}
            options={options}
        />
    );

}
