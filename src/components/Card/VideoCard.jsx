/* eslint-disable react/prop-types */

import { useRef, useState } from 'react'
import {
    BsFillPlayCircleFill,
    BsPauseCircleFill,
    BsThreeDotsVertical,
} from 'react-icons/bs'

export default function VideoCard({ children }) {
    return (
        <>
            <div className='w-full h-28 relative justify-between flex'>
                <div className='flex gap-5 items-center'>{children}</div>
                <BsThreeDotsVertical className='text-xl shrink-0 mt-4 cursor-pointer' />
            </div>
        </>
    )
}

export function Video({ nomor, audio, children }) {
    const [currentlyPlaying, setCurrentlyPlaying] = useState(null)
    const audioRefs = useRef({})

    const playAudio = (url) => {
        const audio = audioRefs.current[url]
        if (audio) {
            if (currentlyPlaying === url) {
                if (audio.paused) {
                    audio.play()
                } else {
                    audio.pause()
                    setCurrentlyPlaying(null)
                }
            } else {
                if (currentlyPlaying) {
                    const currentlyPlayingAudio =
                        audioRefs.current[currentlyPlaying]
                    if (currentlyPlayingAudio) {
                        currentlyPlayingAudio.pause()
                    }
                }
                audio.play()
                setCurrentlyPlaying(url)
            }
        }
    }

    return (
        <>
            <div className='h-28 w-28 aspect-square shrink-0 relative grid place-items-center rounded-2xl bg-stone-200 overflow-hidden'>
                {children}
                <div className='z-10 absolute'>
                    {currentlyPlaying === nomor ? (
                        <BsPauseCircleFill
                            className='text-white text-3xl cursor-pointer'
                            onClick={() => playAudio(nomor)}
                        />
                    ) : (
                        <BsFillPlayCircleFill
                            className='text-white text-3xl cursor-pointer'
                            onClick={() => playAudio(nomor)}
                        />
                    )}
                    <audio
                        ref={(e) => (audioRefs.current[nomor] = e)}
                        className={`w-full sr-only h-10`}
                        src={audio}
                        controls
                    />
                </div>
            </div>
        </>
    )
}

export function Description({ children }) {
    return (
        <>
            <div className='flex flex-col gap-1.5 max-w-[13rem] items-start'>
                {children}
            </div>
        </>
    )
}

VideoCard.Video = Video
VideoCard.Description = Description
