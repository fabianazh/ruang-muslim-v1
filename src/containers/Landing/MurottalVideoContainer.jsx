import axios from 'axios'
import { useState, useEffect } from 'react'
import VideosBox from '../../components/Box/VideosBox'
import SeeAllButton from '../../components/Button/SeeAllButton'
import VideoCard from '../../components/Card/VideoCard'
import InternalError from '../../assets/svg/undraw_cancel_re_pkdm.svg'
import { LuDot } from 'react-icons/lu'
import VideoCardSkeleton from '../../components/Skeleton/VideoCardSkeleton'
import { Link } from 'react-router-dom'

export default function MurottalVideoContainer() {
    const [allSurah, setAllSurah] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [isOffline, setIsOffline] = useState(true)

    useEffect(() => {
        getAllSurah()
    }, [])

    const getAllSurah = async () => {
        try {
            setIsLoaded(false)
            const response = await axios.get('https://equran.id/api/v2/surat')
            setAllSurah(response.data.data)
        } catch (err) {
            console.log(err)
            setIsOffline(false)
        } finally {
            setIsLoaded(true)
        }
    }

    return (
        <>
            <VideosBox>
                <VideosBox.Heading>
                    <span className='font-extrabold'>Murottal Surah</span>
                    <SeeAllButton pathTo={'/quran-digital/surah'}>
                        Lihat semua
                    </SeeAllButton>
                </VideosBox.Heading>
                <VideosBox.Content>
                    {isOffline ? (
                        isLoaded ? (
                            allSurah.slice(4, 7).map((surah, index) => (
                                <VideoCard key={index}>
                                    <VideoCard.Video
                                        nomor={surah.nomor}
                                        audio={surah.audioFull['01']}
                                    ></VideoCard.Video>
                                    <VideoCard.Description>
                                        <Link
                                            to={`/quran-digital/surah/${surah.nomor}`}
                                            className='block text-lg leading-7 font-bold text-Green-500'
                                        >
                                            Q.S. {surah.namaLatin} ({surah.arti}
                                            )
                                        </Link>
                                        <div className='font-bold flex gap-0.5 items-center text-stone-800'>
                                            <span>
                                                {surah.tempatTurun === 'Mekah'
                                                    ? 'Makkiyah'
                                                    : 'Madaniyah'}
                                            </span>
                                            <LuDot className='text-xl' />
                                            <span>{surah.jumlahAyat} Ayat</span>
                                        </div>
                                    </VideoCard.Description>
                                </VideoCard>
                            ))
                        ) : (
                            Array.from({ length: 3 }, (_, index) => (
                                <VideoCardSkeleton
                                    key={index}
                                    isLoaded={isLoaded}
                                ></VideoCardSkeleton>
                            ))
                        )
                    ) : (
                        <div className='flex flex-col mx-auto gap-4 items-center'>
                            <img className='w-56' src={InternalError} />
                            <span className='text-lg'>
                                Server error! coba lagi nanti
                            </span>
                        </div>
                    )}
                </VideosBox.Content>
            </VideosBox>
        </>
    )
}
