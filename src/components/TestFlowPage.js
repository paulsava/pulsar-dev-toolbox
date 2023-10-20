import React from 'react';
import '../styles/TestFlowPage.css'; // Make sure to import the CSS file
import Header from './Header';
import RoundedRectangleCentre from './RoundedRectangleCentre';

function TestFlowPage() {
  return (
    <div className="testflow-page-container">
     <Header />
      <RoundedRectangleCentre />
    </div>
  );
}

export default TestFlowPage;
