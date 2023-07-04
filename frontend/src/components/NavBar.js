import NavBarElement from '../components/NavBarElement';

function NavBar() {

    return(
        <div className="navBarContainer">
            <NavBarElement link="/" text="Home"/>
            <NavBarElement link="/" text="About"/>
            <NavBarElement link="/contact"  text="Contact"/>
        </div>
    )
}


export default NavBar;