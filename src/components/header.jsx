import React from 'react'
import { BsEmojiSmile, BsFillBookmarkFill, BsFillCursorFill, BsSearch, } from "react-icons/bs";
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
import NavbarRight from './navbarRight';
import TrendingFeeds from './trendingFeeds';
import Suggestions from './suggestions';
import ProActivities from './pro-Activities';

function Header() {
    return (
        <div className='container'>
            <div className='center'>
                <div className='flex'>
                    <div className='left-menu'>
                        {/* Logo */}
                        <a href=''><div className='logo'>
                            <div >
                                <TfiInstagram className="icon-in" />
                                <span className='logo-text1'>instagram</span>
                            </div>
                            <div style={{ fontFamily: 'cursive' }} className="logo-text">Instagram</div>
                        </div></a>
                        {/* Profile */}
                        {
                            <Profile />
                        }
                        {/* Navbar-left*/}
                        {
                            <NavbarLeft />
                        }
                    </div>

                    {/* Body */}

                    <div className='body'>
                        <div className='body-container'>
                            {/* Search */}
                            <div className='searchXc-n-p'>
                                <div className='search2'>
                                    <input placeholder='search ....'/>
                                    <BsSearch className="icon-search1"/>
                                </div>
                                {/* Create new post */}
                                <a href='' ><div className='new-post'>
                                    <BiPlus className='icon-plus' />
                                    <p className='create-new'>Create new Post</p>
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
                                    <Story />
                                }
                                {/* Feed2 */}
                                {
                                    <Feed2 />
                                }
                                {/* Description and Comment */}
                                {
                                    <Des />
                                }
                                <br/>
                               
                            </div>
                        </div>
                    </div>
                    {/* Right Menu */}
                    <div className='right-menu'>
                        <div className='container-right'>
                            {/* Navbar-right */}
                            <>
                                <NavbarRight />
                            </>
                            {/* Trending Feeds */}
                            <>
                                <TrendingFeeds />
                            </>
                            {/* Suggestions for you */}
                            <>
                                <Suggestions />
                            </>
                            {/* Profile Activity */}
                            <>
                                <ProActivities />
                            </>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Header