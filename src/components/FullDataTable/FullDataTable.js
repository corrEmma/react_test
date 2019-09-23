import React from "react";
import MUIDataTable from "mui-datatables";

export default function FullDataTable(props) {

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

    const data = props.data;

    const options = {
        filter: false,
        print: false,
        download: false,
        search: false,
        responsive: 'scrollMaxHeight',
        rowsPerPage: 15,
        rowsPerPageOptions: [15,30,50,100]
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
