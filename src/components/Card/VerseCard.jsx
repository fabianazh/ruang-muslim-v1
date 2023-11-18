/* eslint-disable react/prop-types */
import { useRef, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import {
    FiBookmark,
    FiPauseCircle,
    FiPlayCircle,
    FiShare2,
} from 'react-icons/fi'
import NumberIcon from '../Icon/NumberIcon'
import BasicButton from '../Button/BasicButton'

export default function VerseCard({ children }) {
    return (
        <>
            <div className='bg-white flex flex-col px-6 pt-7 pb-7 rounded-lg shadow'>
                {children}
            </div>
        </>
    )
}

export function TopContent({ number, text }) {
    return (
        <>
            <div className='flex justify-between items-start w-full gap-14'>
                {/* Number Verse */}
                <NumberIcon customClass={'w-9 h-9'}>
                    <span className='text-sm xl:text-lg'>{number}</span>
                </NumberIcon>
                {/* End Number Verse */}

                {/* Verse */}
                <span
                    className='text-xl xl:text-4xl block font-uthmanic text-right -translate-y-3 font-light'
                    style={{ lineHeight: '4rem' }}
                >
                    {text}
                </span>

                {/* End Verse */}
            </div>
        </>
    )
}

export function CenterContent({ text, translate }) {
    return (
        <>
            <div className='flex flex-col gap-4 w-full pb-6'>
                <span className='text-justify'> {text} </span>
                <div className='flex flex-col gap-2'>
                    <span className='font-bold text-lg'>Terjemahan</span>
                    <span className='text-justify'>{translate}</span>
                </div>
            </div>
        </>
    )
}

export function BottomContent({ surahNumber, number, audio }) {
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
            <div className='flex justify-between w-full pt-6 items-center'>
                <div className='flex gap-5 items-center'>
                    {currentlyPlaying === number ? (
                        <FiPauseCircle
                            className='text-2xl'
                            onClick={() => playAudio(number)}
                        />
                    ) : (
                        <FiPlayCircle
                            className='text-2xl cursor-pointer'
                            onClick={() => playAudio(number)}
                        />
                    )}
                    <audio
                        ref={(el) => (audioRefs.current[number] = el)}
                        className={`w-full sr-only h-10`}
                        src={audio}
                        controls
                    />
                    <AiOutlineHeart className='text-2xl cursor-pointer' />
                    <FiBookmark className='text-2xl cursor-pointer opacity-90' />
                    <FiShare2 className='text-xl cursor-pointer' />
                </div>
                <div className='flex gap-5 items-center'>
                    <BasicButton
                        pathTo={`/ruang-muslim-v1/quran-digital/surah/${surahNumber}/tafsir/${number}`}
                        customClass={
                            'text-sm px-2 py-1 text-white bg-gradient-to-br from-Green-300 via-Green-300 to-Green-400 transition-all duration-300 rounded-sm'
                        }
                    >
                        Tafsir Ayat ke {number}
                    </BasicButton>
                </div>
            </div>
        </>
    )
}

VerseCard.TopContent = TopContent
VerseCard.CenterContent = CenterContent
VerseCard.BottomContent = BottomContent
