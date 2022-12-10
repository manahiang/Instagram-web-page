import React from 'react'
import { BsEmojiSmile, BsFillBookmarkFill, BsFillCursorFill,BsBookmark } from "react-icons/bs";
import { TfiInstagram } from "react-icons/tfi";
import { FiLogOut, FiMonitor, FiPaperclip, FiSettings, } from "react-icons/fi";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { BiCollection, BiComment, BiHeart, BiImage, BiMicrophone, BiPlay, BiPlus, BiSearch, BiSend, BiShare } from "react-icons/bi";
import { ImStatsBars } from "react-icons/im";
import { SlOptions } from "react-icons/sl";
import { TbBrandTelegram } from "react-icons/tb";
import { RiNotification3Line } from "react-icons/ri";

function Feed2() {
  return (
    <div>
         <div className='Feeds'>
                                    <div className='Feeds2'>
                                        <div className='main2-pro'>
                                            <div className='control-pro'>
                                                <div className='pro-pic'>
                                                    <img src="https://www.cnet.com/a/img/resize/b03e1f17e9d2d12377582516fe1906818ea95b4b/hub/2021/09/03/afa4abf1-ea46-45bf-b4d0-84259920a236/qlwgiefucodivdzjgil7.jpg?auto=webp&fit=crop&height=1200&width=1200" width={80} alt="tukata" />
                                                </div>
                                                <div className='pro-title'>
                                                    <p style={{ fontWeight: '700', fontSize: '20px' }}>Venom</p>
                                                    <p>New York,Unite State</p>
                                                </div>
                                            </div>
                                            <SlOptions className='icon-option' />
                                        </div>
                                        <div className='full-pic'>
                                            <img src="https://cdn.vox-cdn.com/thumbor/1esXT9LIPcsuznJ09nO4ZH1j_v0=/0x41:3000x1541/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/13201127/venom1.jpg" width="100%" />
                                        </div>
                                        <div className='components'>
                                            <div className='love'>
                                                <a href=''><BiHeart className='icon1' /></a>
                                                <p>28.5k Like</p>
                                            </div>
                                            <div className='love'>
                                                <a href=''> <BiComment className='icon1' /></a>
                                                <p>33 Comment</p>
                                            </div>
                                            <div className='love'>
                                                <a href=''> <BiShare className='icon1' /></a>
                                                <p>134 Share</p>
                                            </div>
                                            <div className='love'>
                                                <a href=''> <BsBookmark className='icon1' /></a>
                                                <p>16 Saved</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    </div>
  )
}

export default Feed2