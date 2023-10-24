import { useEffect, useState } from "react";

const CarBrands = ({brand}) => {

    console.log(brand);

    const [cars, setCars] = useState([]);
    const [car, setCar] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cars')
          .then((res) => res.json())
          .then((data) => {
            setCars(data);
            const findCar = data.filter((c) => c.brandName === brand.brandName); // Compare with brand prop
            setCar(findCar);
          })
          .catch((error) => console.error("Error fetching data:", error));
      }, [brand]); // Include brand in the dependency array
    
      
      console.log(car);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
              car.map(eachCar=>
              
              <div key={eachCar._id} className="card card-compact w-72 sm:w-[370px] bg-base-100 shadow-xl rounded-md container mx-auto">
              <figure className="h-[200px]"><img src={eachCar.img} alt="Shoes" className="object-cover" /></figure>
              <div className="card-body">
                <h2 className="card-title text-white">{eachCar.name}</h2>
                <h2 className="card-title">{eachCar.brandName}</h2>
                <div className="flex justify-between  list-none text-white">
                    <li>{eachCar.price} <span>$</span></li>
                    <li className="">{eachCar.type}</li>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn bg-secondary text-black font-semibold">Detail</button>
                  <button className="btn bg-secondary text-black font-semibold">Update</button>
                </div>
              </div>
            </div>
            
            )  
            }
        </div>
    );
};

export default CarBrands;