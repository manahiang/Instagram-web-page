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
    <div>
        <div className='navbar'>
                            <div className='icon-name'>
                                <AiOutlineHome style={{ fontSize: '25px', paddingLeft: '20px' }} className="icon" />
                                <div><h3 className='name-icon'>Feed</h3></div>
                            </div>

                            <div className='icon-name'>
                                <BiCollection style={{ fontSize: '25px', paddingLeft: '20px' }} className="icon" />
                                <div><h3 className='name-icon'>Explore</h3></div>
                            </div>

                            <div className='icon-name'>
                                <BsFillBookmarkFill style={{ fontSize: '25px', paddingLeft: '20px' }} className="icon" />
                                <div><h3 className='name-icon'>My favorites</h3></div>
                            </div>

                            <div className='icon-name'>
                                <BsFillCursorFill style={{ fontSize: '25px', paddingLeft: '20px' }} className="icon" />
                                <div><h3 className='name-icon'>Direct</h3></div>
                            </div>

                            <div className='icon-name'>
                                <FiMonitor style={{ fontSize: '25px', paddingLeft: '20px' }} className="icon" />
                                <div><h3 className='name-icon'>IG TV</h3></div>
                            </div>

                            <div className='icon-name'>
                                <ImStatsBars style={{ fontSize: '25px', paddingLeft: '20px' }} className="icon" />
                                <div><h3 className='name-icon'>Stats</h3></div>
                            </div>

                            <div className='icon-name'>
                                <FiSettings style={{ fontSize: '25px', paddingLeft: '20px' }} className="icon" />
                                <div><h3 className='name-icon'>Setting</h3></div>
                            </div>

                           <Link to="log-out">
                           <div className='icon-name log-out'>
                                <FiLogOut style={{ fontSize: '25px', paddingLeft: '20px' }} className="icon" />
                                <div><h3 className='name-icon'>Log out</h3></div>
                            </div>
                           </Link>
                        </div>        
    </div>
  )
}

export default NavbarLeft