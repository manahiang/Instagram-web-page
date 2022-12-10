import React from 'react'

function Profile() {
  return (
    <div>
         <a href=''><div className='profile'>
                            <div className='main-pro'>
                                <div className='pro-image'>
                                    <img src='https://imageio.forbes.com/specials-images/imageserve/627bd291633f3fbbcda36428/0x0.jpg?format=jpg&crop=2057,2059,x918,y85,safe&height=416&width=416&fit=bounds' alt='profile' className='circle-image' />
                                </div>
                                <div className='title'>
                                    <h4>CR.Ronaldo</h4>
                                    <p style={{ color: 'black', fontWeight: '400' }} className="portugal">Portugal</p>
                                </div>
                            </div>
                        </div></a>
                        {/* Amount */}
                        <div className='amount'>
                            <div className='post'>
                                <p style={{ fontWeight: '600' }}>578</p>
                                <p>posts</p>
                            </div>

                            <div className='follower'>
                                <p style={{ fontWeight: '600' }}>37.2k</p>
                                <p>followers</p>
                            </div>

                            <div className='following'>
                                <p style={{ fontWeight: '600' }}>989</p>
                                <p>following</p>
                            </div>
                        </div>
    </div>
  )
}

export default Profile