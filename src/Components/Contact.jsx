import React from 'react'
import { LuPhoneCall } from "react-icons/lu";
import { BsChatLeftText } from "react-icons/bs";

export default function Contact() {
    return (
        <div className='row'>
            <div className="col-lg-5 col-md-12">
                <div className="getInTouchDiv mb-5">
                    <h6>
                        Get in Touch
                    </h6>
                    <h2>
                        Talk or Meet with Me
                    </h2>
                </div>

                <div className="media d-flex gap-3">
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

                <div className="media d-flex gap-3">
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
            </div>
        </div>
    )
}