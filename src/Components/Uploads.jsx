// components/Uploads.jsx

import React, { useEffect, useState } from 'react';
import { getFiles } from '../services/api';
import { Link } from 'react-router-dom';

import './Uploads.css'; // Import the CSS file

function Uploads() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const files = await getFiles();
        setUploadedFiles(files);
      } catch (error) {
        console.error('Error fetching files:', error.message);
        setError('Error fetching files. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <h2>Uploaded Files</h2>
      {loading ? (
        <p>Loading files...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <table className="custom-table">
          <thead>
            <tr>
              <th>#</th>
              <th>File Name</th>
              <th>Download Link</th>
            </tr>
          </thead>
          <tbody>
            {uploadedFiles.map((uploadedFile, index) => (
              <tr key={uploadedFile._id}>
                <td>{index + 1}</td>
                <td>{uploadedFile.name}</td>
                <td>
                  <a href={uploadedFile.path} target='_blank' rel='noopener noreferrer'>
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link style={{marginTop:'100px'}} to='/main'>Back to Main Page</Link>
    </div>
  );
}

export default Uploads;
