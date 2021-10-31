import React from "react";
import LoopIcon from "@mui/icons-material/Loop";
import { blue } from "@mui/material/colors";
const Spinner = () => (
  <div className="spinner-container">
    <LoopIcon 
        className="spinner" 
        sx={{ fontSize: 300}}
     />
  </div>
);

export default Spinner;
