import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const {name, quantity, supplier, taste, price, details, photo, _id} = useLoaderData();

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData);
        // console.log(updatedCoffee);
           
        // send data to the server
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
                });
                form.reset();
            } else {
                alert('Failed to update the coffee.');
            }

        })
        .catch(error => {
            console.log('error', error);
        })  
             
        
        
    }

    return (
        <div>
            <h2>Update Coffee</h2>
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className="text-6xl">Update Coffee</h1>
                
            </div>
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                <label className="label">Name</label>
                <input name='name' defaultValue={name} type="text" className="input w-full" placeholder="Enter coffee name" />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                <label className="label">Quantity</label>
                <input name='quantity' defaultValue={quantity} type="text" className="input w-full" placeholder="Enter coffee quantity " />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                <label className="label">Supplier</label>
                <input name='supplier' defaultValue={supplier} type="text" className="input w-full" placeholder="Enter coffee supplier" />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                <label className="label">Taste</label>
                <input name='taste' defaultValue={taste} type="text" className="input w-full" placeholder="Enter coffee taste" />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                <label className="label">Price</label>
                <input name='price' defaultValue={price} type="text" className="input w-full" placeholder="Enter coffee price" />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                <label className="label">Details</label>
                <input name='details' defaultValue={details} type="text" className="input w-full" placeholder="Enter coffee details" />
                </fieldset>
                </div>
                <div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6">
                <label className="label">Photo</label>
                <input name='photo' defaultValue={photo} type="text" className="input w-full" placeholder="Enter photo URL" />
                </fieldset>
                </div>
                <input className='btn w-full' type="submit" value="Update Coffee" />
            </form>
        </div>
        </div>
    );
};

export default UpdateCoffee;