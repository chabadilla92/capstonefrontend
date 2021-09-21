import React from 'react'
import './footer.css'
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaTwitch } from "@react-icons/all-files/fa/FaTwitch";





export default function Footer() {
    return (
        <footer className="footer py-3">
            <div className="container">
                <div className="row">
                    <div class="foot" className="col-12 col-md-6 text-yellow text-capitalize">
                    <div class="wrapper">
                        <div class="icon facebook">
                            <div class="tooltip">Facebook</div>
                            <span><a href="https://www.facebook.com/loltyler1" aria-label="facebook"><i class="fab fa-facebook"><FaFacebook /></i></a></span>
                        </div>
                        <div class="icon twitter">
                            <div class="tooltip">Twitter</div>
                            <span><a href="https://mobile.twitter.com/loltyler1?lang=en" aria-label="twitter"><i class="fab fa-twitter"><FaTwitter /></i></a></span>
                        </div>
                        <div class="icon instagram">
                            <div class="tooltip">Instagram</div>
                            <span><a href="https://www.instagram.com/tyler1_alpha/?hl=en" aria-label="instagram"><i class="fab fa-instagram"><FaInstagram /></i></a></span>
                        </div>
                        <div class="icon youtube">
                            <div class="tooltip">Youtube</div>
                            <span><a href="https://www.youtube.com/results?search_query=tyler1" aria-label="youtube"><i class="fab fa-youtube"><FaYoutube /></i></a></span>
                        </div>
                        
                        <div class="icon twitter">
                            <div class="tooltip">Twitch</div>
                            <span><a href="https://www.twitch.tv/loltyler1" aria-label="twitch"><i class="fab fa-twitch"><FaTwitch /></i></a></span>
                        </div>
                        </div>
                        <h3>all rights reserved &copy;{new Date().getFullYear().toString()}</h3>
                    </div>
                </div>
            </div>
        </footer>
    )
}