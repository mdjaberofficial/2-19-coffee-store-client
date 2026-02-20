import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {
    const {createUser} = use(AuthContext); 

    console.log(createUser);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const {email, password, ...restFormData} = Object.fromEntries(formData);

       
        
        console.log(email, password, restFormData);


       

        // create user with firebase
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);

             const userProfile = {
                email,
                ...restFormData,
                creationTime: result.user?.metadata?.creationTime,
                lastSignInTime: result.user?.metadata?.lastSignInTime,

                
        }

            //save profile info to database
            fetch('https://2-19-coffee-store-server-v1.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userProfile)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
        })
        .catch(error => {
            console.log(error);
        })
        // form.reset();
        
       
    }
    return (
        <div>                
            <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Name</label>
                    <input name='name' type="text" className="input" placeholder="Name" />
                    <label className="label">Address</label>
                    <input name='address' type="text" className="input" placeholder="Address" />
                    <label className="label">Phone</label>
                    <input name='phone' type="text" className="input" placeholder="Phone" />
                    <label className="label">Photo URL</label>
                    <input name='photoURL' type="text" className="input" placeholder="Photo URL" />
                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;