import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Avatar';
import UserAvatar from './UserAvatar';
import MessageResponse from '../components/MessageResponse';
import ButtonWidget from '../components/ButtonWidget';
import LocationButtons from '../components/LocationButtons';
import Header from './Header';

const config = {
  initialMessages: [createChatBotMessage('Hello, I’m here to assist you.', { widget: 'overview' })],

  customComponents: {
    header: () => (
      <Header/>
    ),
    botAvatar: (props) => <Avatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,

  },


  widgets: [
    {
      widgetName: 'overview',
      widgetFunc: (props) => (
        <div style={{ display: 'flex' }}>
          <Avatar />
          <MessageResponse response_text={'May I know your name ?'} {...props} />
        </div>
      ),
    },
    {
      widgetName: 'btn_widget',  
      widgetFunc: (props) => <ButtonWidget  action_first={"Yes"} action_second={"No"} {...props} />,  
    },

    {
      widgetName: 'btn_location',  
      widgetFunc: (props) => <LocationButtons {...props} />,  
    },
  ],
};

export default config;
