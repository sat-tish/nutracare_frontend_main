import { Container, Row, Col } from "react-bootstrap"
import AllCenters from "../components/AllCenters/AllCenters"
import Header from "../components/Header/Header"
import SuccessStories from "../components/SuccessStories/SuccessStories"
import Testimonials from "../components/Testimonials/Testimonials"
import { Link } from "react-router-dom"


const HomePage = () => {
  //const navigate = useNavigate();
  return (
    <>
     <Header/>
    <Container>
    <Row className="text-center home-heading">
        <Col>
          <h3 className="fs-3 mb-5 mt-5">All Centers</h3>
        </Col>
      </Row>
      <AllCenters/>
      <Row className="centers-row">
        <Col className="d-flex justify-content-end mb-5">
          {/* <button type="button" className="btn fig-read-more" onClick={()=>{
            navigate('/nutracare_frontend_main/all_centers'
            )
            }}>
            View More..
          </button> */}
          <Link className="btn fig-read-more" to={'/nutracare_frontend_main/all_centers'}>View More..</Link>
        </Col>
      </Row>
    </Container>
   
    <SuccessStories/>
    <Testimonials/>
    </>
    
  )
}

export default HomePage
