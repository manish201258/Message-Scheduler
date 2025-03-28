import React, { useState } from 'react';
import { useAuth } from '../ContextApi/AuthContext';

const ScheduleMessage = () => {
  const [sender, setSender] = useState({
    message: ""
  });

  const {messageSchedule} = useAuth()
  const [receiver, setReceiver] = useState({
    name: "",
    contact: "",
    scheduletime: ""
  });

  const senderHandleChange = (e) => {
    setSender({
      ...sender,
      [e.target.name]: e.target.value
    });
  };

  const receiverHandleChange = (e) => {
    setReceiver({
      ...receiver,
      [e.target.name]: e.target.value
    });
  };

 

  return (
    <div className='schedule-container'>
      <div className='message-section'>
        {/* Sender Details */}
        <div className='sender-details'>
          <h3>Sender Details</h3>
          <textarea 
            onChange={senderHandleChange} 
            placeholder='Write your message...' 
            name='message' 
            value={sender.message}
          />
        </div>
        
        {/* Receiver Details */}
        <div className='receiver-details'>
          <h3>Receiver Details</h3>
          <input 
            type='text' 
            onChange={receiverHandleChange} 
            placeholder='Enter receiver name' 
            name='name' 
            value={receiver.name} 
          />
          <input 
            type='text' 
            onChange={receiverHandleChange} 
            placeholder='Enter receiver email' 
            name='contact' 
            value={receiver.contact} 
          />
          <input 
            type='datetime-local' 
            onChange={receiverHandleChange} 
            name='scheduletime' 
            value={receiver.scheduletime} 
          />
        </div>
      </div>
      
      {/* Submit Button */}
      <button onClick={()=>{
        messageSchedule(sender,receiver);
        console.log(receiver.scheduletime)
      }} className='send-button'>Schedule Message</button>
    </div>
  );
};

export default ScheduleMessage;
