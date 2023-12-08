import React, { useEffect, useRef, useState } from 'react'
import { uploadFile } from '../services/api';
import '../Components/Mainpage.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Mainpage() {
    const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();


  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        try {
          const response = await uploadFile(data);
          setResult(response.path);
        } catch (error) {
          console.error('Error uploading file:', error.message);
          setResult(''); // Clear result in case of an error
        }
      }
    };

    getImage();
  }, [file]);


  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <div className='container'>
      
      <div className='wrapper d-flex flex-column align-items-center'>
    <h1 style={{color:'white'}}>Share AnyFile</h1>
    <p style={{marginTop:'20px',marginBottom:'20px',color:"white"}}>Upload and share the download link</p>
  
  <Button className='button' onClick={() => onUploadClick()}>Upload</Button>
  <input
    type="file"
    ref={fileInputRef}
    style={{ display: "none" }}
    onChange={(e) => setFile(e.target.files[0])}
  />

  {result && (
    <div className="link-box">
      <a href={result} target='_blank'>{result}</a>
      <div className='click'>
        <Button style={{width:'200px',marginTop:'15px'}} className='button' onClick={() => navigator.clipboard.writeText(result)}>Copy Link to Download</Button>
        <Button className='button' onClick={() => onUploadClick()} style={{width:'100px',marginTop:'15px'}}>Upload More</Button>
        <Link to='/uploads'>
          <button className='button' style={{ marginTop: '10px', cursor: 'pointer',width:'150px' }}>Uploaded Files</button>
        </Link>

      </div>
    </div>
  )}
</div>
<Link to={'/'}><p  style={{color:'white',marginTop:'50px'}}> &lt; &lt; Back to Home Page </p>
</Link>

    </div>
  );
}

export default Mainpage;

