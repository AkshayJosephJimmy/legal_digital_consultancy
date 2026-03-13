import Header from "./components/Header.jsx"
import HomeHero from "./components/HomeHero"
import Home from "./components/Home.jsx"
import Footer from "./components/Footer.jsx"
import { BrowserRouter, Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Services from "./components/Services.jsx"
import Team from "./components/Team.jsx"
import ContactUs from "./components/ContactUs.jsx"
import Disclaimer from "./components/legal_pages/Disclaimer.jsx"
import PrivacyPolicy from "./components/legal_pages/PrivacyPolicy.jsx"
import TermsOfService from "./components/legal_pages/TermsOfService.jsx"




function App(){




  return( 
    <BrowserRouter>
      <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/privacy" element={<PrivacyPolicy/>}/>
      <Route path="/terms" element={<TermsOfService/>}/>
      <Route path="/disclaimer" element={<Disclaimer/>}/>

  
     
      
     </Routes>
      <Footer/>
    
    </BrowserRouter>  
  )
}
export default App