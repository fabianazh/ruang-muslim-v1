import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './views/Landing'
import QuranDigital from './views/Quran/QuranDigital'
import SurahDetail from './views/Quran/SurahDetail'
import NotFound from './views/NotFound'
import InterpretationVerse from './views/Quran/InterpretationVerse'
import Login from './views/Auth/Login'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path='/ruang-muslim-v1/'
                        element={<Landing />}
                    ></Route>
                    <Route
                        exact
                        path='/ruang-muslim-v1/login'
                        element={<Login />}
                    ></Route>
                    <Route path='/ruang-muslim-v1/quran-digital/'>
                        <Route
                            exact
                            path='surah'
                            element={<QuranDigital />}
                        ></Route>
                        <Route
                            path='surah/:nomorSurah'
                            element={<SurahDetail />}
                        ></Route>
                        <Route
                            path='surah/:nomorSurah/tafsir/:nomorAyat'
                            element={<InterpretationVerse />}
                        ></Route>
                    </Route>
                    <Route path='*' element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
