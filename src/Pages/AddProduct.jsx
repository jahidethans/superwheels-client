

const AddProduct = () => {

    const handleAddCar = event =>{
        event.preventDefault();
        const form = event.target;

        const img = form.imageUrl.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;

        const newCar = {img, name, brandName, type, price, shortDescription, rating}
        console.log(newCar);

        // send data to server
        fetch('http://localhost:5000/cars',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    } 


    return (
        <div className="flex flex-col sm:flex-row justify-between items-center mt-10">

            <div className="text-white flex-1 text-9xl font-poppins font-semibold text-left border-b-2 sm:border-b-0 sm:border-r-2">Add <br /> a <br /> Car</div>

<form onSubmit={handleAddCar} className="flex-1 p-6 font-poppins">
    <p className="text-white font-medium mb-1">Image URL</p>
      <input
        type="text"
        name="imageUrl"
        placeholder="image.jpg"
        className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
        required
      /> <br />
      <p className="text-white font-medium mb-1">Name</p>
      <input
        type="text"
        name="name"
        placeholder="Tesla model x"
        className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
        required
      /> <br />
      <p className="text-white font-medium mb-1">Brand Name</p>
      <select
        name="brandName"
        className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
        required
      >
        <option value="a">Nissan</option>
        <option value="b">Honda</option>
        <option value="c">BMW</option>
        <option value="d">Mercedes</option>
        <option value="e">Tesla</option>
        <option value="f">Chevrolet</option>
      </select> <br />
      <p className="text-white font-medium mb-1">Type</p>
      <input
        type="text"
        name="type"
        placeholder="Hatchback"
        className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
      /> <br />
      <p className="text-white font-medium mb-1">Price</p>
      <input
        type="number"
        name="price"
        placeholder="20000$"
        className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
      /> <br />
      <p className="text-white font-medium mb-1">Short Description</p>
      <input
        type="text"
        name="shortDescription"
        placeholder="About this car"
        className="py-2 px-2 rounded-md w-full h-20 focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
      /> <br />
      <p className="text-white font-medium mb-1">Rating</p>
      <input
        type="number"
        name="rating"
        placeholder="4.5"
        className="py-2 px-2 rounded-md w-full focus:outline-none focus:ring focus:border-secondary focus:bg-white mb-4"
      /> <br />

      <button type="submit" className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">Submit</button>
    </form>           
        </div>
    );
};

export default AddProduct;