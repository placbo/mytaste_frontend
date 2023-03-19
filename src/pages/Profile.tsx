import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { auth } from '../firebase';
//import Button from '@material-ui/core/Button';
//import { toast } from 'react-toastify';
import { onAuthStateChanged } from 'firebase/auth';

const UserAvatar = styled.img`
  height: 200px;
  max-width: 200px;
  margin: 2rem 0;
  border-radius: 50%;
`;

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
`;

const Divider = styled.div`
  width: 80%;
  border-top: 1px solid ${(props) => props.theme.separator};
  margin: 2rem 0 2rem 0;
`;

export const Profile = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<any>(null);

  const signOut = () => {
    console.log('not implemented');

    // app
    //   .auth()
    //   .signOut()
    //   .then(() => history.push('/'))
    //   .catch(() => toast.error('Could not log out'));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        console.log('user is logged out');
      }
    });
  }, []);

  return (
    <>
      <StyledPage>
        {currentUser && (
          <>
            <UserAvatar src={currentUser.photoURL} />
            <h3>{currentUser.displayName}</h3>
            <Divider />
            <button onClick={signOut}>Log out</button>
          </>
        )}
      </StyledPage>
    </>
  );
};
