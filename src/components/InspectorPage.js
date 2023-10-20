import React from 'react';
import '../styles/InspectorPage.css'; // Make sure to import the CSS file
import Header from './Header';
import RoundedRectangleCentre from './RoundedRectangleCentre';
import FileUploadForm from './Zip';

function InspectorPage() {
  return (
    <div className="inspector-page-container">
      <Header />
      <RoundedRectangleCentre>
        <FileUploadForm />
      </RoundedRectangleCentre>
    </div>
  );
}

export default InspectorPage;
