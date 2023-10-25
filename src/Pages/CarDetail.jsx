import { useLoaderData } from "react-router-dom";
import StarRating from "../components/StarRating";


const CarDetail = () => {
  
  const car = useLoaderData()
  const {img, name, brandName, type, price, shortDescription, rating} =car;
 

  return (
    <div>
      <div><img src={img} alt="" /></div>
      <div>
        <p>{name}</p>
        <p>{name}</p>
        <p>Price: {price}$</p>
        <StarRating rating={rating}></StarRating>
        <p>{shortDescription}</p>
      </div>
    </div>
  );
};

export default CarDetail;
