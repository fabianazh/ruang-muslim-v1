import SidebarLayout from '../layouts/SidebarLayout'
import HeroContainer from '../containers/Landing/HeroContainer'
import MurottalVideoContainer from '../containers/Landing/MurottalVideoContainer'
import LectureVideoContainer from '../containers/Landing/LectureVideoContainer'

export default function Landing() {
    return (
        <>
            <SidebarLayout>
                <HeroContainer></HeroContainer>
                <MurottalVideoContainer></MurottalVideoContainer>
                <LectureVideoContainer></LectureVideoContainer>
            </SidebarLayout>
        </>
    )
}
