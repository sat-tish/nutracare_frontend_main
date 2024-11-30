import './SelectionHome.css'
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const SelectionHome = () => {
    const navigate = useNavigate();
    const cityList = ["Select City",
      "Toronto",	
      "Montréal",	
      "Vancouver",	
      "Ottawa",	
      "Edmonton",	
      "Calgary",
      "Quebéc",	
      "Winnipeg",	
      "Hamilton",	
      "London",
      "Kitchener",	
      "St Catharines",
      "Halifax",	
      "Victoria",	
      "Windsor",	
      "Oshawa",
      "Saskatoon",	
      "Regina",	
      "St John's",
      "Sudbury",
      "Chicoutimi",	
      "Sherbrooke",	
      "Kingston",	
      "Trois-Rivières",	
      "Kelowna",	
      "Abbotsford",	
      "Saint John",	
      "Thunder Bay",
      "Barrie",	
      "Sydney"];
      const allCities = cityList.map((element, index)=>{
        return(
          <option value="" key={index}>{element}</option>
        )
      });
      const categoryList =[
        "Category",
        "Accupressure",
        "Accupuncture",
        "Aromatherapy",
        "Aura soma",
        "Ayurveda",
        "Bioenergetics",
        "Botox",
        "Cheletion therapy",
        "Chiropractor",
        "Coherence therapy",
        "Cupping therapy",
        "EMDR",
        "Homeopathy",
        "Hormone therapy",
        "Hot stone massage",
        "IV nutrient therapy",
        "Laser therapy",
        "Mistletoe therapy",
        "Naturopathy",
        "Neural therapy",
        "Nutritionist",
        "Osteopathy",
        "Ozone therapy",
        "Physiotherapy",
        "Prolotherapy",
        "Psychotherapy",
        "Reflexology",
        "Reiki",
        "Traditional Chinese medicine",
        "Yoga"
       ]
       const categoriesAll = categoryList.map((element,index)=>{
        return(
          <option value="" key={index}>{element}</option>
        )
       })

  return (
    <Container className='selection-input'>
    <Row className='justify-content-center'>
        <Col >
        <div className="mt-4 mb-3">
            <div className=" d-flex flex-wrap ">
            <select name="" id="" className="selection-form sel-form-select mb-2">
                {allCities}
              </select>
              <select name="" id="" className="selection-form sel-form-select mb-2">
                <option value="">Professionals</option>
                <option value="">centers</option>
               
              </select>
              <select name="" id="" className="selection-form sel-form-select mb-2">
                {categoriesAll}
              </select>
                <button className="btn btn-selection-search sel-form-btn mb-2" onClick={()=>navigate('/nutracare_frontend_main/all_professionals')}>Search</button>
            </div>
          </div>
        </Col>
    </Row>
   </Container>
  )
}

export default SelectionHome
