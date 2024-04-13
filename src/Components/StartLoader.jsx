import React from 'react'
import { name } from '../Constants/Constants'

export default function StartLoader() {
    return (
        <div className="startLoader d-flex justify-content-center align-items-center flex-column py-5">
            <div className='loader'></div>
            <h1>
                &lt;{
                    name
                } /&gt;
            </h1>
        </div>
    )
}