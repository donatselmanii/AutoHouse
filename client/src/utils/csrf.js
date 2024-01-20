import axios from 'axios';

axios.defaults.withCredentials = true;

axios.interceptors.request.use((config) => {
  config.headers['X-XSRF-TOKEN'] = getCsrfTokenFromCookies();
  return config;
});

function getCsrfTokenFromCookies() {
  const cookieValue = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith('XSRF-TOKEN='))
    ?.split('=')[1];
  return cookieValue;
}

export default axios;
