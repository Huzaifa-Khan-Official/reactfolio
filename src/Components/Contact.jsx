import React, { useState } from 'react'
import { LuPhoneCall } from "react-icons/lu";
import { BsChatLeftText } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { contact } from '../Constants/Constants';
import { useForm } from 'react-hook-form';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../Configuration/Configuration';
import moment from 'moment';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion'

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm()

    const onSubmit = async (data) => {
        try {
            setIsLoading(true)
            data.time = moment().format("Do MMMM YYYY");
            await addDoc(collection(db, "data"), data);
            setIsLoading(false)
            toast.success("Message submit successfully!")
        } catch (e) {
            setIsLoading(false)
            toast.error("Something went wrong. Please try later!")
        }
    }

    return (
        <div className='row'>
            <motion.div
                className="col-lg-5 col-md-12"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
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
            </motion.div>

            <div className="col-lg-7 col-md-12 formDiv">
                <motion.div
                    className="getInTouchDiv"
                    initial={{ opacity: 0, x: 75 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h6>
                        Contact us
                    </h6>
                    <h2>
                        Let me know here
                    </h2>
                </motion.div>

                <motion.div
                    className="inputDiv"
                    initial={{ opacity: 0, x: 75 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <input type="text" placeholder='Your Name*' className='form-control' {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Please enter your name."
                                    }
                                })} />
                                <p className="errorPara">
                                    {
                                        errors.name && errors.name.message
                                    }
                                </p>
                            </div>
                            <div className="col-md-6 col-12">
                                <input type="email" placeholder='Your Email*' className='form-control'
                                    {
                                    ...register("email",
                                        {
                                            required: {
                                                value: true,
                                                message: "Please enter your email."
                                            }
                                        }
                                    )
                                    }
                                />
                                <p className="errorPara">
                                    {
                                        errors.email && errors.email.message
                                    }
                                </p>
                            </div>
                            <div className="col-md-6 col-12">
                                <input type="text" placeholder='Subject*' className='form-control'
                                    {
                                    ...register("subject", {
                                        required: {
                                            value: true,
                                            message: "Please enter subject."
                                        }
                                    })
                                    }
                                />
                                <p className="errorPara">
                                    {
                                        errors.subject && errors.subject.message
                                    }
                                </p>
                            </div>
                            <div className="col-md-6 col-12">
                                <input type="text" placeholder='Phone*' className='form-control'
                                    {
                                    ...register("phone", {
                                        required: {
                                            value: true,
                                            message: "Please enter contact number."
                                        }
                                    })
                                    }
                                />
                                <p className="errorPara">
                                    {
                                        errors.phone && errors.phone.message
                                    }
                                </p>
                            </div>
                        </div>
                        <textarea rows="6" className='form-control textArea' placeholder='Write your message here...'
                            {
                            ...register("message", {
                                required: {
                                    value: true,
                                    message: "Please enter a message."
                                }
                            })
                            }
                        ></textarea>
                        <p className="errorPara">
                            {
                                errors.message && errors.message.message
                            }
                        </p>

                        <div className="sendMsgDiv">
                            <button className='sendMsgBtn'>
                                {
                                    isLoading ? (
                                        <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    ) : "Send Message"
                                }
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div >
        </div >
    )
}