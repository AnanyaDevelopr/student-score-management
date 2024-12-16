import Cookies from "universal-cookie";
import { pageStore } from "./store";
import { PageActionTypes } from "./pageReducer";

export const setCookie = (name, value, seconds) => {
  const date = new Date();
  date.setTime(date.getTime() + seconds * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};domain=.${window.location.hostname};HostOnly;Secure;SameSite=none;path=/`;
};

const setAuthCookie = (name, value, days) => {
  // Number of days until expiration
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Convert days to milliseconds
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};domain=.${window.location.hostname};HostOnly;Secure;SameSite=none;path=/`;

  pageStore.dispatch({
    type: PageActionTypes.isLoggedIn,
    payload: {
      isLoggedIn: value,
    },
  });
};
export default setAuthCookie;
//getCookie
export const getCookie = (name) => {
  let cookies = new Cookies();
  let cookieData = cookies.get(name);
  return cookieData;
};
// getCookie
export const deleteCookie = (name) => {
  let cookies = new Cookies();
  cookies.remove(name);
};
