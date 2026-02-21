




function ServiceCards({service,onClick}) {




    return(
        <div className="bg-neutral-100 h-100 shadow-lg rounded-4xl hover:bg-neutral-500 hover:translate-y-1 transition-all duration-200 w-150 lg:h-80  " onClick={onClick}>

            <h3 className="text-black text-2xl text-center font-semibold p-4 lg:text-4xl ">{service.title}</h3>
            <img src={service.image} alt={service.title} className=" h-15 w-25 mx-auto lg:h-20 lg:w-30 "/>

            <p className="text-black text-center box p-4">{service.description}</p>


           


            



        </div>
    )
}
export default ServiceCards;