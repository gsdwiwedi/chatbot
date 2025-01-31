import './LocationButton.css'
const LocationButtons = (props) => {
    const location = ['Noida,Sector-15', 'Vashundhra, Ghaziabad', 'Online']

    const handleLocation = (event) => {
        const buttonText = event.target.innerText; 
        console.log("Button text:", buttonText);
       
        props.actions.locationUpdate(buttonText);
      
        props.actions.action_email();
        
    };
    
    return (
        <div className="div_btn_location">
            {

                location.map(
                    (location , index) => {
                        return <button  key={index} className='btn_location' onClick={handleLocation}> {location} </button>
                    }
                )

            }
        </div>
    )
}

export default LocationButtons