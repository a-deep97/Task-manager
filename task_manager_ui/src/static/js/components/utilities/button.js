

import '../../../css/utilities/utilities.css';


function CustomButton(props){

    return(
        <button className="custom-button" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default CustomButton;