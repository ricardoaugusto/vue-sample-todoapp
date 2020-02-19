export default {
  get(key) {
    return localStorage.getItem(key) ? localStorage.getItem(key) : null;
  },

  set(key, value) {
    localStorage.setItem(key, value);
  },

  remove(key) {
    localStorage.removeItem(key);
  }
};
