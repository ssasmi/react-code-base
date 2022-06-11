import axios from 'axios';
axios.defaults.baseURL = 'https://628a38525da6ddfd5d61021f.mockapi.io';

axios.interceptors.request.use(function (req) {
  const user = localStorage.getItem('user');
console.log(user);
  if (user) {
    const { token } = JSON.parse(localStorage.getItem('user'));
    req.headers.authorization = `Bearer ${token}`;
    return req;
  }
  return req;
});
