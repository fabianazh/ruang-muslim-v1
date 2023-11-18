import { Link } from 'react-router-dom'

export default function RuangMuslimLogo() {
    return (
        <>
            <Link
                to={'/ruang-muslim-v1/'}
                className='block font-bold text-Green-500 hover:text-Green-400 duration-300 transition-all'
            >
                RuangMuslim.
            </Link>
        </>
    )
}
