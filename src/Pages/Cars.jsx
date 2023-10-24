import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CarBrands from "../components/CarBrands";

const Cars = () => {

    const [brand, setBrand] = useState(null);
    
    const { id } = useParams();
    console.log(id);
    const brands = useLoaderData();
    


    useEffect(()=>{
        const findbrand = brands?.find(brand=>brand.id == id)
        setBrand(findbrand);
    },[id, brands])

   

      // If brand is not loaded yet, display a loading message
  if (!brand) {
    return <div>Loading...</div>;
  }

  return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={brand.bannerOne} className="w-full object-cover " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={brand.bannerTwo} className="w-full object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={brand.bannerThree} className="w-full object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>

 

    <div> <CarBrands brand={brand}></CarBrands> </div>

                  
        </div>
    );
};

export default Cars;