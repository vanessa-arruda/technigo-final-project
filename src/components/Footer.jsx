import '../styles/footer.css';
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className='footer-container'>
        <div className='social-media'>
            <h3>Follow us</h3>
            <a href="https://youtube.com"><FaYoutube/></a>
            <a href="https://instagram.com"><FaInstagram /></a>
            <a href="https://linkedin.com"><FaLinkedin /></a>
        </div>
        <p>Copyright 2023</p>
        <p>Created by Behrouz and Vanessa</p>
    </footer>
  )
}
