import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllItems } from '../api/api.js';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import Header from '../components/Header.js';
import styled from 'styled-components';
import Footer from '../components/Footer.js';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageContent = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
`;

export function ItemList() {
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    getAllItems()
      .then((result) => {
        setItems(result);
      })
      .catch((error) => console.error(error.message));
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
      } else {
        console.log('user is logged out');
      }
    });
  }, []);

  return (
    <ContentWrapper>
      <Header />
      <PageContent>
        {items.map((item: any) => (
          <Link key={item.title} to={'/item/' + item.id}>
            <div>
              <div>{item.image && <img src={item.image} className="card-img-top" alt="image" height={'100px'} />}</div>
              <div>
                <h4>{item.title}</h4>
                {/* <Rating name="simple-controlled" precision={0.5} readOnly value={+item.averageRating} /> */}
                <div>
                  {item.averageRatingCount || '0'} {item.averageRatingCount === 1 ? 'vote' : 'votes'}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </PageContent>
      <Footer />
    </ContentWrapper>
  );
}
