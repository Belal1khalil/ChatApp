import React from 'react'
import "./ChatBox.css";
import assests from "../../assets/assets"
const ChatBox = () => {
  return (
    <div className='chat-box'>
      <div className="chat-user">
        <img src={assests.profile_img} alt="" />
         <p>Richard Sanford <img className='dot' src={assests.green_dot} alt=""/></p>
         <img src={assests.help_icon} className='help' alt="" />
      </div>

     <div className="chat-msg">
       <div className='s-msg'>
            <p className='msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           <div>
            <img src={assests.profile_img} alt="" />
            <p>2:30 PM</p>
           </div>
       </div>
      
       <div className='s-msg'>
            <img className='msg-img' src={assests.pic1} alt="" />
           <div>
            <img src={assests.profile_img} alt="" />
            <p>2:30 PM</p>
           </div>
       </div>


        <div className='r-msg'>
            <p className='msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           <div>
            <img src={assests.profile_img} alt="" />
            <p>2:30 PM</p>
           </div>
       </div>
     </div>












       <div className="chat-input">
        <input type="text" placeholder="Send a message..." />
        <input type="file" id='image' accept='image/png , image/jpeg' hidden />
        <label htmlFor="image">
          <img src={assests.gallery_icon} alt="" />
        </label>
        <img src={assests.send_button} alt="" />
       </div>
    </div>
  )
}

export default ChatBox
