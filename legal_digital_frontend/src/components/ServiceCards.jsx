




function ServiceCards({service,onClick}) {




    return(
        <div className="h-80 w-150 bg-gray-300 rounded-4xl hover:bg-gray-500 transition-all duration-200" onClick={onClick}>

            <h3 className="text-black text-center text-4xl p-4">{service.title}</h3>
            <img src={service.image} alt={service.title} className="h-20 w-30 mx-auto"/>

            <p className="text-black text-center p-1">{service.description}</p>


            <p className="text-black text-center">learn more</p>


            



        </div>
    )
}
export default ServiceCards;