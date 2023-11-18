/* eslint-disable react/prop-types */
// import { useState, useRef } from 'react'
// import { AiOutlineHeart } from 'react-icons/ai'
// import {
//     BsFillPlayCircleFill,
//     BsPauseCircleFill,
//     BsThreeDotsVertical,
// } from 'react-icons/bs'
// import { TbRewindBackward10, TbRewindForward10 } from 'react-icons/tb'

export default function YTVideoCard({ children }) {
    return (
        <>
            <div className='flex-auto h-48 overflow-hidden rounded-lg shadow-md border'>
                {children}
            </div>
        </>
    )
}
