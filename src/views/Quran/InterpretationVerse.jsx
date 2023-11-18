import { useParams } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'
import InterpretationContainer from '../../containers/Quran/InterpretationContainer'

export default function InterpretationVerse() {
    const { nomorSurah } = useParams()
    return (
        <>
            <MainLayout
                pathTo={`/ruang-muslim-v1/quran-digital/surah/${nomorSurah}`}
            >
                <InterpretationContainer />
            </MainLayout>
        </>
    )
}
