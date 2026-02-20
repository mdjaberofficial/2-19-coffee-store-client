import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const SignIn = () => {

    const {signInUser} = use(AuthContext)

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const {email, password} = Object.fromEntries(formData);

        //firebase sign in send
        signInUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);

            const LastSignInInfo = {
                email,
                lastSignInTime: result.user?.metadata?.lastSignInTime,
            }

            //update last sign in to the database
            fetch(`https://2-19-coffee-store-server-v1.vercel.app/users/`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(LastSignInInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
                

        })
        .catch(error => {
            console.log(error);
        })
        
    }
    return (
        <div>
            <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Sign In now!</h1>
                    <form onSubmit={handleSignIn} className="fieldset">
                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;