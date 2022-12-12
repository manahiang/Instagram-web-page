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

function Des() {
  return (
    <div>
         <div className='text'>
                                    <p style={{width:'100%'}}>Apply for a feature following the link in out bio and we well publish your photos in our account @travelsfever</p>
                                </div>
                                <div className='comment'>
                                    <div className='comment-pic'>
                                        <img src="https://imageio.forbes.com/specials-images/imageserve/627bd291633f3fbbcda36428/0x0.jpg?format=jpg&crop=2057,2059,x918,y85,safe&height=416&width=416&fit=bounds" alt='pic' />
                                    </div>
                                    <div className='input-comment1'>
                                        <input placeholder='Write your comment...' />
                                            <FiPaperclip className='icon-comment' />
                                            <BsEmojiSmile className='icon-comment' />
                                            <BiImage className='icon-comment' />
                                        
                                    </div>
                                    
                                </div>
    </div>
  )
}

export default Des