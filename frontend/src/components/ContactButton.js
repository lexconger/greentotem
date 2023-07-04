import './ContactButton.css';
import quote_icon from '../resources/paper-svgrepo-com.svg';

function ContactButton() {

    return(
        <div className="titleWrapper">
            <button className="contactButton">
                {/* <img className="quoteIcon" src={quote_icon}></img> */}
                <div>
                    Get Quote
                </div>
            </button>
        </div>

    )
}


export default ContactButton;