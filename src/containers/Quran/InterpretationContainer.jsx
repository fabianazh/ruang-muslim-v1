/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import InterpretationCard from '../../components/Card/InterpretationCard'
import InterpretationVerseSkeleton from '../../components/Skeleton/InterpretationVerseSkeleton'

export default function InterprettionContainer() {
    const { nomorSurah, nomorAyat } = useParams()
    const [surah, setSurah] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        getSurah()
    }, [])

    const getSurah = async () => {
        try {
            setIsLoaded(false)
            const response = await axios.get(
                `https://api.quran.gading.dev/surah/${nomorSurah}/${nomorAyat}`
            )
            setSurah(response.data.data)
        } catch (err) {
            console.log(err)
            if (err.response && err.response.status === 404) {
                navigate('/not-found')
            }
        } finally {
            setIsLoaded(true)
        }
    }

    return (
        <>
            <section className='w-9/12 min-h-screen container mx-auto flex'>
                {isLoaded ? (
                    <InterpretationCard surah={surah} />
                ) : (
                    <InterpretationVerseSkeleton />
                )}
            </section>
        </>
    )
}
