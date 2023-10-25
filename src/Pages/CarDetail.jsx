import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CarDetail = () => {
  const { id } = useParams(); // Get the car ID from the URL parameter
  const [car, setCar] = useState(null);

  useEffect(() => {
    // Fetch the car data by its ID
    fetch(`http://localhost:5000/cars/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCar(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  return (
    <div>
      {car ? (
        <div>
          <h2>{car.name}</h2>
          <p>Brand: {car.brandName}</p>
          <p>Type: {car.type}</p>
          <p>Price: {car.price}$</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <div>No car found with the specified ID</div>
      )}
    </div>
  );
};

export default CarDetail;
