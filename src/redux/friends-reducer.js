import { friendsApi } from '../dal/api';

const Actions = {
  FOLLOW: 'FOLLOW',
  UNFOLLOW: 'UNFOLLOW',
  SET_FRIENDS: 'SET_FRIENDS',
  SET_PAGE: 'SET_PAGE',
  FRIENDS_COUNT: 'FRIENDS_COUNT',
  TOGGLE_IS_FETCHING: 'TOGGLE_IS_FETCHING',
  TOGGLE_IN_PROGRESS: 'TOGGLE_IN_PROGRESS',
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
  totalCount: 0,
  error: null,
  pageSize: 4,
  currentPage: 1,
  isFetching: false,
  inProgress: [],
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
    case Actions.FRIENDS_COUNT:
      return {
        ...state,
        totalCount: action.count,
      };
    case Actions.SET_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case Actions.TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case Actions.TOGGLE_IN_PROGRESS:
      return {
        ...state,
        inProgress: action.inProgress
          ? [...state.inProgress, action.userId]
          : state.inProgress.filter((id) => id != action.userId),
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
export const setUsersCountAC = (count) => {
  return {
    type: Actions.FRIENDS_COUNT,
    count,
  };
};
export const setPageAC = (page) => {
  return {
    type: Actions.SET_PAGE,
    page,
  };
};
export const toggleIsFetchingAC = (isFetching) => {
  return {
    type: Actions.TOGGLE_IS_FETCHING,
    isFetching,
  };
};
export const toggleInProgressAC = (inProgress, userId) => {
  return {
    type: Actions.TOGGLE_IN_PROGRESS,
    inProgress,
    userId,
  };
};

export const getFriendsTC = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    friendsApi.getFriends(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetchingAC(false));
      dispatch(setFriendsAC(data.items));
      dispatch(setUsersCountAC(data.totalCount));
    });
  };
};
export const followTC = (friendId) => {
  return (dispatch) => {
    dispatch(toggleInProgressAC(true, friendId));
    friendsApi.follow(friendId).then((data) => {
      if (data.resultCode == 0) {
        dispatch(followAC(friendId));
      }
      dispatch(toggleInProgressAC(false, friendId));
    });
  };
};
export const unfollowTC = (friendId) => {
  return (dispatch) => {
    dispatch(toggleInProgressAC(true, friendId));
    friendsApi.unfollow(friendId).then((data) => {
      if (data.resultCode == 0) {
        dispatch(unfollowAC(friendId));
      }
      dispatch(toggleInProgressAC(false, friendId));
    });
  };
};

export default friendsReducer;
