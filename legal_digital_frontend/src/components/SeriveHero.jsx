



function SeriveHero() {
  const image = "/serviceHero.jpg";
     return(
            <>
                <div className=" relative mt-20">
    
                <img src={image} alt="Services Image" className="w-full h-100 object-cover"/>
    
                <h1 className="absolute text-6xl top-60 left-20 font-extrabold text-neutral-300">SERVICES</h1>
                </div>
                
            </>
           
        )
}

export default SeriveHero;