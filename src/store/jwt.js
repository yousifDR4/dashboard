

export const setToken = (token) => {
  sessionStorage.setItem('jwtToken', token);
};

export const getToken = () => {
  return sessionStorage.getItem('jwtToken');
};

export const removeToken = () => {
  sessionStorage.removeItem('jwtToken');
};