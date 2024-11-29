
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation"
import Footer from "./components/Footer/Footer"
import HomePage from "./pages/HomePage"
import Contact from "./pages/Contact"
import About from "./pages/About"
import BlogPage from "./pages/BlogPage"


function App() {
 

  return (
    <>
    <Navigation/>
    <Routes>
       <Route path='/nutracare_frontend_main/' element= {<HomePage/>}/>
       <Route path='/nutracare_frontend_main/contact' element= {<Contact/>}/>
       <Route path='/nutracare_frontend_main/about' element= {<About/>}/>
       <Route path='/nutracare_frontend_main/blogs' element= {<BlogPage/>}/>
       {/* <Route path='/search-selection' element= {<SearchSelection/>}/>
       <Route path='/selection-all-centers' element= {<SelectionAllCenters/>}/>
       <Route path='/professional-info' element= {<ProfessionalInfo/>}/> */}
    </Routes>
    <Footer/>
    </>
  )
}

export default App
