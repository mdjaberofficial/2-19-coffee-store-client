import React from 'react';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    const { name, price, photo,quantity, _id:id } = coffee;

    const handleDelete = (id) => {
        console.log('delete', id);
        
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

            console.log(result.isConfirmed);
        if (result.isConfirmed) {
            // send delete request to the server
            fetch(`http://localhost:3000/coffees/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log('AFTER DELETE',data);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
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
        <button className="btn join-item">View</button>
        <button className="btn join-item">Edit</button>
        <button onClick={() => handleDelete(id)} className="btn join-item">Delete</button>
        </div>
    </div>
  </div>
</div>
    );
};

export default CoffeeCard;