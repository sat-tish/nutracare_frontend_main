
import SingleCenter from "../../commonComponents/SingleCenter/SingleCenter";
import "./AllCenters.css";
import { Container, Row, Col } from "react-bootstrap";

const AllCenters = () => {

    const centerList = [
        {
          imgCenter: "url(Images/Illustrations/resort1.jpg)",
        },
        {
          imgCenter: "url(Images/Illustrations/resort2.jpg)",
        },
        {
          imgCenter: "url(Images/Illustrations/resort3.jpeg)",
        },
        {
          imgCenter: "url(Images/Illustrations/resort4.jpeg)",
        },
        {
          imgCenter: "url(Images/Illustrations/resort1.jpg)",
        },
        {
          imgCenter: "url(Images/Illustrations/resort2.jpg)",
        },
        {
          imgCenter: "url(Images/Illustrations/resort2.jpg)",
        },
        {
          imgCenter: "url(Images/Illustrations/resort3.jpeg)",
        },
        {
          imgCenter: "url(Images/Illustrations/resort4.jpeg)",
        },
      ];

  return (
    <Container className="">
      <Row className="centers-row">
        <Col>
          <h3 className="fs-3 mb-5 mt-5 text-center">All Centers</h3>
        </Col>
      </Row>
      <Row className="centers-row">
        {centerList.map((element, index) => {
          return (
            <Col md={6} lg={4} key={index}>
              <SingleCenter imgCenter={element.imgCenter} />
            </Col>
          );
        })}
      </Row>
      <Row className="centers-row">
        <Col className="d-flex justify-content-end mb-5">
          <button type="button" className="btn fig-read-more">
            View More..
          </button>
        </Col>
      </Row>
    </Container>
  )
}

export default AllCenters
