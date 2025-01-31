import { PiUserCircleFill } from "react-icons/pi";


const UserAvatar = () => {
  return (
    
    <div>
         <PiUserCircleFill   
         style={{ 
          width: '40px',  
          height: '40px', 
          borderRadius: '50%',  
          border: '4px solidrgb(211, 176, 236)', 
          boxShadow: '0 2px 6px #30518f',  
          marginRight: '20px',  
          // backgroundColor:'#30518f',
          marginLeft:'15px',
          background:'#30518f',
          color:'#f37e16',
          // font:'12px'
        }} 
         
         />
         

    </div>
    
  );
}

export default UserAvatar;
