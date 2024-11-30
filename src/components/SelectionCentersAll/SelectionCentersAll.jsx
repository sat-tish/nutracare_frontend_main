import AllCenters from "../AllCenters/AllCenters"
import { Container, Row, Col } from 'react-bootstrap'
import SelectionHome from "../SelectionHome/SelectionHome"


const SelectionCentersAll = () => {
  return (
    <Container fluid className='inner-pages-wrapper p-0'>
    <div className='header-all mb-5' style={{backgroundImage:"url(Images/BackgroundImages/b2.jpg)"}}>
    <div className="overlay-header" />
       <Container>
        <Row>
            <Col>
            <h4 className="mt-5 mb-5 text-center">All Centers</h4>
            </Col>
        </Row>
    </Container>
    <SelectionHome/>
    </div>
    <AllCenters/>
</Container>
    
  )
}

export default SelectionCentersAll
