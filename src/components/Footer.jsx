import '../styles/footer.css';
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IconContext } from 'react-icons';

export const Footer = () => {
  return (
    <footer className='footer-container'>
        <div className='social-media'>
            <h3>Follow us</h3>
            <IconContext.Provider value={{className: 'sm-icons'}}>
              <div>
                <a href="https://youtube.com" aria-label="Youtube social media"><FaYoutube/></a>
                <a href="https://instagram.com" aria-label="Instagram social media"><FaInstagram /></a>
                <a href="https://linkedin.com" aria-label="LinkedIn social media"><FaLinkedin /></a>
              </div>
            </IconContext.Provider>
        </div>
        <p>Copyright 2023</p>
        <p>Created by Behrouz and Vanessa</p>
    </footer>
  )
}
