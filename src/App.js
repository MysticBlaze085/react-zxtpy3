import React from "react";
import "./style.css";
import AgGridBuilder from "./shared/ag-grid/AgGridBuilder";

import { gridStyles } from "./ag-grid-dummy.config";

export default function App() {
  return (
    <div>
      <AgGridBuilder useStyles={gridStyles} />
    </div>
  );
}
