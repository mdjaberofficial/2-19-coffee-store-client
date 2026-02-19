import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData);
        // console.log(newCoffee);
            // send data to the server
            fetch('http://localhost:3000/addCoffee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCoffee)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    //SweetAlert2
                    Swal.fire({
                    title: "Coffee Added Successfully!",
                    icon: "success",
                    draggable: true
                    });
                    
                    form.reset();
                }
                
            })
            .catch(error => {
                console.log('error', error);
            })
            
    }

    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className="text-6xl">Add New Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                <label className="label">Name</label>
                <input name='name' type="text" className="input w-full" placeholder="Enter coffee name" />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                <label className="label">Quantity</label>
                <input name='quantity' type="text" className="input w-full" placeholder="Enter coffee quantity " />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                <label className="label">Supplier</label>
                <input name='supplier' type="text" className="input w-full" placeholder="Enter coffee supplier" />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                <label className="label">Taste</label>
                <input name='taste' type="text" className="input w-full" placeholder="Enter coffee taste" />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                <label className="label">Price</label>
                <input name='price' type="text" className="input w-full" placeholder="Enter coffee price" />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                <label className="label">Details</label>
                <input name='details' type="text" className="input w-full" placeholder="Enter coffee details" />
                </fieldset>
                </div>
                <div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6">
                <label className="label">Photo</label>
                <input name='photo' type="text" className="input w-full" placeholder="Enter photo URL" />
                </fieldset>
                </div>
                <input className='btn w-full' type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;