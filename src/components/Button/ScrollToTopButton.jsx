import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { motion, useAnimation } from 'framer-motion'

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false)
    const controls = useAnimation()

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > window.innerHeight)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollToTop = () => {
        controls.start({
            y: 0,
            transition: { duration: 0.5, ease: 'easeInOut' },
        })
    }

    return (
        <motion.button
            className={`fixed bottom-6 right-6 z-50 p-3 bg-blue-500 text-white rounded-full transition-opacity ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
        >
            <FaArrowUp />
        </motion.button>
    )
}
