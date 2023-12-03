import '../styles/Menu.css';
import {ReactComponent as Explore} from '../images/explore.svg';
import {ReactComponent as Notifications} from '../images/messages.svg';
import {ReactComponent as Home} from '../images/home.svg';
import {ReactComponent as Messages} from  '../images/notifications.svg';

function Menu(){
    return(
        <div className="menu">
           <Home className='homeIcon'/>
           <Explore className='exploreIcon'/>
           <Messages className='messagesIcon'/>
           <Notifications className='notificationsIcon'/>
        </div>
    );
}

export default Menu;