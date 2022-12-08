import React from 'react'
import { BsApple } from 'react-icons/bs';
import { SiFacebook } from "react-icons/si";
import { IoLogoGooglePlaystore } from "react-icons/io5";


function PageLogin() {
    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div className='container-log-in'>
            <div className='center-log-in'>
                <div className='grid'>
                    
                        <img src='https://www.pngkey.com/png/full/165-1652373_ramboestrada-instagram-surf-photographer-influencer-iphone.png' />
                    
                    {/* Container Log IN */}
                        <div className='main-log-in'>
                            <div className='log-in'>
                                <div className='control-log-in'>
                                    <div className='logo'>
                                        <div className='box'>
                                            <div className='circle'>
                                                <div className='point1'></div>
                                            </div>
                                        </div>
                                        <p>Instagram</p>
                                    </div>
                                    <div className='control-input'>
                                        <input placeholder='Phone Number, Username. or Email' />
                                        <input placeholder='password' />
                                        <div className='login-text'>
                                            <p>Login</p>
                                        </div>
                                        <div className='main-line'>
                                            <div className='line'></div>
                                            <div className='or'>OR</div>
                                        </div>
                                        <div className='log-in-f'>
                                            <SiFacebook className='icon-f' />
                                            <p className='log-in-text-f'>Log in width Facebook</p>
                                        </div>
                                        <p className='forget-p'>Forget Password?</p>
                                        <div className='control-line2'><p className='line2'></p></div>
                                        <p className='no-account'>Don't have an account? Sign Up</p>
                                    </div>
                                </div>
                                <div className='get-app'>
                                    <p>Get the App</p>
                                </div>
                                <div className='bothApp'>
                                <div className='app-store'>
                                        <BsApple className='icon-apple'/>
                                        <p className='apple-text'>App Store</p>
                                    </div>
                                    <div className='app-store'>
                                        <IoLogoGooglePlaystore className='icon-apple'/>
                                        <p className='apple-text'>Google Play</p>
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

export default PageLogin