/* eslint-disable react/prop-types */
import { BiSolidChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function SeeAllButton({ pathTo, customClass, children }) {
    return (
        <>
            <Link
                to={pathTo}
                className={`flex gap-1.5 items-center ${customClass}`}
            >
                {children}
                <BiSolidChevronRight />
            </Link>
        </>
    )
}
