//import googleLoginButton from '../assets/btn_google_signin_dark_normal_web.png';
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

  return (
    <StyledPageWrapper>
      <button>
        {/* <img
          src={}
          alt="google-login-button"
          onClick={() => {
            console.log('not implemented');
          }}
        /> */}
      </button>
    </StyledPageWrapper>
  );
};
