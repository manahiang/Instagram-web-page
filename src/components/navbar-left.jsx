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
import { Link } from 'react-router-dom';

function NavbarLeft() {
    return (
        
            <div className='navbar'>
                <div className='icon-name'>
                    <div><AiOutlineHome style={{ fontSize: '25px', paddingLeft: '20px' }} className="icon" />
                        <span className='feed'>Feed</span>
                    </div>
                    <div>
                        <h3 className='name-icon'>Feed</h3>
                    </div>
                </div>

                <div className='icon-name'>
                    <div><BiCollection style={{ fontSize: '25px', paddingLeft: '20px' }} className="icon" />
                        <span className='explore1'>Explore</span>
                    </div>
                    <div><h3 className='name-icon'>Explore</h3></div>
                </div>

                <div className='icon-name'>
                    <div> <BsFillBookmarkFill style={{ fontSize: '25px', paddingLeft: '20px' }} className="icon" />
                        <span className='save'>My favorites</span>
                    </div>
                    <div><h3 className='name-icon'>My favorites</h3></div>
                </div>

                <div className='icon-name'>
                    <div>  <BsFillCursorFill style={{ fontSize: '25px', paddingLeft: '20px' }} className="icon" />
                        <span className='direct'>Direct</span>
                    </div>
                    <div><h3 className='name-icon'>Direct</h3></div>
                </div>

                <div className='icon-name'>
                    <div><FiMonitor style={{ fontSize: '25px', paddingLeft: '20px' }} className="icon" />
                        <span className='ig-tv'>IG TV</span>
                    </div>
                    <div><h3 className='name-icon'>IG TV</h3></div>
                </div>

                <div className='icon-name'>
                    <div><ImStatsBars style={{ fontSize: '25px', paddingLeft: '20px' }} className="icon" />
                        <span className='stats'>Stats</span>
                    </div>
                    <div><h3 className='name-icon'>Stats</h3></div>
                </div>

                <div className='icon-name'>
                    <div><FiSettings style={{ fontSize: '25px', paddingLeft: '20px' }} className="icon" />
                        <span className='setting'>Setting</span>
                    </div>
                    <div><h3 className='name-icon'>Setting</h3></div>
                </div>

                <Link to="log-out">
                    <div className='icon-name log-out'>
                        <div><FiLogOut style={{ fontSize: '25px', paddingLeft: '20px' }} className="icon" />
                        <span className='log-out1'>Log out</span>
                        </div>
                        <div><h3 className='name-icon'>Log out</h3></div>
                    </div>
                </Link>
            </div>
    )
}

export default NavbarLeft;