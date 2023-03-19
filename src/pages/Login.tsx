import googleLoginButton from '../assets/btn_google_signin_dark_normal_web.png';
import { auth, provider } from '../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 100%;
  color: red;
`;

export const LoginPage = () => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential ? credential.accessToken : '';
        const user = result.user;
        console.log(user.email);
        navigate('/');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
      });
  };

  return (
    <StyledPageWrapper>
      <button>
        <img
          src={googleLoginButton}
          alt="google-login-button"
          onClick={() => {
            signInWithGoogle();
          }}
        />
      </button>
    </StyledPageWrapper>
  );
};
