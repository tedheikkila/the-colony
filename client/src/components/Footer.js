import React from 'react';

import '../index.css'

const Footer = () => {
  
    return (
      <div>
         <footer className="t-colony-footer">
            <ul className="nav justify-content-center">
                <li className="t-nav-item">
                    <a
                        href="https://github.com/tedheikkila/the-colony"
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => ('')}
                    >
                        <img id="t-nav-icon" src="./assets/icons/github.png" width="60" height="60" alt="GitHub Repo" />
                    </a>
                </li>
                <li className="t-nav-item">
                    <span>the Colony @ 2021</span>
                </li>
            </ul>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  