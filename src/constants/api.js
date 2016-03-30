export let SERVER = () => {
  return window.API_PATH;
};

export let ROUTES = {
  USER: {
    LOGIN: '/user/login'
  },
  MEME:  {
    FIND: '/meme/all'
  }
};