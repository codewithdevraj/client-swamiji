// src/components/Chat.js
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import verifyUser from "../../middlewares/auth"; // Import middleware
import "./chat.css";

const Chat = () => {
  const chatRef = useRef(null); // Reference for chatbot container
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUserAndLoadChatbot = async () => {
      const verified = await verifyUser(navigate); // Verify user
      if (verified) {
        setIsLoading(false); // Stop loading if verified
        loadChatbot(); // Load chatbot
      }
    };

    const loadChatbot = () => {
      const v = document.createElement("script");
      v.type = "text/javascript";
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      const s = document.getElementsByTagName("script")[0];

      v.onload = function () {
        window.voiceflow.chat
          .load({
            verify: { projectID: "670ac09d16b3c8f70b3303e9" },
            url: "https://general-runtime.voiceflow.com",
            versionID: "production",
            render: {
              mode: "embedded", // Embed chatbot in specific div
              target: chatRef.current, // Use chatRef div as the target
            },
            autostart: true, // Start chat automatically
          })
          .then(() => {
            console.log("Chatbot loaded successfully.");
          });
      };

      s.parentNode.insertBefore(v, s);
    };

    checkUserAndLoadChatbot(); // Verify user and load chatbot
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>; // Display loading screen until verification is complete
  }
  

  return (
    <main className="chat-container">
      <div ref={chatRef} className="chatbot-embed" />
    </main>
  );
};

export default Chat;
