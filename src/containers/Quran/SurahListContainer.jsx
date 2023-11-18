/* eslint-disable no-unused-vars */
import axios from 'axios'
import { useState, useEffect } from 'react'
import SurahSkeleton from '../../components/Skeleton/SurahCardSkeleton'
import SurahCard from '../../components/Card/SurahCard'
import FilterSurahBox from '../../components/Box/FilterSurahBox'
import InternalError from '../../assets/svg/undraw_cancel_re_pkdm.svg'

export default function SurahListContainer() {
    const [allSurah, setAllSurah] = useState([])
    const [filterBy, setFilterBy] = useState('No Urut')
    const [gridLayout, setGridLayout] = useState(true)
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

    const handleListLayout = (layoutType) => {
        setGridLayout(layoutType)
        console.log(layoutType)
        console.log(gridLayout)
    }

    const handleFilter = (filterType) => {
        setFilterBy(filterType)
    }

    const filteredSurah = () => {
        switch (filterBy) {
            case 'Abjad':
                return allSurah.sort((a, b) =>
                    a.namaLatin.localeCompare(b.namaLatin)
                )
            case 'Jumlah Ayat':
                return allSurah.sort((a, b) => a.jumlahAyat - b.jumlahAyat)
            default:
                return allSurah.sort((a, b) => a.nomor - b.nomor)
        }
    }

    return (
        <>
            {/* Surah List Section */}
            <section className='w-full flex flex-col gap-10'>
                {isOffline ? (
                    <>
                        <FilterSurahBox
                            handleListLayout={handleListLayout}
                            handleFilter={handleFilter}
                            gridLayout={gridLayout}
                            filterBy={filterBy}
                        ></FilterSurahBox>

                        {/* Surah Grid */}
                        <div
                            className={`w-full h-auto gap-2 xl:gap-5 ${
                                gridLayout
                                    ? 'flex flex-col xl:grid xl:grid-cols-4'
                                    : 'flex flex-col'
                            }`}
                        >
                            {isLoaded
                                ? filteredSurah().map((surah) => (
                                      <>
                                          <SurahCard
                                              key={surah.nomor}
                                              surah={surah}
                                              gridLayout={gridLayout}
                                          ></SurahCard>
                                      </>
                                  ))
                                : Array.from({ length: 12 }, (_, index) => (
                                      <SurahSkeleton
                                          key={index}
                                          isLoaded={isLoaded}
                                          gridLayout={gridLayout}
                                      ></SurahSkeleton>
                                  ))}
                        </div>
                        {/* End Surah Grid */}
                    </>
                ) : (
                    <div className='flex flex-col gap-5 h-[30rem] items-center justify-center'>
                        <img
                            src={InternalError}
                            alt='No signal'
                            className='w-80'
                        />
                        <span className='text-xl'>
                            Server error! coba kembali nanti
                        </span>
                    </div>
                )}
            </section>
            {/* End Surah List Section */}
        </>
    )
}
