import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
export default function BasicButton({ pathTo, children, customClass }) {
    return (
        <>
            <Link
                to={pathTo}
                className={`px-6 cursor-pointer rounded py-1.5 ${customClass}`}
            >
                {children}
            </Link>
        </>
    )
}
