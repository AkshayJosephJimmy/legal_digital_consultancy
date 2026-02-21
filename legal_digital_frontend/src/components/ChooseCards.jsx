



function ChooseCards({feature}) {







return(
    <div className="h-70 w-50 bg-neutral-100 rounded-4xl hover:translate-y-2 transition-all duration-300 ">
        <h3 className="text-2xl font-bold text-center p-4">{feature.title}</h3>
        
        <p className="text-center p-3">{feature.description}</p>
        
    </div>
)



}
export default ChooseCards;