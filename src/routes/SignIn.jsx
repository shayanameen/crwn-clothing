import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../utils/firebase';

import SignUpForm from '../components/SignUpForm';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
