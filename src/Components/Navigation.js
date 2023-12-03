import '../styles/Navigation.css';
import Menu from './Menu.js';
import igLogo from '../images/igLogo.png';
import search from '../images/search.png';


function Navigation(){
    return(
        <div className="navigation">
            <div className="container">
                <img className='logo' src={igLogo} alt='instagram_logo'/>
                <div className='search'>
                    <img className="search_img" src={search} alt='search_icon'/>
                    <span className='search_txt'>Search</span>
                </div>
                <Menu/>
            </div>
        </div>
    );
}

export default Navigation;