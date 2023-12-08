import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../Components/Frontpage.css';
import { Link } from 'react-router-dom';

function Frontpage() {
  return (
    <Container fluid className='container'>
      <div className="content">
        <div className="text-center d-flex flex-column align-items-center">
          <p style={{ color: 'white', fontFamily: 'serif', fontSize: '25px', textShadow: '2px' }}>Welcome To FILESHARE</p>
          <h2 style={{ color: 'white', marginTop: '20px' }}>Transfer Any File,<br />To Anywhere</h2>
          <p style={{ color: 'white', marginTop: '20px',marginBottom:'20px' }}>Share Your Files In Simple Way And Convinient Way</p>
          <Link to={'/main'} ><Button className='button'>Start Sharing</Button></Link>
          
        </div>
      </div>
    </Container>
  );
}

export default Frontpage;

