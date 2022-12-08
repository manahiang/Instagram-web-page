import React from 'react'
import { BsEmojiSmile, BsFillBookmarkFill, BsFillCursorFill, } from "react-icons/bs";
import { TfiInstagram } from "react-icons/tfi";
import { FiLogOut, FiMonitor, FiPaperclip, FiSettings, } from "react-icons/fi";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { BiCollection, BiComment, BiHeart, BiImage, BiMicrophone, BiPlay, BiPlus, BiSearch, BiSend, BiShare } from "react-icons/bi";
import { ImStatsBars } from "react-icons/im";
import { SlOptions } from "react-icons/sl";
import { TbBrandTelegram } from "react-icons/tb";
import { RiNotification3Line } from "react-icons/ri";
import Profile from './profile';
import NavbarLeft from './navbar-left';
import Story from './story';
import Feed2 from './Feed2';
import Des from './descriotption';

function Header() {
    return (
        <div className='container'>
            <div className='center'>
                <div className='flex'>
                    <div className='left-menu'>
                        {/* Logo */}
                        <a href=''><div className='logo'>
                            <div><TfiInstagram /></div>
                            <div style={{ fontFamily: 'cursive' }}>Instagram</div>
                        </div></a>
                        {/* Profile */}
                        {
                            <Profile/>
                        }
                        {/* Navbar-left*/}
                        {
                            <NavbarLeft/>
                        }
                    </div>

                    {/* Body */}

                    <div className='body'>
                        <div className='body-container'>
                            {/* Search */}

                            <div className='searchXc-n-p'>
                                <div className='search'>
                                    <input placeholder='search' />
                                    <a href=''><BiSearch className="icon-search" /></a>
                                    <a href=''><BiMicrophone className='icon-mic' /></a>
                                </div>
                                {/* Create new post */}
                                <a href='' ><div className='new-post'>
                                    <BiPlus className='icon-plus' />
                                    <p>Create new Post</p>
                                </div></a>
                            </div>
                        </div><br />
                        <div className='body-container'>
                            <div className='header-body'>
                                <div className='controll-story'>
                                    <div className='story'><p style={{ fontSize: '20px', fontWeight: '500' }}>Stories</p></div>
                                    <a href=''><div className='watch'>
                                        <p style={{ fontSize: '14px', fontWeight: '500' }}>Watch all</p>
                                        <BiPlay style={{ fontSize: '24px' }} />
                                    </div></a>
                                </div>
                            </div>
                            <div className='header-body'>
                                {/* Feed1 */}
                                {
                                    <Story/>
                                }
                                {/* Feed2 */}
                                {
                                    <Feed2/>
                                }
                                {/* Description and Comment */}
                                {
                                   <Des/> 
                                }
                            </div>
                        </div>
                    </div>
                    {/* Right Menu */}
                    <div className='right-menu'>
                        <div className='container-right'>
                            {/* Navbar-right */}
                            <div className='navbar-right'>
                                <div className=''>
                                    <div className='control-send'>
                                        <TbBrandTelegram className='icon-telegram' />
                                    </div>
                                    <div className='point'></div>
                                </div>

                                <div className=''>
                                    <div className='control-send'>
                                        <RiNotification3Line className='icon-telegram' />
                                    </div>
                                    <div className='point-green'></div>
                                </div>
                                <div><AiOutlineMenu className='icon-menu' /></div>
                            </div>
                            {/* Trending Feeds */}
                            <div className='trending-feeds'>
                                <div><h3>Trending Feeds</h3></div>
                                <div className='center-grid'>
                                    <div className='grid-image'>
                                        <img src="https://exoticwildcats.com/wp-content/uploads/2020/05/baby-tigers-for-sale.jpg" />
                                        <img src="https://play-lh.googleusercontent.com/XVHP0sBKrRJYZq_dB1RalwSmx5TcYYRRfYMFO18jgNAnxHAIA1osxM55XHYTb3LpkV8" />
                                        <img src="https://hips.hearstapps.com/prima.cdnds.net/assets/16/12/1280x914/gallery-1458732822-puppy-labrador.jpg?resize=480:*" />
                                        <img src="https://www.dogcatplace.com/uploads/3/1/3/2/31328069/lion-2801383-1920_orig.jpg" />
                                    </div>
                                </div>
                            </div>
                            {/* Suggestions for you */}
                            <div className='suggestions'>
                                <div><h3>Suggestions for you</h3></div>
                                <div className='control-pro-right'>
                                    <div className='pro-right'>
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFyYKCN9dytO8gYH53ZsAK16MyoX2utmtHt6SnT3xLSXsAQnlL7SUOjjeWTdCJ7jW-rzA&usqp=CAU' />
                                        <div className='title'>
                                            <p style={{ fontWeight: '700' }}>Pich Solika</p>
                                            <p style={{ fontWeight: '300', fontSize: '13px' }}>Phnom Penh,Cambodia</p>
                                        </div>
                                    </div>

                                    <div className='pro-right'>
                                        <img src='https://www.meassoksopheaofficial.com/wp-content/uploads/2019/03/Meas-Soksophea-Profile-1-560x560.jpg' />
                                        <div className='title'>
                                            <p style={{ fontWeight: '700' }}>Meas Soksophea</p>
                                            <p style={{ fontWeight: '300', fontSize: '13px' }}>Phnom Penh,Cambodia</p>
                                        </div>
                                    </div>

                                    <div className='pro-right'>
                                        <img src='https://i.pinimg.com/280x280_RS/a5/ed/bd/a5edbd51031b81e320418049c11a6749.jpg' />
                                        <div className='title'>
                                            <p style={{ fontWeight: '700' }}>khemarak Sereymon</p>
                                            <p style={{ fontWeight: '300', fontSize: '13px' }}>Phnom Penh,Cambodia</p>
                                        </div>
                                    </div>

                                    <div className='pro-right'>
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBPT5AeHkbNE-AIrkhMmBUesCYeYkhsIM1w&usqp=CAU' />
                                        <div className='title'>
                                            <p style={{ fontWeight: '700' }}>Chorn Sovannreach</p>
                                            <p style={{ fontWeight: '300', fontSize: '13px' }}>Phnom Penh,Cambodia</p>
                                        </div>
                                    </div>

                                    <div className='pro-right'>
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQgH6OoljlhI1K89ZdGxObrSVzb19XMFx_dA&usqp=CAU' />
                                        <div className='title'>
                                            <p style={{ fontWeight: '700' }}>Nob Bayatith</p>
                                            <p style={{ fontWeight: '300', fontSize: '13px' }}>Phnom Penh,Cambodia</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* Profile Activity */}
                            <div className='pro-activity'>
                                <div><h3>Profile Activity</h3></div>
                                <div className='main-multi-pro'>
                                    <div className='center-multi-pro'>
                                        <div className='grid-multi-pro'>
                                            <img src='https://sportklub.rs/wp-content/uploads/2021/09/28/1632824160-Lionel-Messi-750x500.jpg' alt='song' />
                                            <img src='https://upload.wikimedia.org/wikipedia/commons/4/4a/Mohamed_Salah_2018.jpg' alt='song' />
                                            <img src='https://media1.popsugar-assets.com/files/thumbor/NxVoajyHjkJ_EjqxqF_-ay96EmQ/0x24:2560x2584/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/04/29/834/n/1922398/f26456705ea9cf1cf32149.65480250_/i/Bruno-Mars.jpg' alt='song' />
                                            <img src='https://www.thesun.co.uk/wp-content/uploads/2022/11/100-per-cent-world-cup-777716690.jpg' alt='song' />
                                            <img src='https://cdn1.i-scmp.com/sites/default/files/2014/07/02/20140703_48_jaa.jpg' alt='song' />
                                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMGFlB6_0LHRJ1-stUsRvPjDFW7S7RZCHq5g&usqp=CAU' alt='song' />
                                            <img src='data:image/jpeg;base64,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' alt='song' />
                                            <img src='https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltc9dc68e140c6fb77/60dc80f6bcc58b0f8f8c2783/63a7debd9ad612e1625e5bfb3aeb19623710ace2.jpg' alt='song' />
                                        </div>
                                    </div>
                                    <div className='center-title'>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <h4>24.3k</h4>
                                            <p style={{ paddingLeft: '10px', fontSize: '15px' }}>Follower</p>
                                        </div>
                                        <p className='active'>Active now on your profile</p>
                                        
                                    </div>
                                    <div className='center-title1'>
                                            <p>The perfect time for uploading
                                            your new post<a href='' className='underline'>Create new post</a></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Header