import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './FooterPage.css'
export default function FooterPage() {
  return (
    <MDBFooter className='text-center text-lg-start shadow-sm footerPage' style={{marginTop:"3rem"
    }}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 pageLinks'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 pageLinks'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 pageLinks'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 pageLinks'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 pageLinks'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 pageLinks'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h4 className='text fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Better U
              </h4>
              <p>
              "Better U is a journey of self-discovery and self-improvement - 
              a reminder that the power to change lies within you."
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='pageLinks'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='pageLinks'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='pageLinks'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='pageLinks'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='https://echargementalhealth.nimhans.ac.in/pushd/' className='pageLinks'>
                  PUSH-D
                </a>
              </p>
              <p>
                <a href='https://tinybuddha.com/' className='pageLinks'>
                  tiny buddha
                </a>
              </p>
              <p>
                <a href='https://insighttimer.com/en-in' className='pageLinks'>
                  Insight Timer
                </a>
              </p>
              <p>
                <a href='https://www.headspace.com/' className='pageLinks'>
                  headspace
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Jaswanth.Chapiri@iiitb.ac.in
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 9381679935
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='pageLinks fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}