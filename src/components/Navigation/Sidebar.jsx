/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa'
import { Divider } from '@chakra-ui/react'

export function Menu({ customClass, children }) {
    return (
        <>
            <div className={`sidebar__menu ${customClass}`}>{children}</div>
        </>
    )
}

export function ItemContainer({ children }) {
    return (
        <>
            <div className={`flex flex-col gap-2`}>{children}</div>
        </>
    )
}

export function Heading({ children }) {
    return (
        <>
            <span
                className={`block text-stone-500 font-semibold sidebar__heading `}
            >
                {children}
            </span>
        </>
    )
}

export function Item({ pathTo, customClass, children }) {
    return (
        <>
            <NavLink
                to={pathTo}
                className={({ isActive }) =>
                    isActive
                        ? `active sidebar__item group ${customClass}`
                        : `sidebar__item group ${customClass}`
                }
            >
                {children}
            </NavLink>
        </>
    )
}

export default function Sidebar({ sideIsOpen, openSidebar, children }) {
    return (
        <>
            {/* Sidebar */}
            <motion.aside
                className={`mt-[3.75rem] divide-y-2 overflow-y-visible items-center hidden xl:flex flex-col z-40 bg-white overflow-x-visible h-auto min-h-screen fixed ${
                    sideIsOpen ? 'sidebar__open' : 'sidebar__closed'
                }`}
            >
                {/* Button */}
                <div
                    onClick={openSidebar}
                    className={`absolute -right-4 z-[100] top-1/2 -translate-y-1/2 bg-Green-400 text-white w-8 aspect-square grid place-items-center rounded-full text-base cursor-pointer`}
                >
                    <FaChevronLeft
                        className={`transition-all duration-300 ${
                            sideIsOpen ? '' : 'rotate-180'
                        }`}
                    />
                </div>
                {/* End Button */}

                {children}

                <div className='sidebar__footer flex pt-10 w-full justify-center'>
                    <span className='text-sm'>&copy; 2023 Fabianazh.</span>
                </div>
            </motion.aside>
            {/* End Sidebar */}
        </>
    )
}

Sidebar.Menu = Menu
Sidebar.ItemContainer = ItemContainer
Sidebar.Heading = Heading
Sidebar.Item = Item
