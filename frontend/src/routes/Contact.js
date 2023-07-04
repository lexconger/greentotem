import './Contact.css'
import NavBar from '../components/NavBar';
import {useState, useEffect} from 'react'

function Contact() {

  return (
    <div className="contact-page">
        <NavBar></NavBar>
        <div className="contentWrapper">
            <div className="content">
                <h1>Speak with an expert</h1>
                <div class="contentSubtitle">Our team can help you:</div>
                <ul>
                        <li>Design</li>
                        <li>Build</li>
                        <li>Maintain</li>
                </ul>
            </div>
            <div className="formWrapper">
                <form>
                    <div className="labelWrapper">
                        <label className="firstName">First name</label>
                        <input type="text" name="firstName" placeholder="Rita"/>
                    </div>

                    <div className="labelWrapper">
                        <label className="lastName">Last name</label>
                        <input type="text" name="lastName" placeholder="Smith"/>
                    </div>

                    <div className="labelWrapper">
                        <label className="Email">Email</label>
                        <input type="text" name="email" placeholder="rita@example.com"/>
                    </div>

                    <div className="labelWrapper">
                        <label className="Phone">Phone</label>
                        <input type="text" name="phone" placeholder="+5 (555) 555-5555"/>
                    </div>
                    <div className="labelWrapper" id="anythingElseWrapper">
                        <label className="anythingElse">Anything Else?<br></br>
                        </label>
                        <input type="text" name="anythingElse" id="anythingElseInput" placeholder="Comments and questions"/>
                    </div>
                    <input type="submit" name="submit" value="Submit" className="submitButton"/>
                </form>
            </div>
        </div>
        

    </div>
  );
}

export default Contact;
