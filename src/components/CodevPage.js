import React from 'react';
import '../styles/CodevPage.css'; // Make sure to import the CSS file
import Header from './Header';
import RoundedRectangleCentre from './RoundedRectangleCentre';

function CodevPage() {
  return (
    <div className="codev-page-container">
      <Header />
      <RoundedRectangleCentre />
    </div>
  );
}

export default CodevPage;
