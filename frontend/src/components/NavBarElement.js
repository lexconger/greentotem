import './NavBarElement.css';

function NavBarElement(props) {

    return(
        <div className="navBarElementWrapper">
            <a className="navBarElement" href={props.link}>{props.text}</a>
        </div>

    )
}


export default NavBarElement;