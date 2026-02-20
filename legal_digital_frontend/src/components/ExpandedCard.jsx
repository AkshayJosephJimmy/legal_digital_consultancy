



 function ExpandedCard({ service, onClose }) {
  return (
    <div className="fixed z-100 inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-lg p-6 rounded-xl relative shadow-xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 text-xl hover:text-black"
        >
          ✕
        </button>

        <h2 className=" text-2xl p-5 lg:text-4xl font-bold mb-2 lg:p-10">{service.title}</h2>
        <p className="text-gray-700  text-lglg:text-2xl mt-2 p-4">{service.description}</p>

        <ul className="list-disc pl-6">
        {service.details.map((detail, index) => (
            <li key={index} className="text-black text-lg lg:text-xl mt-2 lg:p-1">{detail}</li>
        ))}
        </ul>

      </div>
    </div>
  );
}
export default ExpandedCard;
