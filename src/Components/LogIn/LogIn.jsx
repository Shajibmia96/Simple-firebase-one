import { GoogleAuthProvider, getAuth , signInWithPopup } from "firebase/auth";
import app from '../../Firebase/Firebase.init'

const LogIn = () => {
    const handleGoogleSingIn= () =>{
        const auth = getAuth(app)
        const provider = new GoogleAuthProvider()
         signInWithPopup(auth , provider)
         .then ( result => {
            const user = result.user;
            console.log(user)
         })
         .catch(error =>{
            console.log(error , error.massage)
         })
    }
    return (
        <div>
              <button onClick={handleGoogleSingIn}>Log in google</button>
        </div>
    );
};

export default LogIn;