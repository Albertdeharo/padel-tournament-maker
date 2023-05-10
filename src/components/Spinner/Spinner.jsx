import React from "react";
import "./spinner.scss";

export default function LoadingSpinner() {
  return (
    <div className="spinner-overlay">
        <div className="spinner-container">
            {/* <div className="loading-spinner">
            </div> */}
        <div className="ball"></div>
        <div className="shadow"></div>
    </div>
    </div>
  );
}