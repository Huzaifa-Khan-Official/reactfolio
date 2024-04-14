import React, { useContext } from 'react'
import { socialLinks } from '../Constants/Constants'
import { Theme } from '../Context/Context';

export default function Footer() {
    // const { darkTheme, setDarkTheme } = useContext(Theme);

    // console.log(darkTheme);
    return (
        <div className='container'>
            <div className="row">
                <div className="col-sm-4 socialLinkList">
                    <ul className='socialLinkList'>
                        {
                            socialLinks.map((socialLink, index) => {
                                return (
                                    <li key={index}>
                                        <a href={socialLink.link} target='_blank' className='d-flex justify-content-center align-items-center'>
                                            {
                                                socialLink.icon
                                            }
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="col-sm-8 copyrightDiv">
                    <h6>
                        Made with love by &nbsp;
                        <a href="https://github.com/Huzaifa-Khan-Official" target='_blank'>
                            Huzaifa Khan
                        </a>
                    </h6>
                    <p>© 2024 - All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}