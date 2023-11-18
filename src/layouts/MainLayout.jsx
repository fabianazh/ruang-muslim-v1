/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import Navbar from '../components/Navigation/Navbar'
import AvatarDropdown from '../components/Dropdown/AvatarDropdown'
import RuangMuslimIcon from '../components/Icon/RuangMuslimIcon'

export default function MainLayout({ pathTo, children }) {
    // const goBack = () => {
    //     window.history.length > 1
    //         ? window.history.back()
    //         : window.location.replace('/')
    // }

    return (
        <>
            {/* End Navbar */}
            <Navbar>
                <Navbar.LeftContent
                    customClass={'flex gap-24 border-black items-center'}
                >
                    <Link to={pathTo} className='block text-2xl font-semibold'>
                        <HiArrowNarrowLeft />
                    </Link>
                </Navbar.LeftContent>
                <Navbar.CenterContent>
                    <RuangMuslimIcon />
                </Navbar.CenterContent>
                <Navbar.RightContent>
                    <AvatarDropdown></AvatarDropdown>
                </Navbar.RightContent>
            </Navbar>
            {/* End Navbar */}

            {/* Main Content */}
            <main className='pt-24 pb-12 bg-Gray-100'>{children}</main>
            {/* End Main Content */}
        </>
    )
}
