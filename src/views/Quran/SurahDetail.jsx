import MainLayout from '../../layouts/MainLayout'
import SurahDetailContainer from '../../containers/Quran/SurahDetailContainer'
import ScrollIndicator from '../../components/Indicator/ScrollIndicator'

export default function SurahDetail() {
    return (
        <>
            <ScrollIndicator />
            <MainLayout pathTo={'/ruang-muslim-v1/quran-digital/surah'}>
                <SurahDetailContainer />
            </MainLayout>
        </>
    )
}
