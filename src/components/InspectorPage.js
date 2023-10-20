import React from "react";
import "../styles/InspectorPage.css"; // Make sure to import the CSS file
import Header from "./Header";
import RoundedRectangleCentre from "./RoundedRectangleCentre";
import FileUploadForm from "./Zip";

function InspectorPage() {
  return (
    <div className="inspector-page-container">
      <Header />
      {/* <RoundedRectangleCentre> */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white rounded-md">
        <FileUploadForm />
      </div>
      {/* </RoundedRectangleCentre> */}
    </div>
  );
}

export default InspectorPage;
