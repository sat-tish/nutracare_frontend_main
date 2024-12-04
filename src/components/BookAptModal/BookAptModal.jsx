import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function BookAptModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         <h5>Book Appointment</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
        <div className='d-flex flex-wrap justify-content-between'>
            <Link type='button' className='btn book-apt' to={'/nutracare_frontend_main/message'}>Send Message</Link>
            <button type='button' className='btn btn-danger'>Call now</button>
        </div>
    
      </Modal.Body>
    </Modal>
  );
}

export default BookAptModal

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// render(<App />);