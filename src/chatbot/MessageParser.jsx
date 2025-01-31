import React, { useState } from 'react';
import { FaTruckMonster } from 'react-icons/fa';
import axios from 'axios';

const MessageParser = ({ children, actions }) => {
  const [nameFlag, setNameFlag] = useState(true)
  const [name, setName] = useState('')

  const [intrestFlag, setIntrestFlag] = useState(true);
  // const [intrest, setIntrest] = useState('');

  const [courseFlag, setCourseFlag] = useState(true);
  const [course, setCourse] = useState('');


  const [contactFlag, setContactFlag] = useState(true);
  const [contact, setContact] = useState('');



  const [locationFlag, setLocationFlag] = useState(true);
  const [location, setLocation] = useState('');

  const [emailFlag, setEmailFlag]  = useState('')


  let   email   =  '';


  //postData(name, contact, course, actions.location, email);
  const postData = async (name, contact, course, location, email ) => {
    try {
        const data = {
            name: name,
            contact: contact,
            course: course,
            email: email,
            location: location
        };
        console.log("Data has been updated ")
        const response = await axios.post('https://www.softcrayons.com/api/addchatboat', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error posting data:', error.response ? error.response.data : error.message);
    }
};

  const parse = (message) => {
        console.log("Message   Data ") 
        console.log(message)
        console.log(actions.location)
    if (message == null || message.trim() === '') {
      return;
    }
  //  console.log(message)
  //   if (message !=null || nameFlag) {
  //     const nameRegex = /^[A-Za-z\s'-]+$/;
  //     let name_val= nameRegex.test(message);
  //     if(!name_val){
  //         actions.action_inavlid_name()
  //     }
    
  //   }
     
     

    if(message !== null && intrestFlag) {
      setName(message);
      actions.action_intrest()
      setIntrestFlag(false);
    }

    else if (message !== null && courseFlag){
      console.log(message , "------------->")
      setCourse(message)
      actions.action_contact();
      setCourseFlag(false);

    }

    else if (message != null && contactFlag) {
      setContact(message);
      actions.action_location();
      setContactFlag(false);
    
    }


    else if (message != null && locationFlag) {
      actions.action_bye();
      setLocationFlag(false)
      email   =   message;
      // console.log("____________________ "+  message)
     // console.log(actions.location,">>>>>>>>>>>>>>>>>>>>")
    setLocation(actions.location)
     // console.log(name, contact, course,  location, email)
     
      postData(name, contact, course, actions.location, email);
      const inputElement = document.querySelector('.react-chatbot-kit-chat-input');
      inputElement.disabled= true;
      
    }

    else {
      // actions.action_name()
      console.log(message)
      return;
    }
  };



  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions
        });
      })}
    </div>
  );
};

export default MessageParser;