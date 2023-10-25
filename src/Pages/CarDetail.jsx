import { useLoaderData } from "react-router-dom";
import StarRating from "../components/StarRating";


const CarDetail = () => {
  
  const car = useLoaderData()
  const {img, name, brandName, type, price, shortDescription, rating} =car;
 

  return (
    <div className="flex flex-col sm:flex-row  justify-center items-center font-poppins">

      <div className="sm:w-2/3"><img src={img} alt="" /></div>

      <div className="flex-1 text-center sm:text-left p-4 space-y-3">
        <p className="text-2xl text-white">{name}</p>
        <p className="">{type}</p>
        <div className="flex justify-between items-center text-lg text-white"><p>Price: {price}$</p>
        <StarRating rating={rating}></StarRating></div>
        <p>{shortDescription}</p>

        
        <button className="text-white hover:text-secondary border-2 py-2 px-3 hover:border-secondary ">Add to Cart</button>
        
        

      </div>

    </div>
  );
};

export default CarDetail;
