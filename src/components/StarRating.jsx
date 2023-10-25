import {  AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalf } from "react-icons/fa6";

const StarRating = ({rating}) => {
   
 const ratingStar =   Array.from({length:5}, (elem, index) =>{
       
    let number = index + 0.5;

    return(
        <span key={index}>
            {
                rating >= index + 1 ? <FaStar className="text-yellow-300 w-5 h-5" /> : rating >= number ? <FaStarHalf className="text-yellow-300 w-5 h-5"/> : <AiOutlineStar className="text-yellow-300 w-5 h-5"/>
            }
        </span>
    )


    })

    return (
        <div className="flex my-4">
            {ratingStar}
        </div>
    );
};

export default StarRating;