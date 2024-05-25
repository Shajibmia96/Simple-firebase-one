import { GoogleAuthProvider, getAuth , signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.init'
import { useState } from "react";

const LogIn = () => {
    const [logInUser,setLogInUser ] = useState(null)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const handleGoogleSingIn= () =>{
         signInWithPopup(auth , provider)
         .then ( result => {
            const user = result.user;
            console.log(user)
            setLogInUser(user)
         })
         .catch(error =>{
            console.log(error , error.massage)
         })
    }

    const handleSingOut = () =>{
        signOut(auth)
        .then(result =>{
            console.log(result)
            setLogInUser(null)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
              {
                logInUser ?  <button onClick={handleSingOut}>Sing Out</button> : <button onClick={handleGoogleSingIn}>Log in google</button>
              }
            {
                logInUser && <div>
                       <h1>User Name : {logInUser.displayName}</h1>
                       <p>Email : {logInUser.email}</p>
                       <img src={logInUser.photoURL} alt="" />
                </div>
            }
            
             
            
        </div>
    );
};

export default LogIn;