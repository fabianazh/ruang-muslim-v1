/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
// import HTMLReactParser from 'html-react-parser'
import { AiOutlineHeart } from 'react-icons/ai'
import NumberIcon from '../Icon/NumberIcon'

export default function SurahCard({ surah, gridLayout }) {
    const AnimatedLink = motion(Link)
    return (
        <>
            <AnimatedLink
                to={`/ruang-muslim-v1/quran-digital/surah/${surah.nomor}`}
                className={`w-full flex justify-between bg-white hover:bg-stone-100/90 transition-all overflow-hidden rounded-lg shadow-md cursor-pointer flex-col p-5 ${
                    gridLayout ? 'h-32 xl:h-40' : 'h-auto'
                }`}
            >
                <div className='flex justify-between items-start mb-6'>
                    <NumberIcon>{surah.nomor}</NumberIcon>
                    <div className='w-8 text-2xl aspect-square grid place-items-center'>
                        <AiOutlineHeart />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <div className='flex gap-2 items-center'>
                                <span className='text-lg font-bold'>
                                    {surah.namaLatin}
                                </span>
                                <span className='text-xs font-bold'>
                                    ({surah.jumlahAyat} Ayat)
                                </span>
                            </div>
                            <span className='text-sm text-stone-600'>
                                {surah.arti}
                            </span>
                        </div>
                    </div>
                    <span
                        dangerouslySetInnerHTML={{ __html: surah.deskripsi }}
                        className={`${
                            gridLayout
                                ? 'hidden'
                                : 'mt-2 text-justify text-[0.95rem]'
                        }`}
                    ></span>
                </div>
            </AnimatedLink>
        </>
    )
}
