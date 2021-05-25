import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  // headers: { 'API-KEY': 'f97b406a-88ca-4783-98f1-647fa4d66e82' },
  headers: { 'API-KEY': '4ae63362-c114-4db4-a656-1c0e5ba93f20' },
});

export const friendsApi = {
  getFriends(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then((res) => res.data);
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then((res) => res.data);
  },
  follow(id) {
    return instance.post(`follow/${id}`).then((res) => res.data);
  },
};
export const authApi = {
  getMe() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const profileApi = {
  getFriendProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {
      status: status,
    });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  saveProfile(data) {
    return instance.put(`profile`, data);
  },
};
