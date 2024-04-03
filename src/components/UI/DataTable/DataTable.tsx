"use client";
import React, {FC, useState} from 'react';
import "./DataTable.scss";

interface DataTableProps {
    data: any[];
    columns: any[];
    initialSelectedOptions: any
}

const DataTable: FC<DataTableProps> = ({data, columns, initialSelectedOptions}) => {
    const [dataToShow, setDataToShow] = useState(data);
    const [choseColumnsOptions, setChoseColumnsOptions] = useState(initialSelectedOptions);


    return (
        <div className="user-wrapper_container">
            <div className="container-data-table">
                <div className="wrapper-header-table">
                    {choseColumnsOptions.map((column: any) => (
                        <div
                            key={column.id}
                            style={{minWidth: column.width ? `${column.width}px` : 'auto'}}
                            className="datatable-header-cell"
                        >
                            {column.headerName}
                        </div>
                    ))}
                </div>

                <div className="datatable-body">
                    {dataToShow.map((item, index) => (
                        <div key={index} className="datatable-row">
                            {choseColumnsOptions.map((column: any) => (
                                <div
                                    key={column.id}
                                    style={{minWidth: column.width ? `${column.width}px` : 'auto'}}
                                    className="datatable-cell"
                                >
                                    {column.render ?
                                        <>{column.render(item)}</> :
                                        <div className="wrapper-item">{item[column.id]}</div>}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DataTable;