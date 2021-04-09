const Actions = {
  FOLLOW: 'FOLLOW',
  UNFOLLOW: 'UNFOLLOW',
  SET_FRIENDS: 'SET_FRIENDS',
};

const initialState = {
  friendsData: [],
  // friendsData: [
  //   {
  //     id: 11,
  //     avatar:
  //       'https://www.shareicon.net/data/512x512/2016/05/26/771189_man_512x512.png',
  //     followed: false,
  //     name: 'Andrew',
  //     status: 'i am looking for a Job right now...',
  //     location: {
  //       country: 'Belarus',
  //       city: 'Minsk',
  //     },
  //   },
  //   {
  //     id: 12,
  //     avatar:
  //       'https://www.shareicon.net/data/512x512/2016/05/26/771191_man_512x512.png',
  //     followed: false,
  //     name: 'Dmitry',
  //     status: 'Hello',
  //     location: {
  //       country: 'Russia',
  //       city: 'Moscow',
  //     },
  //   },
  //   {
  //     id: 13,
  //     avatar:
  //       'https://www.shareicon.net/data/512x512/2016/05/24/770032_people_512x512.png',
  //     followed: false,
  //     name: 'Sasha',
  //     status: 'I like football',
  //     location: {
  //       country: 'Ukrane',
  //       city: 'Kiev',
  //     },
  //   },
  //   {
  //     id: 14,
  //     avatar:
  //       'https://www.shareicon.net/data/512x512/2016/05/24/770139_man_512x512.png',
  //     followed: false,
  //     name: 'Valera',
  //     status: 'I am free to help you to create good Video Production',
  //     location: {
  //       country: 'United States',
  //       city: 'Philadelphia',
  //     },
  //   },
  //   {
  //     id: 15,
  //     avatar:
  //       'https://www.shareicon.net/data/2016/05/24/770117_people_512x512.png',
  //     followed: false,
  //     name: 'Valera',
  //     status: 'Good evening',
  //     location: {
  //       country: 'Poland',
  //       city: 'krakow',
  //     },
  //   },
  // ],
  totalCount: 5,
  error: null,
  pageSize: 4,
  currentPage: 1,
  isFetching: false,
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FOLLOW:
      return {
        ...state,
        friendsData: state.friendsData.map((friend) => {
          if (friend.id === action.id) {
            return { ...friend, followed: true };
          }
          return friend;
        }),
      };

    case Actions.UNFOLLOW:
      return {
        ...state,
        friendsData: state.friendsData.map((friend) => {
          if (friend.id === action.id) {
            return { ...friend, followed: false };
          }
          return friend;
        }),
      };
    case Actions.SET_FRIENDS:
      return {
        ...state,
        friendsData: action.friends,
      };
    default:
      return state;
  }
};

export const followAC = (id) => {
  return {
    type: Actions.FOLLOW,
    id,
  };
};
export const unfollowAC = (id) => {
  return {
    type: Actions.UNFOLLOW,
    id,
  };
};
export const setFriendsAC = (friends) => {
  return {
    type: Actions.SET_FRIENDS,
    friends,
  };
};

export default friendsReducer;
