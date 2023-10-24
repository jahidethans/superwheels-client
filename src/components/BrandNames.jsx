import { useState } from "react";
import { useEffect } from "react";
import BrandName from "./BrandName";


const BrandNames = () => {

    const [brands, setBrands] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setBrands(data))
    },[])
    
   

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3c gap-4">
            {
                brands.map(brand=> <BrandName key={brand.id} brand={brand}></BrandName>)
            }
        </div>
    );
};

export default BrandNames;