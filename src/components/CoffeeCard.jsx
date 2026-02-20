import React from 'react';
import { Link } from 'react-router';

import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { name, price, photo,quantity, _id:id } = coffee;

    const handleDelete = (id) => {
        // console.log('delete', id);
        
        //sweet alert2
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {

        if (result.isConfirmed) {
            // send delete request to the server
            fetch(`https://2-19-coffee-store-server-v1.vercel.app/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    //remove the deleted coffee from the UI
                    const remaining = coffees.filter(cof => cof._id !== id);
                    setCoffees(remaining);
                }
            })
            .catch(error => {
                console.error('Error deleting coffee:', error);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to delete the coffee.",
                    icon: "error"
                });
            });
            //     });
            
        }
        });
       

    }
    return (
        <div className="card card-side bg-base-100 shadow-sm border-2">
  <figure>
    <img
      src={photo}
      className="rounded-xl"
      alt="Movie" />
  </figure>
  <div className="flex mt-8 w-full justify-around">
    <div className='space-y-1'>
        <h2 className="">{name}</h2>
        <p>Price: $ {price}</p>
        <p>Quantity: {quantity}</p>
    </div>
   
    <div className="card-actions justify-end">
      <div className="join join-vertical space-y-2">
        <Link className="btn join-item" to={`/coffeeDetails/${id}`}>View</Link>
        <Link className="btn join-item" to={`/update-coffee/${id}`}>Edit</Link>
        <button onClick={() => handleDelete(id)} className="btn join-item">Delete</button>
        </div>
    </div>
  </div>
</div>
    );
};

export default CoffeeCard;