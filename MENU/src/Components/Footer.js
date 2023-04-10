import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn ,MDBCol
} from 'mdb-react-ui-kit';
import { MDBIcon} from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export default function Footer() {
  
  return (
    <MDBFooter className='bg-light text-center text-white'>
      
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
        <MDBCol md="4" lg="3" xl="4" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-4" />
                طريق القايد محمد كلم 3  Sfax, Tunisie
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                lamascotte@edge-agency.tn
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +216 52 735 777
              </p>
            </MDBCol>
          <MDBBtn
            floating
            className='m-1'
            
            href='https://www.facebook.com/La-Mascotte-362198197318317'
            
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
           
            href='https://www.instagram.com/lamascotte1/?hl=fr'
         
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

        

          
        </section>
      </MDBContainer>
      
      <div className='text-center p-3' style={{ backgroundColor: 'rgb(13 13 13 / 87%)', padding:'10' }}>
        © 2023 Copyright   
        <a className='text-yellow' href='https://logicom-dev.com/'>  LOGICOM
        </a>
      </div>
    </MDBFooter>
  );
}