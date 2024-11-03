import axios from "axios";
import getCookieValue from "../utils/cookies";

const serverUrl = import.meta.env.VITE_SERVER;

const verifyUser = async (navigate) => {
  try {
    // const testResponse = await axios.get(
    //   "https://swamijiserver.codewithdevraj.live"
    // );
    // //fetch message from reaturned json
    // const message = testResponse.data.message;
    // alert(message);

    const token = getCookieValue("token");
    const sessionId = getCookieValue("sessionId");

    // console.log("Token:", token);
    // console.log("SessionId:", sessionId);

    if (token && sessionId) {
      const response = await axios.post(
        "https://swamijiserver.codewithdevraj.live/auth/user/verify",
        { sessionId: sessionId },
        {
          headers: { Authorization: `Bearer ${token}` },
          // withCredentials: true,
        }
      );

      if (!response.data.valid) {
        throw new Error("Invalid session or token. Please log in again.");
      }

      return true; // User is verified
    } else {
      throw new Error("No token or sessionId found. Please log in again.");
    }
  } catch (error) {
    // console.error(error);
    navigate("/auth"); // Redirect to login if verification fails
    return false; // User is not verified
  }
};

export default verifyUser;
