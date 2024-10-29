import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import verifyUser from "../middlewares/auth";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const verified = await verifyUser(navigate);
      if (verified) {
        setIsLoading(false);
      }
    };

    checkUser();
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  navigate("/chat");

  return null; // Ensure nothing is rendered after redirection
};

export default Homepage;
