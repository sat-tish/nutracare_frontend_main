import {useState, useEffect} from 'react'
import axios from 'axios';

import { Container, Row, Col } from 'react-bootstrap';
import SingleBlog from '../commonComponents/SingleBlog/SingleBlog';

const BlogPage = () => {

  const[blogItem, setBlogItem] = useState([]);
  useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res)=>setBlogItem(res.data))
      .catch((err)=>console.log(err))
  },[blogItem]);

return (
<section className='blogpage-bg'>
<Container fluid className='inner-pages-wrapper p-0'>
    <div className='header-all mb-5' style={{backgroundImage:"url(Images/BackgroundImages/b2.jpg)"}}>
    <div className="overlay-header" />
       <Container>
        <Row>
            <Col>
            <h4 className="mt-5 mb-5 text-center">Blogs by our Expert Health Professionals</h4>
            </Col>
        </Row>
    </Container>
    </div>
    <Container className='pt-5 text-center'>
{/* <Row>
    <Col>
      <h4 className='mb-5'>Blogs by our Expert Health Professionals</h4>
      </Col>
 </Row> */}
  <Row>
    {blogItem.map((list, index)=>{
        return(
          <Col md={6} lg={4} xl={3} key={index}>
          <SingleBlog name={list.name} />
          </Col>
        )      
    })}
    
  </Row>
</Container>
</Container>
 
</section>
)
}

export default BlogPage
