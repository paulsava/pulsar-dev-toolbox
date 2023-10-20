// src/components/FileUploadForm.js

import React, { useRef } from "react";
import "../styles/Zip.css";

function FileUploadForm() {
  const fileInputRef = useRef(null);
  const [response, setResponse] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Ensure a file was selected
    if (!fileInputRef.current.files.length) {
      alert("Please select a zip file.");
      return;
    }

    const file = fileInputRef.current.files[0];

    // Create a FormData object to hold the file data
    const formData = new FormData();
    formData.append("file", file);

    try {
      // Modify the URL below to your backend endpoint
      const response = await fetch(
        "https://9c43-86-105-110-148.ngrok-free.app/inspect",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log(response);
      const responseData = await response.json();
      console.log(responseData);
      setResponse(responseData);
      alert("File uploaded successfully!"); // Handle the response data as needed
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file. Please try again.");
    }
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 mt-8 max-w-sm justify-center items-center mx-auto"
      >
        <label htmlFor="zipFile" className="file-upload-label">
          Select the ZIP archive containing the SRC subfolder of your smart
          contract project
          <input
            type="file"
            id="zipFile"
            name="zipFile"
            accept=".zip"
            className="file-input"
            ref={fileInputRef}
          />
        </label>
        <button type="submit" className="upload-btn">
          Upload
        </button>
      </form>
      {response && (
        <div className="flex flex-col items-center justify-center"></div>
      )}
    </div>
  );
}

export default FileUploadForm;
