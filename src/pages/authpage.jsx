import { useState } from "react";
import Login from "./auth/login";
import Register from "./auth/signup";
import { ToastContainer } from "react-toastify";

const Authpage = () => {
  const [showLogin, setShowLogin] = useState( true );
  
  const toggleForm = () => {
    setShowLogin( !showLogin );
  };

  return (
    <div className="formbody">
      <div className="container">
        <div className="heading">
          <h2>Welcome to the</h2>
          <h1>Chidanand AI</h1>
        </div>
        { showLogin ? (
          <Login toggleForm={ toggleForm } />
        ) : (
          <Register toggleForm={ toggleForm } />
        ) }
        <div className="copyright">
          <p>&copy; 2023 Chidanand AI. All rights reserved.</p>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={ 4500 } />{ " " }
      {/* ToastContainer for displaying toasts */ }
    </div>
  );
}

export default Authpage;