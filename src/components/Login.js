import firebase from 'firebase/app'
import {useNews} from '../context/NewsProvider'
import Button from "@material-ui/core/Button";
const Login = () => {
    const provider=new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({prompt:'select_account'})

    const {signInWithGoogle}=useNews();

    const submitHandler=()=>{
        signInWithGoogle(provider)
    }

    return (
        <div>
            <Button
        variant="contained"
        color="secondary"
        onClick={submitHandler}
          >
          Sign In
          </Button>
        </div>
    )
}

export default Login
