import { useLoaderData } from "react-router-dom";
import StarRating from "./StarRating";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyCart = () => {

    const cartItems = useLoaderData();
    const { user } = useContext(AuthContext);
    const { email } = user;

    // Initialize usersCart with an empty array
    const [usersCart, setUsersCart] = useState([]);

    // Use useEffect to set the usersCart state
    useEffect(() => {
        // Filter the cartItems based on the user's email and set it to usersCart
        const usercart = cartItems.filter((c) => c.email === email);
        setUsersCart(usercart);
    }, [cartItems, email]);

    if(usersCart.length === 0){
        return <div className="text-center my-28 font-poppins text-4xl"><p className="text-white font-semibold">You haven't chosen anything!</p></div>
    }

    return (
        <div className="container mx-auto font-poppins">
  <h2 className="font-poppins text-3xl font-semibold text-center text-white mt-10">
    You are just <br />
    <span className="text-secondary">one click away to buy your dream.</span>
  </h2>

  {usersCart.map(item => (
    <div key={item._id} className="mt-20 w-full h-28 flex items-center justify-between border-b-2 border-dimWhite pb-3 container mx-auto">
      <div className="w-40 h-24"><img src={item.img} className="object-cover" alt={item.name} /></div>
      <div>
        <h2 className="text-white font-semibold">{item.name}</h2>
        <h2>{item.type}</h2>
        <div className="flex items-center justify-start gap-10">
          <h2 className="text-white">{item.price}$</h2>
          <h2><StarRating rating={item.rating}></StarRating></h2>
        </div>
      </div>
      <div>
        <button className="text-white hover:text-red-400 border-2 py-1 px-2 hover:border-red-400 rounded-md">Remove</button>
      </div>
    </div>
  ))}

  <div className="flex justify-end mt-10">
    <button className="text-black font-medium bg-secondary border-2 py-2 px-3 hover:bg-sky-300 rounded-3xl">Checkout</button>
  </div>
</div>
    );
};

export default MyCart;