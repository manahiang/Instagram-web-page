
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

function NavbarRight() {
  return (
    <div>
          <div className='navbar-right'>
                                <div className=''>
                                  <a href='/'>  <div className='control-send'>
                                        <TbBrandTelegram className='icon-telegram' />
                                    </div></a>
                                    <div className='point'></div>
                                </div>

                                <div className=''>
                                    <a href='/'><div className='control-send'>
                                        <RiNotification3Line className='icon-telegram' />
                                    </div></a>
                                    <div className='point-green'></div>
                                </div>
                              < a href='/'>  <div><AiOutlineMenu className='icon-menu' /></div></a>
                            </div>
    </div>
  )
}

export default NavbarRight