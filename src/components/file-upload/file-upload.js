import React from 'react';
import './file-upload.css';

const FileUpload = ({ onPhotoChange, text }) => {
  return (
    <div className="file-upload">
      <label htmlFor="file-upload" className="custom-file-upload">
        {text}
      </label>
      <input onChange={onPhotoChange} id="file-upload" type="file" />
    </div>
  );
};

export default FileUpload;
