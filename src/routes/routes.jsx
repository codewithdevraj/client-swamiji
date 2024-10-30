import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate
} from "react-router-dom";

import Authpage from "../pages/authpage";
import Chat from "../pages/bot/chat";

const Routemain = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={ <Authpage /> } />
        <Route path="/" element={ <Chat /> } />
        <Route path="*" element={
          <div style={ {
            display: "flex", justifyContent: "center", alignItems: "center",
            height: "100vh"
          } }
          >
            <h1>404 Not Found</h1>
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default Routemain;