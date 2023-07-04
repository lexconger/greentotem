import './ContactButton.css';
import quote_icon from '../resources/paper-svgrepo-com.svg';

function ContactButton() {

    return(
        <a href='/contact'>
            <button className="contactButton">
            {/* <img className="quoteIcon" src={quote_icon}></img> */}
            <div>
                Free Quote
            </div>
            </button>
        </a>

    )
}


export default ContactButton;