import Cookies from "js-cookie";

const getCookieValue = ( name ) => {
  const cookie = Cookies.get( name );
  // console.log( cookie );
  return cookie ?  cookie : null;
};

export default getCookieValue;
