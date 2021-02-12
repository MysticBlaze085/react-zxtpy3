import React, { useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const AgGridBuilder = props => {
  const { useStyles } = props;
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const [rowData, setRowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ]);

  console.log(gridApi);

  const onGridReady = params => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  return (
    <div className="ag-theme-alpine" style={useStyles.root}>
      <AgGridReact onGridReady={onGridReady} rowData={rowData}>
        <AgGridColumn field="make" editable={true} />
        <AgGridColumn field="model" editable={true} />
        <AgGridColumn field="price" editable={true} />
      </AgGridReact>
    </div>
  );
};

export default AgGridBuilder;
