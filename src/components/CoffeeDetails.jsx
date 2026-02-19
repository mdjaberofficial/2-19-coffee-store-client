import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const loadedCoffee = useLoaderData();
    return (
        <div>
            <img src={loadedCoffee.photo} alt={loadedCoffee.name} />
            <h2 className="text-2xl font-bold">{loadedCoffee.name}</h2>
            <p>Price: ${loadedCoffee.price}</p>
            <p>Quantity: {loadedCoffee.quantity}</p>
            <p>Supplier: {loadedCoffee.supplier}</p>
            <p>Taste: {loadedCoffee.taste}</p>
            <p>Details: {loadedCoffee.details}</p>
        </div>
    );
};

export default CoffeeDetails;