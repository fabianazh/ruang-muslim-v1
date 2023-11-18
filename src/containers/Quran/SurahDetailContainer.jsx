/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SurahDescriptionBox from '../../components/Box/SurahDescriptionBox'
import VerseCard from '../../components/Card/VerseCard'
import { Divider } from '@chakra-ui/react'
import VerseCardSkeleton from '../../components/Skeleton/VerseCardSkeleton'
import SurahDescriptionSkeleton from '../../components/Skeleton/SurahDescriptionSkeleton'

export default function SurahDetailContainer() {
    const { nomorSurah } = useParams()
    const [surah, setSurah] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        getSurah()
    }, [nomorSurah])

    const getSurah = async () => {
        try {
            setIsLoaded(false)
            const response = await axios.get(
                `https://equran.id/api/v2/surat/${nomorSurah}`
            )
            setSurah(response.data.data)
        } catch (err) {
            if (err.response && err.response.status === 404) {
                navigate('/not-found')
            }
        } finally {
            setIsLoaded(true)
        }
    }

    return (
        <>
            <section className='w-9/12 min-h-screen container mx-auto flex flex-col gap-5'>
                {isLoaded ? (
                    <SurahDescriptionBox surah={surah} />
                ) : (
                    <SurahDescriptionSkeleton isLoaded={isLoaded} />
                )}
                <div className='flex flex-col gap-5'>
                    {isLoaded
                        ? surah.ayat &&
                          surah.ayat.map((item) => (
                              <VerseCard key={item.nomorAyat}>
                                  <VerseCard.TopContent
                                      number={item.nomorAyat}
                                      text={item.teksArab}
                                  ></VerseCard.TopContent>
                                  <VerseCard.CenterContent
                                      text={item.teksLatin}
                                      translate={item.teksIndonesia}
                                  ></VerseCard.CenterContent>
                                  <Divider></Divider>
                                  <VerseCard.BottomContent
                                      surahNumber={surah.nomor}
                                      number={item.nomorAyat}
                                      audio={item.audio['01']}
                                  ></VerseCard.BottomContent>
                              </VerseCard>
                          ))
                        : Array.from({ length: 4 }, (_, index) => (
                              <VerseCardSkeleton
                                  key={index}
                                  isLoaded={isLoaded}
                              ></VerseCardSkeleton>
                          ))}
                </div>
            </section>
        </>
    )
}
