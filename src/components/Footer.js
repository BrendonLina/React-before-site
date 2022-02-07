import {FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer(){
    return(
        <div>
            <ul className={styles.social_list}>
                <li><FaFacebook/></li>
                <li><FaTwitter/></li>
                <li><FaLinkedin/></li>
            </ul>      
        </div>
    )
}

export default Footer