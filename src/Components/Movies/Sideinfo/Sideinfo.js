import React, { Component } from 'react';

//
//  Components
//
import { Link } from 'react-router-dom';

//
//  Plugins
//
import LazyLoad from 'react-lazy-load';

//
//  Styles
//
import './Sideinfo.less';

export default class Sideinfo extends Component{
    render(){
        return(
            <aside>
                <div className="sideBar">
                    
                    <div className="socialShare">
                        <ul>
                            <li><a href="#" className="facebook"><span>Facebook</span></a></li>
                            <li><a href="#" className="twitter"><span>twitter</span></a></li>
                            <li><a href="#" className="instagram"><span>instagram</span></a></li>
                            <li><a href="#" className="website"><span>site</span></a></li>
                        </ul>
                    </div>

                    <div className="inform">
                        <h2>Facts</h2>
                    </div>

                    <div className="inform">
                        <h2>Status</h2>
                        <p>Released</p>
                    </div>

                    <div className="inform">
                        <h2>Release Information</h2>
                    </div>

                    <div className="inform">
                        <h2>Original Language</h2>
                    </div>

                    <div className="inform">
                        <h2>Runtime</h2>
                    </div>

                    <div className="inform">
                        <h2>Budget</h2>
                    </div>

                    <div className="inform">
                        <h2>Revenue</h2>
                    </div>

                    <div className="inform">
                        <h2>Genres</h2>
                        <ul>
                            <li><Link to={`/genre/9648/movie`}>Mistery</Link></li>
                            <li><Link to={`/genre/10751/movie`}>Family</Link></li>
                            <li><Link to={`/genre/35/movie`}>Comedy</Link></li>
                            <li><Link to={`/genre/878/movie`}>Science Fiction</Link></li>
                            <li><Link to={`/genre/28/movie`}>Action</Link></li>
                            <li><Link to={`/genre/12/movie`}>Adventure</Link></li>
                        </ul>
                    </div>

                    <div className="inform">
                        <h2>Keywords</h2>
                        <ul>
                            <li><Link to="/keyword/703-detective/movie">detective</Link></li>
                            <li><Link to="/keyword/1453-amnesia/movie">amnesia</Link></li>
                            <li><Link to="/keyword/11451-pokemon/movie">pokémon</Link></li>
                            <li><Link to="/keyword/41645-based-on-video-game/movie">based on video game</Link></li>
                            <li><Link to="/keyword/156091-missing-person/movie">missing person</Link></li>
                            <li><Link to="/keyword/167541-buddy-comedy/movie">buddy comedy</Link></li>
                            <li><Link to="/keyword/201952-pikachu/movie">pikachu</Link></li>
                            <li><Link to="/keyword/252080-missing-father/movie">missing father</Link></li>
                            <li><Link to="/keyword/254192-live-action/movie">live action</Link></li>
                            <li><Link to="/keyword/254193-missing-man/movie">missing man</Link></li>
                            <li><Link to="/keyword/254195-cinematic-universe/movie">cinematic universe</Link></li>
                            <li><Link to="/keyword/254196-pikachu-character/movie">pikachu character</Link></li>
                        </ul>
                    </div>

                    <div className="separator"></div>

                    <div className="inform">
                        <h2>Content Score</h2>
                    </div>

                    <div className="inform">
                        <h2>Top Contributors</h2>
                        <ul>
                            <li>
                                <Link to={`/u/topkek`}>
                                    <div className="img">
                                        <LazyLoad>
                                            <img alt="TopKek" srcset="https://image.tmdb.org/t/p/w45_and_h45_face/cNDCv5yGLucVYgpwWXOWEIE3KaH.jpg 1x, https://image.tmdb.org/t/p/w90_and_h90_face/cNDCv5yGLucVYgpwWXOWEIE3KaH.jpg 2x" src="https://image.tmdb.org/t/p/w45_and_h45_face/cNDCv5yGLucVYgpwWXOWEIE3KaH.jpg" />
                                        </LazyLoad>
                                    </div>
                                    <div className="moreInfo">
                                        <div className="point">78</div>
                                        <p>TopKek</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/u/zoulnix`}>
                                    <div className="img">
                                        <LazyLoad>
                                            <img alt="zoulnix" srcset="https://image.tmdb.org/t/p/w45_and_h45_face/hT033TcldYigJ8ZtmuxVQLRafkE.jpg 1x, https://image.tmdb.org/t/p/w90_and_h90_face/hT033TcldYigJ8ZtmuxVQLRafkE.jpg 2x" src="https://image.tmdb.org/t/p/w45_and_h45_face/hT033TcldYigJ8ZtmuxVQLRafkE.jpg" />
                                        </LazyLoad>
                                    </div>
                                    <div className="moreInfo">
                                        <div className="point">56</div>
                                        <p>zoulnix</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/u/fantrashalert`}>
                                    <div className="img">
                                        <LazyLoad>
                                        <img alt="fantrashalert" srcset="https://secure.gravatar.com/avatar/0d113a9457fa36106cd7b08e3a5cc172.jpg?s=45 1x, https://secure.gravatar.com/avatar/0d113a9457fa36106cd7b08e3a5cc172.jpg?s=90 2x" src="https://secure.gravatar.com/avatar/0d113a9457fa36106cd7b08e3a5cc172.jpg?s=45" />
                                        </LazyLoad>
                                    </div>
                                    <div className="moreInfo">
                                        <div className="point">27</div>
                                        <p>fantrashalert</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <p><Link to={`/movie//447404/changes/`}>View Edit History</Link></p>
                    </div>

                    <div className="inform">
                        <h2>Popularity Trend</h2>
                        <img src="~/../../assets/images/example-popularity.png" alt="Popularity" />
                    </div>

                    <Link className="login" to={`/login/`}>Login to edit</Link>

                    <p><a href="#KeyboardShortcuts">Keyboard Shortcuts</a></p>
                    
                </div>
            </aside>
        )
    }
}