import './Header.css'
import logo from '../assets/Logo.webp'
import { IoCloseCircle } from "react-icons/io5";
import { IoReloadCircleSharp } from "react-icons/io5";
import { useRef } from 'react';
const Header = () => {

      const chat_header = useRef();
    
    function hideChatBot(){
              // chat_header.current.
    }
      
  return (
    <div className="main" ref={chat_header}>
        <div className='side_bar'>
          <img src={logo}  alt="SC"  className='logo' ></img>
          <p className='name_comp'> Softcrayons Tech  Solution</p>
        </div>

        <div>
               {/* <button onClick={hideChatBot} className='btn'> <IoCloseCircle className='btn'/> </button> */}
               {/* <button onClick={hideChatBot} className='btn'>< IoReloadCircleSharp className='btn'/> </button> */}
        </div>

    </div>
  )
}

export default Header
