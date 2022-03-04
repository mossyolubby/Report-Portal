import React from 'react'
import "./report.css";
import { saveAs } from "file-saver";

export default function Report() {
  const saveFile = () => {
    saveAs(
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      "example.pdf"
    );
  };
  return (
    <div className="reportContainer">
      <div className="report">
        <h3 className="download">Download Report</h3>
      <label className="labelFrom" for="start">From:</label>

<input className="inputFrom" type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31" />
      
    
      <label className="labelTo" for="start">To:</label>

<input  className="inputTO" type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31" />

<label className="labelStatus" for="status">Status</label>

<select className="status" id="cars">
  <option value="all">All</option>
  <option value="successful">Successful</option>
  <option value="pending">Pending</option>
  <option value="failed">Failed</option>
</select>       
      

      <div>
      <button className="btnDownload" onClick={saveFile}>download</button>
    </div>
    </div>
    </div>
  )
}
