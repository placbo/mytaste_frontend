import { ITEMS_URL, USE_MOCK_DATA } from '../constants';
import { axiosGetHandler } from './apiUtils';
import { Dispatch, SetStateAction } from 'react';
import { ItemsResponse } from '../types.js';

// console.log(process.env.REACT_APP_MOCK_API);

// export const getItem = (id) => {
//   if (process.env.REACT_APP_MOCK_API === "true") {
//     return new Promise((resolve) => {
//       console.log("Mock retrieving item");
//       let MOCK_DATA = {
//         id: "2oS3BIojyckicgzOhXoS",
//         title: "Ostepop fra Ostepopfabrikken(TM)",
//         comment: "Knallgod ostepot, litt mye løksmak.",
//         tags: "fdsfds,fdgfdg,gdfgdf",
//         image:
//           "https://brands-b.prod.onewp.net/app/uploads/sites/44/2019/08/cheez-chruncherz-600x600.png",
//         ratings: {
//           "perbjester@gmail.com2": 5,
//           "nr@unit.no": 2,
//         },
//         averageRating: 0,
//         averageRatingCount: 2,
//       };
//       resolve(MOCK_DATA);
//     });
//   } else {
//     const itemCollection = collection(db, ITEM_COLLECTION_NAME);

//     const itemSnapshot = await getDocs(itemCollection);
//     const list = itemSnapshot.docs.map(doc => doc.data());
//     return list;

//       .doc(id)
//       .get()
//       .then((doc) => {
//         // return {
//         //   ...doc.data(),
//         //   id: doc.id,
//         // };
//       });
//   }
// };

// export const getPersons = async (
//   max: number,
//   showcommunities: boolean,
//   setError: any,
//   setLoading: Dispatch<SetStateAction<boolean>>
// ) => {
//   return axiosGetHandler(
//     `${PERSONS_URL}?${SORT_PARAM}=${SORT_DESCENDING}&${SHOW_COMMUNITIES_PARAM}=${showcommunities}&${NUMBER_PR_PAGE_PARAM}=${max}`,
//     setError,
//     setLoading
//   );
// };

export const getAllItems = (setError?: any, setLoading?: Dispatch<SetStateAction<boolean>>): Promise<ItemsResponse> => {
  if (USE_MOCK_DATA) {
    return new Promise((resolve) => {
      console.log('Mock retrieving list');
      let MOCK_DATA = [
        {
          id: '1oS3BIojyckicgzOhXoS',
          title: 'Item 1',
          comment: 'fsdfsdfsdf',
          image: 'https://brands-b.prod.onewp.net/app/uploads/sites/44/2019/08/cheez-chruncherz-600x600.png',
          averageRating: 4,
          averageRatingCount: 12,
        },
        {
          id: 'fsdfsdfsdfsdfsdfs',
          title: 'Item 1.5',
          comment: 'fsdfsdfsdf',
          tags: ['Junkfood', 'Burger'],
          image: 'https://brands-b.prod.onewp.net/app/uploads/sites/44/2019/08/cheez-chruncherz-600x600.png',
        },
        {
          id: 'fsdfsdfsdfsdfsdf2s',
          title: 'Item 1.6',
          comment:
            'fsdfsdfdsfsdsdfjfdks sdfkj fsdkjf sdksdkfj sdkljf sdkljf sdklfj sdklj fsdklj fsdklfj sdk fjsdklfj sdklfj sdklj fsdkljfsdkl gsdklb sd kldsjg sdkg fsdf',
          tags: ['Junkfood', 'Burger'],
          image: 'https://brands-b.prod.onewp.net/app/uploads/sites/44/2019/08/cheez-chruncherz-600x600.png',
          ratings: {
            'perbjester@gmail.com': null,
          },
          averageRating: null,
          averageRatingCount: 0,
        },
        {
          id: '2oS3BIojyckicgzOhXoS',
          title: 'Item 2',
          comment: 'jadda',
          image: 'https://brands-b.prod.onewp.net/app/uploads/sites/44/2019/08/cheez-chruncherz-600x600.png',
          averageRating: null,
          averageRatingCount: 423,
        },
        {
          id: '3oS3BIojyckicgzOhXoS',
          title: 'Item 3',
          comment: 'joda',
          image: 'https://brands-b.prod.onewp.net/app/uploads/sites/44/2019/08/cheez-chruncherz-600x600.png',
          averageRating: 5,
          averageRatingCount: 1,
        },
      ];
      resolve(MOCK_DATA);
    });
  } else {
    return axiosGetHandler(ITEMS_URL, setError, setLoading);
  }
};

// export const updateItem = (item) => {
//   if (process.env.REACT_APP_MOCK_API === "true") {
//     return new Promise((resolve) => {
//       console.log("MOCING SAVE (UPDATE) FOR ITEM : ", item);
//       resolve();
//     });
//   } else {
//     return firebase
//       .firestore()
//       .collection(ITEM_COLLECTION_NAME)
//       .doc(item.id)
//       .set(item);
//   }
// };

// export const addItem = (item) => {
//   if (process.env.REACT_APP_MOCK_API === "true") {
//     return new Promise((resolve) => {
//       console.log("MOCING SAVE (ADD) FOR ITEM : ", item);
//       resolve();
//     });
//   } else {
//     return firebase.firestore().collection(ITEM_COLLECTION_NAME).add(item);
//   }
// };

// export const deleteItem = (id) => {
//   if (process.env.REACT_APP_MOCK_API === "true") {
//     return new Promise((resolve) => {
//       resolve();
//     });
//   } else {
//     return firebase
//       .firestore()
//       .collection(ITEM_COLLECTION_NAME)
//       .doc(id)
//       .delete();
//   }
// };
