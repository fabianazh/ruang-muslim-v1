import YTVideoCard from '../../components/Card/YTVideoCard'
import BasicButton from '../../components/Button/BasicButton'

export default function HeroContainer() {
    return (
        <>
            {/* Hero */}
            <section className='mb-40 relative flex flex-col primary__gradient rounded-md text-white px-14 pt-10 pb-56'>
                {/* Hero Text */}
                <span className='text-lg block mb-2'>
                    Assalamualaikum Fabian,
                </span>
                <span className='text-4xl font-bold block mb-4'>
                    Yuk! Dengerin Kajian
                </span>
                <span className='text-xl tracking-wide'>
                    Mulailah hari dengan bismillah
                </span>
                {/* End Hero Text */}

                {/* Hero Content */}
                <div className='w-11/12 text-black px-8 py-7 flex flex-col gap-7 left-1/2 -translate-x-1/2 h-auto bg-Gray-50 z-10 absolute rounded-md translate-y-36 shadow hero__content'>
                    <div className='flex gap-7 justify-center'>
                        <YTVideoCard>
                            <iframe
                                src='https://www.youtube.com/embed/izYUMrsvVDQ?si=xMAwoPq4tO6-iXQv'
                                title='YouTube video player'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                allowFullScreen
                                className='w-full h-full'
                            ></iframe>
                        </YTVideoCard>
                        <YTVideoCard>
                            <iframe
                                src='https://www.youtube.com/embed/pzP33yqnr70?si=Keb7SYRRSrc3bijD'
                                title='YouTube video player'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                allowFullScreen
                                className='w-full h-full'
                            ></iframe>
                        </YTVideoCard>
                        <YTVideoCard>
                            <iframe
                                src='https://www.youtube.com/embed/_gCcMSoWi5U?si=OnVClJmR0x3ptfHj'
                                title='YouTube video player'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                allowFullScreen
                                className='w-full h-full'
                            ></iframe>
                        </YTVideoCard>
                    </div>
                    <div className='w-full h-auto flex justify-end gap-12 items-center'>
                        <BasicButton
                            pathTo={'/'}
                            customClass={
                                'text-base px-6 py-2 text-white bg-gradient-to-br from-Green-300 via-Green-300 to-Green-400 hover.bg-black transition-all duration-300'
                            }
                        >
                            Lihat Semua
                        </BasicButton>
                    </div>
                </div>
                {/* EndHero Content */}
            </section>
            {/* Hero */}
        </>
    )
}
