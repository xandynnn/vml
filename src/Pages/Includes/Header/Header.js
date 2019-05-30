import React, { Component } from 'react';

import './header.css';

export default class Header extends Component{
    render(){
        return(
            <div id="header">
                <header>
                    <div className="header">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="row">
                                        <div className="col-xs-12 col-md-6 np">
                                            <a href="/" className="logo">
                                                <img src="../../assets/images/logo.svg" alt="The Movie Database (TMDb)" width="81" height="72" />
                                            </a>
                                            <div className="mainMenu">
                                                <nav>
                                                    <ul>
                                                        <li>
                                                            <a href="#1">Discover</a>
                                                            <ul>
                                                                <li><a href="#1">Movies</a></li>
                                                                <li><a href="#1">TV Shows</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="#1">Movies</a>
                                                            <ul>
                                                                <li><a href="#1">Popular</a></li>
                                                                <li><a href="#1">Top Rated</a></li>
                                                                <li><a href="#1">Upcoming</a></li>
                                                                <li><a href="#1">Now Playing</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="#1">TV Shows</a>
                                                            <ul>
                                                                <li><a href="#1">Popular</a></li>
                                                                <li><a href="#1">Top Rated</a></li>
                                                                <li><a href="#1">On TV</a></li>
                                                                <li><a href="#1">Airing Today</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="#1">People</a>
                                                            <ul>
                                                                <li><a href="#1">Popular People</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-6 np">
                                            <div className="topMenu">
                                                <ul>
                                                    <li><a href="#1">Apps</a></li>
                                                    <li><a href="#1">Forums</a></li>
                                                    <li><a href="#1">Leaderboard</a></li>
                                                    <li><a href="#1">Contribute</a></li>
                                                    <li><a href="#1">API</a></li>
                                                    <li><a href="#1">Support</a></li>
                                                </ul>
                                            </div>
                                            <div className="loginMenu">
                                                <ul>
                                                    <li>
                                                        <a href="#1" className="plus"><span>+</span><span className="box">Não encontrou o filme ou série que procurava? Entre com uma conta e adicione ao nosso banco de dados.</span></a>
                                                    </li>
                                                    <li><a href="#1" className="language">EN</a></li>
                                                    <li><a href="#1">Login</a></li>
                                                    <li><a href="#1">Sign Up</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <form>
                                        <fieldset>
                                            <legend>Busca</legend>
                                            <div className="form-group">
                                                <input placeholder="Search for a movie, tv show, person" type="text" name="search" />
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>            
                    </div>
                </header>
            </div>
        )
    }
}