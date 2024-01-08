import React from "react";
import {
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Explore a rich entertainment universe on our user-friendly web app, boasting a diverse array of movies, TV series, dramas, and cartoons. Dive into compelling storylines, receive personalized recommendations, and enjoy seamless streaming for a delightful experience. Stay current with the latest releases, binge-watch favorites, and elevate leisure with dynamic content suitable for all ages.
                </div>
                <div className="socialIcons">
                <a href="https://www.linkedin.com/in/sunny-kumar-a10a0720a/" target="_blank">
                <span className="icon" >
                    <FaLinkedin />
                </span>
                </a>

                <a href="https://github.com/Sunny3335" target="_blank">
                <span className="icon" >
                    <FaGithub />
                </span>
                </a>

                <a href="https://twitter.com/cXUwc0KFmb48QYU" target="_blank">
                <span className="icon" >
                    <FaTwitter />
                </span>
                </a>

                <a href="https://www.instagram.com/itz_sunny.exe" target="_blank">
                <span className="icon" >
                    <FaInstagram />
                </span>
                </a>
                
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
