import React from 'react'
import './footer.css'



export default function Footer() {
    return (
        <footer className="footer py-3">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
                    <div class="wrapper">
                        <div class="icon facebook">
                            <div class="tooltip">Facebook</div>
                            <span><i class="fab fa-facebook-f"></i></span>
                        </div>
                        <div class="icon twitter">
                            <div class="tooltip">Twitter</div>
                            <span><i class="fab fa-twitter"></i></span>
                        </div>
                        <div class="icon instagram">
                            <div class="tooltip">Instagram</div>
                            <span><i class="fab fa-instagram"></i></span>
                        </div>
                        <div class="icon youtube">
                            <div class="tooltip">Youtube</div>
                            <span><i class="fab fa-youtube"></i></span>
                        </div>
                        </div>
                        <h3>all rights reserved &copy;{new Date().getFullYear().toString()}</h3>
                    </div>
                </div>
            </div>
        </footer>
    )
}