import Cookies from "js-cookie";

const getCookieValue = ( name ) => {
  //set cookie with name as test
  Cookies.set( 'test', 'testValue' );
  //get cookie value
  const cookie = Cookies.get( name );
  console.log( cookie );
  return cookie ?  cookie : null;
};

export default getCookieValue;
