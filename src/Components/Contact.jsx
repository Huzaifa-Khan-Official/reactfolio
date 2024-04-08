import React from 'react'
import { LuPhoneCall } from "react-icons/lu";
import { BsChatLeftText } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { contact } from '../Constants/Constants';
import { useForm } from 'react-hook-form';

export default function Contact() {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }

    console.log(errors);
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
                            {
                                contact.number
                            }
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
                            {
                                contact.email
                            }
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
                            {
                                contact.location
                            }
                        </h4>
                    </div>
                </div>
            </div>

            <div className="col-lg-7 col-md-12 formDiv">
                <div className="getInTouchDiv">
                    <h6>
                        Contact us
                    </h6>
                    <h2>
                        Let me know here Know Here
                    </h2>
                </div>

                <div className="inputDiv">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <input type="text" placeholder='Your Name*' className='form-control' {...register("name", { required: true })} />
                                <p className="errorPara">
                                    {
                                        errors.name && errors.name.message
                                    }
                                </p>
                            </div>
                            <div className="col-md-6 col-12">
                                <input type="email" placeholder='Your Email*' className='form-control' />
                            </div>
                            <div className="col-md-6 col-12">
                                <input type="text" placeholder='Subject*' className='form-control' />
                            </div>
                            <div className="col-md-6 col-12">
                                <input type="text" placeholder='Phone*' className='form-control' />
                            </div>
                        </div>
                        <textarea rows="6" className='form-control textArea'></textarea>

                        <div className="sendMsgDiv">
                            <button className='sendMsgBtn'>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}