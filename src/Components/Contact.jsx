import React from 'react'
import { LuPhoneCall } from "react-icons/lu";
import { BsChatLeftText } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

export default function Contact() {
    return (
        <div className='row'>
            <div className="col-lg-5 col-md-12">
                <div className="getInTouchDiv">
                    <h6>
                        Get in Touch
                    </h6>
                    <h2>
                        Talk or Meet with Me
                    </h2>
                </div>

                <div className="media d-flex gap-3 align-items-center">
                    <LuPhoneCall className='mediaIcon' />
                    <div className="mediaBody">
                        <h6>
                            Call Me Now
                        </h6>
                        <h4>
                            02934567845
                        </h4>
                    </div>
                </div>

                <div className="media d-flex gap-3 align-items-center">
                    <BsChatLeftText className='mediaIcon' />
                    <div className="mediaBody">
                        <h6>
                            Contact Me
                        </h6>
                        <h4>
                            john@gmail.com
                        </h4>
                    </div>
                </div>


                <div className="media d-flex gap-3 align-items-center">
                    <CiLocationOn className='mediaIcon' />
                    <div className="mediaBody">
                        <h6>
                            Get Me Here
                        </h6>
                        <h4>
                            Z105 - London, UK
                        </h4>
                    </div>
                </div>
            </div>

            <div className="col-lg-7 col-md-12">
                <div className="getInTouchDiv">
                    <h6>
                        Contact us
                    </h6>
                    <h2>
                        Let me know here Know Here
                    </h2>
                </div>

                <div className="inputDiv">
                    <div className="row">
                        <div className="col-6">
                            <input type="text" placeholder='Your Name*' className='form-control'/>
                        </div>
                        <div className="col-6">
                            <input type="email" placeholder='Your Email*' className='form-control'/>
                        </div>
                        <div className="col-6">
                            <input type="text" placeholder='Subject*' className='form-control'/>
                        </div>
                        <div className="col-6">
                            <input type="text" placeholder='Phone*' className='form-control'/>
                        </div>
                    </div>
                    <textarea rows="6" className='form-control textArea'></textarea>
                </div>
            </div>
        </div>
    )
}