import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CarBrands = ({ brand }) => {
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:5000/cars')
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        const findCar = data.filter((c) => c.brandName === brand.brandName);
        setCar(findCar);
        setIsLoading(false)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [brand]);
  console.log(car._id);

  if (isLoading) {
    return <div className="font-poppins text-center text-4xl font-semibold mt-5 text-white">Loading...</div>;
  }

  if(car.length === 0){
    return <div className="font-poppins text-center text-4xl font-semibold mt-5 text-white">no cars available...</div>;
  }

  return (
    <div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {car.map((eachCar) => (
            <div key={eachCar._id} className="card card-compact w-72 sm:w-[370px] bg-base-100 shadow-xl rounded-md container mx-auto">
              <figure className="h-[200px]"><img src={eachCar.img} alt="Car" className="object-cover" /></figure>
              <div className="card-body">
                <h2 className="card-title text-white">{eachCar.name}</h2>
                <h2 className="card-title">{eachCar.brandName}</h2>
                <div className="flex justify-between list-none text-white">
                  <li>{eachCar.price} <span>$</span></li>
                  <li className="">{eachCar.type}</li>
                </div>
                <div className="flex justify-between mt-3">
                <h2 className="card-title text-secondary">{eachCar.rating}/<sub className="text-white">5</sub> </h2>
                <div className="card-actions justify-end">
                  <Link to={`/cardetail/${eachCar._id}`} className="btn bg-secondary text-black font-semibold">Detail</Link >
                  <Link to={`/updatecar/${eachCar._id}`} className="btn bg-secondary text-black font-semibold">Update</Link>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
     
    </div>
  );
};

export default CarBrands;
