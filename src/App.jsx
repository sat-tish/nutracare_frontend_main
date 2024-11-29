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
       <Route path='/' element= {<HomePage/>}/>
       <Route path='/contact' element= {<Contact/>}/>
       <Route path='/about' element= {<About/>}/>
       <Route path='/blogs' element= {<BlogPage/>}/>
       {/* <Route path='/search-selection' element= {<SearchSelection/>}/>
       <Route path='/selection-all-centers' element= {<SelectionAllCenters/>}/>
       <Route path='/professional-info' element= {<ProfessionalInfo/>}/> */}
    </Routes>
    <Footer/>
    </>
  )
}

export default App
