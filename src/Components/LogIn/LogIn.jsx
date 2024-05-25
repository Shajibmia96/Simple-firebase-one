
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../../Firebase/Firebase.init";

const LogIn = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSingIn = ()=>{
            console.log('hello google mama')
    }
    return (
        <div>
              <button onClick={handleGoogleSingIn}>Log in With google</button>
        </div>
    );
};

export default LogIn;