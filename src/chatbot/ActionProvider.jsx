import React, { useState } from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  
  let [location  , setLocation]  =  useState('online');

  const locationUpdate  =(location_data)=>{
          console.log("_______  called _____")
            setLocation(location_data);
  }

  const action_inavlid_name= () => {
    const message = createChatBotMessage('Plese enter valid name?', { widget: 'btn_widget' });
    updateState(message);
  };

  const action_name= () => {
    const message = createChatBotMessage('Plese enter name?');
    updateState(message);
  };
  

  const action_intrest = () => {
    const message = createChatBotMessage('Do you want to enquire about any course?', { widget: 'btn_widget' });
    updateState(message);
  };

  const action_course = () => {
    const message = createChatBotMessage('Which course would you like to apply for?');
    updateState(message);
  };

  const action_contact = () => {
    const message = createChatBotMessage('Please share your phone number.');
    updateState(message);
  };


  const action_location = () => {
    const message = createChatBotMessage('Got it, Which Location do you prefer?', {widget :'btn_location'});
    updateState(message);
  };

  
  const action_email = () => {
    const message = createChatBotMessage('Kindly provide your email address for sharing more details of the service.');
    updateState(message);
  };


  const action_bye = () => {
    const message = createChatBotMessage('Thanks for your respose , we will react you out shorty.');
    updateState(message);
  };

 
  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message], 
    }));
    // console.log("Updated State:", message);
   
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { 
            action_intrest,
            action_course,
            action_contact,
            action_location,
            action_email,
            action_bye,
            action_name,
            locationUpdate,
            location
          },

        
        });
      })}
    </div>
  );
};

export default ActionProvider;
