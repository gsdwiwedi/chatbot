import logo from '../assets/Logo.jpg'
const Avatar =(props) => {
  return (
    <img src={logo}  
    alt="SC" 
    style={{ 
      width: '41px',  
      height: '40px', 
      borderRadius: '50%',  
      border: '4px #30518f',  
      boxShadow: '0 2px 4px rgba(48, 81, 143, 0.68)',  
      marginRight: '20px', 
    
    }} ></img>
  
  );
};

export default Avatar;
