import React from "react";
import MUIDataTable from "mui-datatables";

export default function FullDataTable(props) {

    const columns = [
        {
            name: "time",
            label: "SystemTime",
        },
        {
            name: "files",
            label: "Files",
            options: {
                filter: false,
            }
        },
        {
            name: "inodes",
            label: "Inodes",
            options: {
                filter: false,
            }
        },
        {
            name: "recv",
            label: "Bytes Received",
            options: {
                filter: false,
            }
        },
        {
            name: "send",
            label: "Bytes Sent",
            options: {
                filter: false,
            }
        },
        {
            name: "used",
            label: "Memory Used",
            options: {
                filter: false,
            }
        },
        {
            name: "buff",
            label: "Memory Buffered",
            options: {
                filter: false,
            }
        },
        {
            name: "cach",
            label: "Memory Cached",
            options: {
                filter: false,
            }
        },
        {
            name: "free",
            label: "Memory Free",
            options: {
                filter: false,
            }
        },
        {
            name: "usr",
            label: "User",
            options: {
                filter: false,
            }
        },
        {
            name: "sys",
            label: "System",
            options: {
                filter: false,
            }
        },  {
            name: "idl",
            label: "Idle",
            options: {
                filter: false,
            }
        },  {
            name: "wai",
            label: "Waiting",
            options: {
                filter: false,
            }
        },  {
            name: "hiq",
            label: "HIQ",
            options: {
                filter: false,
            }
        },
        {
            name: "siq",
            label: "SIQ",
            options: {
                filter: false,
            }
        },
        {
            name: "read",
            label: "Read Bytes",
            options: {
                filter: false,
            }
        },
        {
            name: "writ",
            label: "Write Bytes",
            options: {
                filter: false,
            }
        },
        {
            name: "1m",
            label: "1m",
            options: {
                filter: false,
            }
        },
        {
            name: "1m",
            label: "5m",
            options: {
                filter: false,
            }
        },
        {
            name: "1m",
            label: "15m",
            options: {
                filter: false,
            }
        },

    ];

    const data = props.data;

    const options = {
        filter: true,
        print: false,
        download: false,
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
