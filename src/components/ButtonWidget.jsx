import './ButtonWidget.css'

const ButtonWidget = ( {action_first, action_second, ...props} ) => {


  const handleStartClick = () => {
    if (props ) {
      props.actions.action_course(); 
    } else {
      console.error("initial Action is not available in actions.");
    }
  };

  const handleStopClick = () => {
    console.log('Course rejected');
  };

  return (
    <div className="div_btn">
      <button className='accept_btn' onClick={handleStartClick}> {action_first}</button>
      <button className='reject_btn'onClick={handleStopClick}>{action_second}</button>
    </div>
  );
};

export default ButtonWidget;
