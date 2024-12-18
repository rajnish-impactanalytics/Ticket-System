"use client";

import React, {
  useCallback,
  useMemo,
  useState,
  useRef,
  useEffect,
} from "react";
import { AgGridReact } from "ag-grid-react";
import {
  ClientSideRowModelModule,
  ModuleRegistry,
  ValidationModule,
} from "ag-grid-community";
ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule]);

import { COLUMN_DEFS, ROW_DATA } from "./constants";

const GridExample = () => {
  const gridApi = useRef(null);
  const gridColumnApi = useRef(null);
  
  const onGridReady = (params) => {
    gridApi.current = params.api;
    gridColumnApi.current = params.columnApi;
    gridApi.current.sizeColumnsToFit();
  };

  useEffect(() => {
    // Ensure the columns fit to width when the grid is first loaded
    if (gridApi.current) {
      gridApi.current.sizeColumnsToFit();
    }
  }, []);

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: "100vh", width: "100%", boxSizing: "border-box" }}
    >
      <AgGridReact
        rowData={ROW_DATA}
        columnDefs={COLUMN_DEFS}
        onGridReady={onGridReady}
      />
    </div>
  );
};
export default GridExample;
