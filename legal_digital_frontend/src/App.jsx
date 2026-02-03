import Header from "./components/header"
import HomeHero from "./components/HomeHero"
import Home from "./components/Home.jsx"
import Footer from "./components/Footer.jsx"
import { BrowserRouter, Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Services from "./components/Services.jsx"



function App(){




  return( 
    <BrowserRouter>
      <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
  
     
      
     </Routes>
      <Footer/>
    
    </BrowserRouter>  
  )
}
export default App