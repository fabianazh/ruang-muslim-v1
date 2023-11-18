/* eslint-disable react/prop-types */
import { Divider } from '@chakra-ui/react'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import BasicButton from '../Button/BasicButton'

export default function InterpretationCard({ surah }) {
    return (
        <>
            <div className='w-full h-auto flex flex-col gap-5 bg-white p-7 pb-4 rounded-lg shadow'>
                <div className='text-center flex flex-col gap-2'>
                    <h1 className='text-2xl'>
                        Q.S.{' '}
                        {surah.surah ? surah.surah.name.transliteration.id : ''}{' '}
                        Ayat {surah.number ? surah.number.inSurah : ''}
                    </h1>
                </div>
                <Divider></Divider>
                <div className='flex flex-col gap-8 w-full pb-6'>
                    <div className='flex flex-col gap-4 w-full'>
                        <span
                            className='text-xl xl:text-4xl block font-uthmanic text-right font-light'
                            style={{ lineHeight: '4rem' }}
                        >
                            {surah.text ? surah.text.arab : ''}
                        </span>
                        <span className='text-justify'>
                            {surah.text ? surah.text.transliteration.en : ''}
                        </span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='font-bold text-lg'>Terjemahan</span>
                        <span className='text-justify'>
                            {surah.translation ? surah.translation.id : ''}
                        </span>
                    </div>
                    <Divider></Divider>
                    <div className='flex flex-col gap-2'>
                        <span className='font-bold text-lg'>Tafsir</span>
                        <span className='text-justify'>
                            {surah.tafsir ? surah.tafsir.id.short : ''}
                        </span>
                        <span className='text-2xl'>{'...'}</span>
                        <span className='text-justify'>
                            {surah.tafsir ? surah.tafsir.id.long : ''}
                        </span>
                    </div>
                    <BasicButton
                        pathTo={`/ruang-muslim-v1/quran-digital/surah/${
                            surah.surah ? surah.surah.number : ''
                        }/`}
                        customClass={
                            'text-sm px-2 flex gap-2 w-fit py-2.5 text-white bg-gradient-to-br from-Green-300 via-Green-300 to-Green-400 transition-all duration-300 rounded'
                        }
                    >
                        <HiArrowNarrowLeft className='text-xl' />
                        <span>
                            Kembali Ke Surah{' '}
                            {surah.surah
                                ? surah.surah.name.transliteration.id
                                : ''}
                        </span>
                    </BasicButton>
                </div>
            </div>
        </>
    )
}
