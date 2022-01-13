import React from "react";

import './footer.css';
import '../../cssicon/fontawesome/css/all.css'

function Footer() {
    return (
      <div>
        <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/help">Help</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
        <ul className="social-media">
          <li><a aria-label="Facebook Link" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
          <li><a aria-label="Github Link" href="https://github.com/w-curiosity"><i className="fab fa-github"></i></a></li>
          <li><a aria-label="Instagram Link" href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
          <li><a aria-label="Twitter Link"  href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
          <li><a aria-label="Youtube Link"  href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a></li>
        </ul>
        <span className="copyright">Copyright @2021 Yijing. All Rights Reserved.</span>
      </div>
    );
  }
  
export default Footer;