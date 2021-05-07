export const getFriendsData = (state) => {
  return state.friends.friendsData;
};
export const getPageSize = (state) => {
  return state.friends.pageSize;
};
export const getTotalCount = (state) => {
  return state.friends.totalCount;
};
export const getCurrentPage = (state) => {
  return state.friends.currentPage;
};
export const getIsFetching = (state) => {
  return state.friends.isFetching;
};
export const getInProgress = (state) => {
  return state.friends.inProgress;
};
