



function ServiceModels({model}){






    return(
        
            <div className="h-140 w-70 border border-gray-300 bg-white rounded-2xl shadow-md">
                <div className="h-fit w-fit bg-gray-300 p-4 ml-7 mt-5 rounded-4xl">

                <img src={model.image} alt={model.title} className="size-7" />
                </div>
                    
                <h3 className="text-lg font-semibold  p-1 ml-7">{model.title}</h3>
                <p className="text-sm text-gray-500 ml-7">{model.description}</p>
                <div className=" ml-7 mt-5">

                {model.features.map((feature,index)=>feature.disabled?<p className="line-through text-gray-500 p-2">✓ {feature.name}</p>:<p className="text-black p-2">✓ {feature.name}</p>)}
                </div>
                
            </div>




            
      
    )
}
export default ServiceModels;