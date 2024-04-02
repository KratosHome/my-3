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
    const [searchTerm, setSearchTerm] = useState('');


    return (
        <div className="container-data-table">
            <div className="wrapper-header-table">
                {choseColumnsOptions.map((column: any) => (
                    <div
                        key={column.id}
                        style={{width: column.width ? `${column.width}px` : 'auto'}}
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
                                style={{width: column.width ? `${column.width}px` : 'auto'}}
                                className="datatable-cell"
                            >
                                {column.render ?
                                    <>{column.render(item)}</> : <div className="wrapper-item">{item[column.id]}</div>}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataTable;