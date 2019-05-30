import React, { Component } from 'react';

//
//  Styles
//
import './Footer.less';

export default class Footer extends Component{
    render(){
        return(
            <div id="footer">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-4">
                                <a href="/" className="logo">
                                    <img src="../../assets/images/logo.svg" alt="The Movie Database (TMDb)" width="130" height="116" />
                                </a>
                                <a className="joinComunity" href="/account/signup">Join the community</a>
                            </div>
                            <div className="col-xs-12 col-md-2">
                                <h2>The Basics</h2>
                                <ul>
                                    <li><a href="/about">About TMDb</a></li>
                                    <li><a href="/about/staying-in-touch">Contact Us</a></li>
                                    <li><a href="/talk">Support Forums</a></li>
                                    <li><a href="/documentation/api">API</a></li>
                                    <li><a href="https://blog.themoviedb.org/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-md-2">
                                <h2>Get Involved</h2>
                                <ul>
                                    <li><a href="/bible">* Contribution Bible</a></li>
                                    <li><a href="/apps">3rd Party Applications</a></li>
                                    <li><a href="/movie/new">Add New Movie</a></li>
                                    <li><a href="/tv/new">Add New TV Show</a></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-md-2">
                                <h2>Community</h2>
                                <ul>
                                    <li><a href="/documentation/community/guidelines">Guidelines</a></li>
                                    <li><a href="/leaderboard">Leaderboard</a></li>
                                    <li><a href="/discuss">Forums</a></li>
                                    <li><a href="https://twitter.com/themoviedb" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                                    <li><a href="https://www.facebook.com/themoviedb" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-md-2">
                                <h2>Legal</h2>
                                <ul>
                                    <li><a href="/documentation/website/terms-of-use">Terms of Use</a></li>
                                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}