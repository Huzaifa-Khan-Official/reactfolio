import React from 'react'
import bannerImg2 from '../assets/bannerImg2.svg'


export default function HomeDiv() {
    return (
        <>
            <img src={bannerImg2} alt="" className='homeImg' />
            <div className="row px-4 py-5">
                <div className="col-lg-6 col-md-12 col-12">
                    <div className="bubble2"></div>
                    <div className="bubble1"></div>
                    <div className="bubble3"></div>
                    <div className="bubble4"></div>
                    <div className="bubble5"></div>
                    <h2>
                        Hey there!
                        <br />
                        I'm Huzaifa Khan
                        <br />
                        Independent <span>Frelencer</span>
                    </h2>

                    <h4>
                        I create eye catching website
                    </h4>

                    <div className="btnDiv">
                        <button className='btn'>
                            hire me
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
