import React, { Component } from 'react';

//
//  Services
//
import Util from '~/Services/Util';

//
//  Plugins
//
import $ from 'jquery';

//
//  Styles
//
import './header.less';

export default class Header extends Component{

    componentDidMount(){
        this.headerFunctions();
    }

    headerFunctions(){

        let classMobile = () => {
            ( Util.isMobile() ) ? $('body').addClass("isMobile") :  $('body').removeClass("isMobile")
        }

        $(window).resize(function(){
            classMobile();
        })

        classMobile();
        
        //
        //  Scroll Desktop
        //
        $(window).scroll(function () {
            let scrolly = $(this).scrollTop();
            if (scrolly > 80) {
                $("body").addClass('fixedMenuD');
            } else {
                $("body").removeClass('fixedMenuD');
            }
        });

        //
        //	Menu mobile
        //
        $('.hamburgerBtn').on('click touchstart', function(e){
            var self = $(this);
            $('html').toggleClass('activeMenu');
            if ( self.hasClass('active') ){
                self.removeClass('active');
            }else{
                self.addClass('active');
            }
            e.preventDefault();
        });

        //
        //  Click submenu Mobile
        //
        $('body.isMobile .mainMenu nav > ul > li > a').on('click', function(e){
            var self = $(this);
            if ( self.parent().find('ul').length ){
                self.parent().toggleClass('active');
                return false;
            }else{
                return;
            }
        });

    }

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
                                            <div className="mobileMenu">
                                                <button className="hamburgerBtn hms">
                                                    <span>toggle menu</span>
                                                </button>
                                            </div>
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
                                            <a href="#1" className="loginBtnMobile">
                                                <span>Login</span>
                                            </a>
                                        </div>
                                        <div className="col-xs-12 col-md-6 np">
                                            <div className="menuMobile">
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
                                                            <li className="visible-xs visible-sm">
                                                                <a href="#1">Discussion</a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                                <div className="topMenu">
                                                    <ul>
                                                        <li className="visible-xs visible-sm"><a href="#1">Contribution Bible</a></li>
                                                        <li><a href="#1">Apps</a></li>
                                                        <li><a href="#1">Forums</a></li>
                                                        <li><a href="#1">Leaderboard</a></li>
                                                        <li><a href="#1">Contribute</a></li>
                                                        <li><a href="#1">API</a></li>
                                                        <li><a href="#1">Support</a></li>
                                                        <li className="visible-xs visible-sm"><a href="#1">About</a></li>
                                                    </ul>
                                                </div>
                                                <div className="loginMenu">
                                                    <ul>
                                                        <li className="hidden-xs hidden-sm">
                                                            <a href="#1" className="plus"><span>+</span><span className="box">Não encontrou o filme ou série que procurava? Entre com uma conta e adicione ao nosso banco de dados.</span></a>
                                                        </li>
                                                        <li className="hidden-xs hidden-sm"><a href="#1" className="language">EN</a></li>
                                                        <li><a href="#1">Login</a></li>
                                                        <li className="hidden-xs hidden-sm"><a href="#1">Sign Up</a></li>
                                                    </ul>
                                                </div>
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