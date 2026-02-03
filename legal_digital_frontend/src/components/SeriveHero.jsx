import image from "../assets/giammarco-boscaro-OPzWvgL-upY-unsplash.jpg"



function SeriveHero() {
  
     return(
            <>
                <div className="bg-blue-500 relative">
    
                <img src={image} alt="Services Image" className="w-full h-100 object-cover"/>
    
                <h1 className="absolute text-6xl top-60 left-20 font-extrabold text-white">SERVICES</h1>
                </div>
                
            </>
           
        )
}

export default SeriveHero;