import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";



const UpdateCar = () => {

    const car = useLoaderData()
    console.log(car);
    const {img, name, brandName, type, price, shortDescription, rating} =car;
    


    const handleUpdateCar = event =>{
        event.preventDefault();
        const form = event.target;

        const img = form.imageUrl.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;

        const updatedCar = {img, name, brandName, type, price, shortDescription, rating}
        console.log(updatedCar);

        // send data to server
        fetch(`http://localhost:5000/cars/${car._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCar)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount){
              toast.success('Car updated successfully')
            }
        })

        
    
    }
    



    return (
         <div className="flex flex-col sm:flex-row justify-between items-center mt-10">

            <div className="text-white flex-1 text-8xl sm:text-9xl font-poppins font-semibold text-left border-b-2 sm:border-b-0 sm:border-r-2 ">Update <br /> Car <br /> Info</div>

<form onSubmit={handleUpdateCar} className="flex-1 p-6 font-poppins">
    <p className="text-white font-medium mb-1">Image URL</p>
      <input
        type="text"
        name="imageUrl"
        placeholder="image.jpg"
        defaultValue={img}
        className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
        required
      /> <br />
      <p className="text-white font-medium mb-1">Name</p>
      <input
        type="text"
        name="name"
        placeholder="Tesla model x"
        defaultValue={name}
        className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
        required
      /> <br />
      <p className="text-white font-medium mb-1">Brand Name</p>
      <select
        name="brandName"
        defaultValue={brandName}
        className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
        required
      >
        <option value="Nissan">Nissan</option>
        <option value="Honda">Honda</option>
        <option value="BMW">BMW</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Tesla">Tesla</option>
        <option value="Chevrolet">Chevrolet</option>
      </select> <br />
      <p className="text-white font-medium mb-1">Type</p>
      <input
        type="text"
        name="type"
        placeholder="Hatchback"
        defaultValue={type}
        className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
      /> <br />
      <p className="text-white font-medium mb-1">Price</p>
      <input
        type="number"
        name="price"
        placeholder="20000$"
        defaultValue={price}
        className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
      /> <br />
      <p className="text-white font-medium mb-1">Short Description</p>
      <input
        type="text"
        name="shortDescription"
        placeholder="About this car"
        defaultValue={shortDescription}
        className="py-2 px-2 rounded-md w-full h-20 focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
      /> <br />
      <p className="text-white font-medium mb-1">Rating</p>
      <input
        type="number"
        name="rating"
        placeholder="4.5"
        defaultValue={rating}
        className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
      /> <br />

      <button type="submit" className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">Submit</button>
    </form>           
        </div>
    );
};

export default UpdateCar;