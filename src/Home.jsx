import React, { useState } from "react";
import "./Home.css";
import App from "./App";

function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="App">
      
      <div
        className={`chatbot-button ${isChatOpen ? "active" : ""}`}
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        {isChatOpen ? "✖" : "💬"}
      </div>

      {isChatOpen && (
        <div className="chatbot-container">
          
          <App></App>
          {/* <div className="trademark">Softcrayons Tech Solution pvt. limited</div> */}
        </div>
      )}
    </div>
  );
}

export default Home;
