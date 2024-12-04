import { Container, Row, Col } from 'react-bootstrap'
import './MessageBox.css'
import { useState } from 'react';


const MessageBox = () => {

    const [fName, setfName] = useState("");
    const [email, setEmail] = useState("");
    const [mNumber, setnNumber] = useState("");
    //const [name, setName] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${fName}`)
    }

  return (
    <Container fluid className='inner-pages-wrapper'>
       <Container>
        <Row>
            <Col lg={5} className='mx-auto'>
               <div className='pro-info-main mt-5 mb-5'>
                <h5 className='mb-5 message-form-width text-center'>Send Message</h5>
               <form onSubmit={handleSubmit} className='d-flex flex-column gap-4'>
                  <input 
                    type="text" 
                    value={fName}
                    placeholder='Enter your name'
                    className='message-form-inner'
                    onChange={(e) => setfName(e.target.value)}
                  />
                  <input 
                    type="email" 
                    value={email}
                    placeholder='Enter your email'
                    className='message-form-inner'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                   <input 
                    type="tel" 
                    value={mNumber}
                    placeholder='Enter contact number'
                    className='message-form-inner'
                    onChange={(m) => setnNumber(m.target.value)}
                  />
                  <textarea name="Send-message" placeholder='Send message' id="" className='message-form-inner m-textarea'/>
   
                  <button type='submit' className='book-apt message-form-width'>Submit</button>
                </form>
               </div>
             
            </Col>
        </Row>
       </Container>
    </Container>
  )
}

export default MessageBox
