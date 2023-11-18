/* eslint-disable react/prop-types */
// import HTMLReactParser from 'html-react-parser'

import { useRef, useState } from 'react'
import { Divider } from '@chakra-ui/react'
import { AiOutlineHeart } from 'react-icons/ai'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { LuDot } from 'react-icons/lu'
import {
    FiBookmark,
    FiPauseCircle,
    FiPlayCircle,
    FiShare2,
} from 'react-icons/fi'
import BasicButton from '../Button/BasicButton'

export default function SurahDescriptionBox({ surah }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(null)

    const playAudio = () => {
        const audio = audioRef.current

        if (audio) {
            if (isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <>
            <section className='w-full h-auto flex flex-col gap-4 bg-white p-7 rounded-lg shadow'>
                <div className='text-center flex flex-col gap-1.5'>
                    <h1 className='text-2xl'>
                        Q.S. {surah.namaLatin} ({surah.arti})
                    </h1>
                    <div className='flex gap-2 justify-center items-center'>
                        <span className=''>
                            {surah.tempatTurun === 'Mekah'
                                ? 'Makkiyah'
                                : 'Madaniyah'}
                        </span>
                        <LuDot className='text-xl' />
                        <span className=''>{surah.jumlahAyat} Ayat</span>
                    </div>
                </div>
                <Divider></Divider>
                <div className=''>
                    <span
                        dangerouslySetInnerHTML={{ __html: surah.deskripsi }}
                        className='text-justify block leading-7'
                    ></span>
                </div>
                <Divider></Divider>
                <div className='w-full justify-between flex'>
                    <div className='flex w-1/3'>
                        {surah.suratSebelumnya && (
                            <>
                                <BasicButton
                                    pathTo={`/ruang-muslim-v1/quran-digital/surah/${surah.suratSebelumnya.nomor}`}
                                    customClass={
                                        'text-sm px-2 py-1 primary__gradient text-white bg-white shadow transition-all duration-300 rounded-sm flex justify-between gap-2'
                                    }
                                >
                                    <HiArrowNarrowLeft className='text-lg' />
                                    <span>
                                        {surah.suratSebelumnya.namaLatin}
                                    </span>
                                </BasicButton>
                            </>
                        )}
                    </div>
                    <div className='flex w-1/3 justify-center items-center'>
                        <div className='flex gap-5 items-center'>
                            {isPlaying ? (
                                <FiPauseCircle
                                    className='text-2xl'
                                    onClick={() => playAudio()}
                                />
                            ) : (
                                <FiPlayCircle
                                    className='text-2xl cursor-pointer'
                                    onClick={() => playAudio()}
                                />
                            )}
                            <audio
                                ref={audioRef}
                                className={`w-full sr-only h-10`}
                                src={surah.audioFull['01']}
                                controls
                            />
                            <AiOutlineHeart className='text-2xl cursor-pointer' />
                            <FiBookmark className='text-2xl cursor-pointer opacity-90' />
                            <FiShare2 className='text-xl cursor-pointer' />
                        </div>
                    </div>
                    <div className='flex w-1/3 justify-end'>
                        {surah.suratSelanjutnya && (
                            <>
                                <BasicButton
                                    pathTo={`/ruang-muslim-v1/quran-digital/surah/${surah.suratSelanjutnya.nomor}`}
                                    customClass={
                                        'text-sm px-2 py-1 primary__gradient text-white bg-white shadow transition-all duration-300 rounded-sm flex items-center justify-between gap-2'
                                    }
                                >
                                    <span>
                                        {surah.suratSelanjutnya.namaLatin}
                                    </span>
                                    <HiArrowNarrowRight className='text-lg' />
                                </BasicButton>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
