import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/Firebase';


const SignIn = () => {
  const loginWithGoogle = async () => { 
    const {user} = await signInWithGooglePopup();
   const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={loginWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export default SignIn