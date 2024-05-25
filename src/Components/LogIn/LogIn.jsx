import { GithubAuthProvider, GoogleAuthProvider, getAuth , signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.init'
import { useState } from "react";

const LogIn = () => {
    const [logInUser,setLogInUser ] = useState(null)
    const auth = getAuth(app)
    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();
    const handleGoogleSingIn= () =>{
         signInWithPopup(auth , GoogleProvider)
         .then ( result => {
            const userGoogle = result.user;
            console.log(userGoogle)
            setLogInUser(userGoogle)
         })
         .catch(error =>{
            console.log(error , error.massage)
         })
    }

    const handleGithubSingIn = () =>{
           signInWithPopup(auth , GithubProvider)

           .then (result =>{
             const userGithub = result.user
             console.log(userGithub)
             setLogInUser(userGithub)
           })
           .catch(error =>{
            console.log(error)
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
                logInUser ?  
                <button onClick={handleSingOut}>Sing Out</button> : 
                <div>
                    <button onClick={handleGoogleSingIn}>Log in google</button>
                    <button onClick={handleGithubSingIn}>Log in Github</button>
                </div>
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