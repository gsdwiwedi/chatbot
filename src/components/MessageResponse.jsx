
import './MessageResponse.css'
const MessageResponse = ({ response_text }) => {

  
  return (
    <div className="mesage_response">
      <div className='react-chatbot-kit-chat-bot-message-arrow-resp'>

      </div>
      <div className='react-chatbot-kit-chat-bot-message'>
        {response_text}
      </div>

    </div>
  )
}

export default MessageResponse