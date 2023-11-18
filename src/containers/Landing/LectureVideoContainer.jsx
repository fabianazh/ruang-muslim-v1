import VideosBox from '../../components/Box/VideosBox'
import SeeAllButton from '../../components/Button/SeeAllButton'
import VideoCard from '../../components/Card/VideoCard'

export default function LectureVideoContainer() {
    return (
        <>
            <VideosBox>
                <VideosBox.Heading>
                    <span className='font-extrabold'>Video Kajian</span>
                    <SeeAllButton pathTo={'/'}>Lihat semua</SeeAllButton>
                </VideosBox.Heading>
                <VideosBox.Content>
                    {Array.from({ length: 3 }, (_, index) => (
                        <VideoCard key={index}>
                            <VideoCard.Video></VideoCard.Video>
                            <VideoCard.Description>
                                <span className='block text-lg leading-7 tracking-tight font-bold text-Green-500'>
                                    Lorem ipsum doler sit amet.
                                </span>
                                <span className='font-bold text-stone-800'>
                                    Ustadz Ihsan Fauzi
                                </span>
                            </VideoCard.Description>
                        </VideoCard>
                    ))}
                </VideosBox.Content>
            </VideosBox>
        </>
    )
}
