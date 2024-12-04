import { useState } from 'react';
import BookAptModal from '../../components/BookAptModal/BookAptModal'
import './ProfessionalInfo.css'
import {Col, Container, Row, Table } from 'react-bootstrap'


const ProfessionalInfo = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Container fluid className='inner-pages-wrapper p-0'>
      <div className='header-all mb-4' style={{backgroundImage:"url(Images/BackgroundImages/b6.jpg)"}}>
        <div className="overlay-header" />
        <Container>
            <Row>
                <Col lg={10} className='mx-auto'>
               
                    <div className='mt-4 mb-4 pro-info-head d-flex flex-nowrap gap-5'>
                    <div className="figure-img ">
                      <img
                        className="personal-img img-border"
                        src="Images/Illustrations/person_1.jpg.webp"
                        alt=""
                      />
                    </div>
                    <div className='mt-3'>
                    <h4>Doctor name</h4>   
                      <h6 className='mt-3 pro-info-h6'>BAMS</h6>
                      <h6>RMT - Registered massage therapist</h6>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
      <Container>
        <Row>
          <Col lg={10} className='mx-auto'>
              <div className='pro-info-main shadow d-flex flex-column mb-5'>
                <Container>
                  <Row>
                  <Col lg={8}>
                  <div>
                  <h6 style={{color: '#7e7b7b'}}>Clinic Name :</h6>
                  <h5>John carten clinic</h5>
                  <p className='lh-lg'>Address - Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                  <p className='mt-4 lg-mt-5'>10 years of experience</p>
                  <h6>Consulting fees : <span style={{color:'#c10606'}}>100$</span></h6>
                  <button type='btn' className='book-apt mb-4 mt-3' onClick={()=> setModalShow(true)}>Book Appointment</button>
            
                  <BookAptModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    />
                  </div>
                  </Col>
                  <Col lg={4}>
                  <div>
                  <h6>E-mail id :</h6>
                  <p> professionalinfo@gmail.com</p>
                  <h6>Contact no :</h6>
                  <p>+156655566444</p>
                  <h6>Website :</h6>
                  <p>www.professionalinfo.com</p>
                  </div>
                  </Col>
                  </Row>
                  <hr />
                  <Row>
                  <Col>
                  <h5 >Our Services :</h5>
                  <div className='d-flex flex-wrap pro-info-services mt-4 mb-3'>
                    <h6 className='pro-info-services-child'>Homeopathy</h6>
                    <h6 className='pro-info-services-child'>Ayurveda</h6>
                    <h6 className='pro-info-services-child'>Accupressure</h6>
                    <h6 className='pro-info-services-child'>Yoga</h6>
                    <h6 className='pro-info-services-child'>Nutrition</h6>
                    <h6 className='pro-info-services-child'>Massage therapy</h6>
                    <h6 className='pro-info-services-child'>Cupping</h6>
                    <h6 className='pro-info-services-child'>Chinease medicine</h6>
                    <h6 className='pro-info-services-child'>accupuncture</h6>
                    <h6 className='pro-info-services-child'>Osteopathy</h6>
                  </div>
                  </Col>
                  </Row>
                  <hr />
                  <Row>
                  <Col>
                  <h5 className='mb-4'>
                    About :
                  </h5>
                  <p className='mb-4 lh-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, ipsa earum tempora voluptatem 
                    aliquam doloribus architecto tenetur ratione, eius quasi itaque quidem.
                     Eius, cum dolor excepturi vero fugit mollitia distinctio?</p>
                  </Col>
                  
                  </Row>
                  <hr />
                  <Row>
                  <Col>
                  <h5 >Our Specializations :</h5>
                  <div className='d-flex flex-wrap pro-info-services mt-4 mb-3'>
                    <h6 className='pro-info-services-child'>Homeopathy</h6>
                    <h6 className='pro-info-services-child'>Ayurveda</h6>
                    <h6 className='pro-info-services-child'>Accupressure</h6>
                    <h6 className='pro-info-services-child'>Yoga</h6>
                    <h6 className='pro-info-services-child'>Nutrition</h6>
                    <h6 className='pro-info-services-child'>Massage therapy</h6>
                    <h6 className='pro-info-services-child'>Cupping</h6>
                    <h6 className='pro-info-services-child'>Chinease medicine</h6>
                    <h6 className='pro-info-services-child'>accupuncture</h6>
                    <h6 className='pro-info-services-child'>Osteopathy</h6>
                  </div>
                  </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col lg={6}>
                      <div className='mb-4'>
                      <h5 className='mb-4'>Education :</h5>
                      <h6 className='font-color-light'>MBBS</h6>
                      <h6 className='font-color-light'>Diploma in xyz</h6>
                      </div>
                    </Col>
                    <Col lg={6}>
                    <div>
                    <h5 className='mb-4'>Memberships :</h5>
                    <h6 className='font-color-light'>Onterio association</h6>
                    <h6 className='font-color-light'>Alberta association</h6>
                    </div>
                   
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col lg={8} className='mx-auto'>
                    <h5 className='mb-4'>Timings :</h5>
                    <Table  bordered hover>
                        <thead>
                          <tr className=''>
                            
                            <th>Day</th>
                            <th>Timings</th>
                           
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Monday</td>
                            <td>9 am to 5 pm</td>
                          
                          </tr>
                          <tr>
                            <td>Tuesday</td>
                            <td>9 am to 5 pm</td>
                           
                          </tr>
                          <tr>
                            <td>Wednusday</td>
                            <td>9 am to 5 pm</td>
                           
                          </tr>
                          <tr>
                            <td>Thursday</td>
                            <td>9 am to 5 pm</td>
                           
                          </tr>
                          <tr>
                            <td>Friday</td>
                            <td>9 am to 5 pm</td>
                          
                          </tr>
                          <tr>
                            <td>Saturday</td>
                            <td>9 am to 5 pm</td>
                         
                          </tr>
                          <tr>
                            <td>Sunday</td>
                            <td>9 am to 5 pm</td>
                           
                          </tr>
                          
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    {/* <Col lg={6}>
                    <button type='btn' className='read-more mt-4'>Read Our blog</button>
                    </Col> */}
                    <Col className='text-end'>
                    <button type='btn' className='book-apt mt-4' onClick={()=> setModalShow(true)}>Book Appointment</button>
                    <BookAptModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    />
                    </Col>
                  </Row>
                 
                </Container>
                

              </div>
              
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default ProfessionalInfo
