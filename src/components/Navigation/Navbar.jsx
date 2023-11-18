/* eslint-disable react/prop-types */

export default function Navbar({ children }) {
    return (
        <>
            <header className='w-full flex z-50 bg-white shadow-md justify-between items-center top-0 px-4 xl:px-10 h-14 xl:h-16 fixed'>
                {children}
            </header>
        </>
    )
}

export function LeftContent({ customClass, children }) {
    return (
        <>
            <div className={`${customClass}`}>{children}</div>
        </>
    )
}

export function CenterContent({ customClass, children }) {
    return (
        <>
            <div className={`${customClass}`}>{children}</div>
        </>
    )
}

export function RightContent({ customClass, children }) {
    return (
        <>
            <div className={`${customClass}`}>{children}</div>
        </>
    )
}

Navbar.LeftContent = LeftContent
Navbar.CenterContent = CenterContent
Navbar.RightContent = RightContent
