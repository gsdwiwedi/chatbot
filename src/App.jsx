// import Chatbot from 'react-chatbot-kit';
// import 'react-chatbot-kit/build/main.css';
// import config from './chatbot/config';
// import MessageParser from './chatbot/MessageParser';
// import ActionProvider from './chatbot/ActionProvider';
// import './App.css';
// import { useRef, useEffect } from 'react';

// function App() {
//   const chatbotRef = useRef(null);

//   useEffect(() => {
//     const setupInputListener = () => {
//       const inputElement = document.querySelector('.react-chatbot-kit-chat-input');
//       const sendButton = document.querySelector('.react-chatbot-kit-chat-btn-send');
//       const chatbotButton = document.querySelector('.chatbot-button');
//      const chatbotContainer = document.querySelector('.chatbot-container');

// chatbotButton.addEventListener('click', () => {
//   chatbotButton.classList.toggle('active');
//   chatbotContainer.classList.toggle('hidden');
// });

//       if (inputElement && sendButton) {
//         sendButton.disabled = !inputElement.value.trim();

//         const handleInput = (e) => {
//           sendButton.disabled = !e.target.value.trim();
//         };

//         inputElement.addEventListener('input', handleInput);
//       }
//     };

    
//     setupInputListener();

   
//     const observer = new MutationObserver((mutations) => {
//       mutations.forEach((mutation) => {
//         if (mutation.addedNodes.length) {
//           setupInputListener();
//         }
//       });
//     });

    
//     const chatbotContainer = document.querySelector('.react-chatbot-kit-chat-container');
//     if (chatbotContainer) {
//       observer.observe(chatbotContainer, {
//         childList: true,
//         subtree: true
//       });
//     }

//     // Cleanup
//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div>
//       <div className="App">
//         <Chatbot 
//           ref={chatbotRef}
//           config={config}
//           messageParser={MessageParser}
//           actionProvider={ActionProvider}
//           placeholderText='Type your answer'
//           disableScrollToBottom={false}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useRef, useEffect, useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './chatbot/config';
import MessageParser from './chatbot/MessageParser';
import ActionProvider from './chatbot/ActionProvider';
import './App.css';

function App() {
  const chatbotRef = useRef(null);
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  useEffect(() => {
    const setupInputListener = () => {
      const inputElement = document.querySelector('.react-chatbot-kit-chat-input');
      const sendButton = document.querySelector('.react-chatbot-kit-chat-btn-send');

      if (inputElement && sendButton) {
        sendButton.disabled = !inputElement.value.trim();
        const handleInput = (e) => {
          sendButton.disabled = !e.target.value.trim();
        };
        inputElement.addEventListener('input', handleInput);

        // Cleanup listener when component unmounts
        return () => {
          inputElement.removeEventListener('input', handleInput);
        };
      }
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          setupInputListener();
        }
      });
    });

    const chatbotContainer = document.querySelector('.react-chatbot-kit-chat-container');
    if (chatbotContainer) {
      observer.observe(chatbotContainer, {
        childList: true,
        subtree: true
      });
    }

    setupInputListener();

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  return (
    <div>
      {/* Chatbot Container */}
      <div className={`chatbot-container ${!isChatbotVisible ? 'hidden' : ''}`}>
        <div className="App">
          <Chatbot
            ref={chatbotRef}
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            placeholderText='Type your answer'
            disableScrollToBottom={false}
          />
        </div>
      </div>

      {/* Chatbot Toggle Button */}
      <button
        className={`chatbot-button ${isChatbotVisible ? 'active' : ''}`}
        onClick={toggleChatbot}
      >
        {isChatbotVisible ? '×' : '+'}
      </button>
    </div>
  );
}

export default App;
