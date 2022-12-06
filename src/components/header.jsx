import React from 'react'
import { BsEmojiSmile, BsFillBookmarkFill, BsFillCursorFill, BsFillStickiesFill } from "react-icons/bs";
import { TfiInstagram } from "react-icons/tfi";
import { FiLogOut, FiMonitor, FiPaperclip, FiSettings, } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { BiCollection, BiComment, BiHeart, BiImage, BiMenu, BiMicrophone, BiPlay, BiPlus, BiSearch, BiSend, BiShare } from "react-icons/bi";
import { ImStatsBars } from "react-icons/im";
import { SlOptions } from "react-icons/sl";

function Header() {
    return (
        <div className='container'>
            <div className='center'>
                <div className='flex'>
                    <div className='left-menu'>
                        {/* 
                    Logo */}
                        <a href=''><div className='logo'>
                            <div><TfiInstagram /></div>
                            <div style={{ fontFamily: 'cursive' }}>Instagram</div>
                        </div></a>
                        {/* Profile */}
                        <a href=''><div className='profile'>
                            <div className='main-pro'>
                                <div className='pro-image'>
                                    <img src='https://imageio.forbes.com/specials-images/imageserve/627bd291633f3fbbcda36428/0x0.jpg?format=jpg&crop=2057,2059,x918,y85,safe&height=416&width=416&fit=bounds' alt='profile' className='circle-image' />
                                </div>
                                <div className='title'>
                                    <h5>CR.Ronaldo</h5>
                                    <p style={{ color: 'black', fontWeight: '400' }}>Portugal</p>
                                </div>
                            </div>
                        </div></a>
                        <div className='amount'>
                            <div className='post'>
                                <p style={{ fontWeight: '600' }}>578</p>
                                <p>posts</p>
                            </div>

                            <div className='follower'>
                                <p style={{ fontWeight: '600' }}>37.2k</p>
                                <p>followers</p>
                            </div>

                            <div className='post'>
                                <p style={{ fontWeight: '600' }}>989</p>
                                <p>following</p>
                            </div>
                        </div>

                        {/* Navbar */}
                        <a href=''><div className='navbar'>
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

                            <div className='icon-name log-out'>
                                <FiLogOut style={{ fontSize: '25px', paddingLeft: '20px' }} className="icon" />
                                <div><h3 className='name-icon'>Log out</h3></div>
                            </div>
                        </div>
                        </a>
                    </div>

                    {/* Body */}

                    <div className='body'>
                        <div className='body-container'>
                            <div className='searchXc-n-p'>
                                <div className='search'>
                                    <input placeholder='search' />
                                    <a href=''><BiSearch className="icon-search" /></a>
                                    <a href=''><BiMicrophone className='icon-mic' /></a>
                                </div>
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

                                <a href=''><div className='profile-story'>
                                    <div>
                                        <div className='add-story1'>
                                            <div className='add-story-first'>
                                                <BiPlus style={{ fontSize: '30px', fontWeight: '700' }} />
                                            </div>
                                        </div>
                                        <p style={{ fontSize: '13px' }}>Add story</p>
                                    </div>


                                    <div>
                                        <div className='pic-story'>
                                            <img src='https://yt3.ggpht.com/D90rlUiGOL0qiBVsDW9-A92qnKnShpheIzro-S8yANMMlTxGgGjJXlaUTH2nM6KAJew_rBC9=s900-c-k-c0x00ffffff-no-rj' width={80} />
                                        </div>
                                        <p style={{ fontSize: '13px' }}>Preab Sovath</p>
                                    </div>

                                    <div>
                                        <div className='pic-story'>
                                            <img src='data:image/jpeg;base64,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' width={80} />
                                        </div>
                                        <p style={{ fontSize: '13px' }}>Niko</p>
                                    </div>

                                    <div>
                                        <div className='pic-story'>
                                            <img src='https://i.scdn.co/image/ab67616d0000b2732abbe41ab63a7864f69eb663' width={80} />
                                        </div>
                                        <p style={{ fontSize: '13px' }}>Aok Sokonkanha</p>
                                    </div>

                                    <div>
                                        <div className='pic-story'>
                                            <img src='https://nationaltoday.com/wp-content/uploads/2022/03/Neymar-Birthday.jpg.webp' width={80} />
                                        </div>
                                        <p style={{ fontSize: '13px' }}>Neymar JR</p>
                                    </div>

                                    <div>
                                        <div className='pic-story'>
                                            <img src='data:image/jpeg;base64,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' width={80} />
                                        </div>
                                        <p style={{ fontSize: '13px' }}>Sok Sreyneang</p>
                                    </div>
                                </div></a>
                                <div className='main-feeds'>
                                    <div className='feed'>
                                        <p>Feeds</p>
                                    </div>
                                    <div className='latest'>
                                        <p>Latest</p>
                                    </div>
                                    <div className='popular'>
                                        <p>Popular</p>
                                    </div>
                                </div>

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
                                                <a href=''> <BsFillBookmarkFill className='icon1' /></a>
                                                <p>16 Saved</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text'>
                                    <p>Apply for a feature following the link in out bio and we well publish your photos in our account @travelsfever</p>
                                </div>
                                <div className='comment'>
                                    <div className='comment-pic'>
                                        <img src="https://imageio.forbes.com/specials-images/imageserve/627bd291633f3fbbcda36428/0x0.jpg?format=jpg&crop=2057,2059,x918,y85,safe&height=416&width=416&fit=bounds" alt='pic' />
                                    </div>
                                    <div className='input-comment'>
                                        <input placeholder='Write your comment...' />
                                        <div className='c-comment'>
                                            <FiPaperclip className='icon-comment' />
                                            <BsEmojiSmile className='icon-comment' />
                                            <BiImage className='icon-comment' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-menu'>

                </div>
            </div>
        </div>

    )
}

export default Header