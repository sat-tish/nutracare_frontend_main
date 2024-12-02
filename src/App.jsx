
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation"
import Footer from "./components/Footer/Footer"
import HomePage from "./pages/HomePage"
import Contact from "./pages/Contact"
import About from "./pages/About"
import BlogPage from "./pages/BlogPage"
import SelectionProfessionalsAll from './components/SelectionProfessionalsAll/SelectionProfessionalsAll';
import SelectionCentersAll from './components/SelectionCentersAll/SelectionCentersAll';
import ProfessionalInfo from './pages/ProfessionalInfo/ProfessionalInfo';


function App() {
 

  return (
    <>
    <Navigation/>
    <Routes>
       <Route path='/nutracare_frontend_main/' element= {<HomePage/>}/>
       <Route path='/nutracare_frontend_main/contact' element= {<Contact/>}/>
       <Route path='/nutracare_frontend_main/about' element= {<About/>}/>
       <Route path='/nutracare_frontend_main/blogs' element= {<BlogPage/>}/>
       <Route path='/nutracare_frontend_main/all_professionals' element= {<SelectionProfessionalsAll/>}/>
       <Route path='/nutracare_frontend_main/all_centers' element= {<SelectionCentersAll/>}/>
       <Route path='/nutracare_frontend_main/professional-info' element= {<ProfessionalInfo/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
