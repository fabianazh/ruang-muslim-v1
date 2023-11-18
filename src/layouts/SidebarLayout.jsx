/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FiHome } from 'react-icons/fi'
import { HiOutlineDownload } from 'react-icons/hi'
import { BsCalendar3, BsBook } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { LuHistory } from 'react-icons/lu'
import Navbar from '../components/Navigation/Navbar'
import Sidebar from '../components/Navigation/Sidebar'
import AvatarDropdown from '../components/Dropdown/AvatarDropdown'
import RuangMuslimIcon from '../components/Icon/RuangMuslimIcon'
import BasicButton from '../components/Button/BasicButton'

export default function SidebarLayout({ children }) {
    const [sideIsOpen, setSideIsOpen] = useState(true)

    function openSidebar() {
        sideIsOpen === true ? setSideIsOpen(false) : setSideIsOpen(true)
    }

    return (
        <>
            {/* Navbar */}
            <Navbar>
                <Navbar.LeftContent
                    customClass={'flex gap-24 border-black items-center'}
                >
                    <RuangMuslimIcon />
                </Navbar.LeftContent>
                <Navbar.RightContent>
                    <AvatarDropdown></AvatarDropdown>
                    {/* <BasicButton customClass={'text-sm'} pathTo={'/login'}>
                        Login
                    </BasicButton> */}
                </Navbar.RightContent>
            </Navbar>
            {/* Navbar */}

            {/* Sidebar */}
            <Sidebar sideIsOpen={sideIsOpen} openSidebar={openSidebar}>
                <Sidebar.Menu>
                    <Sidebar.Heading>MENU</Sidebar.Heading>
                    <Sidebar.ItemContainer>
                        <Sidebar.Item pathTo={'/ruang-muslim-v1/'}>
                            <FiHome className='text-2xl' />
                            <span className={'sidebar__text'}>
                                Beranda
                            </span>{' '}
                        </Sidebar.Item>

                        <Sidebar.Item
                            pathTo={'/ruang-muslim-v1/quran-digital/surah'}
                            customClass={'-translate-x-[2px]'}
                        >
                            <BsBook className='text-2xl' />
                            <span className={'sidebar__text'}>
                                Qur&apos;an Digital
                            </span>{' '}
                        </Sidebar.Item>

                        <Sidebar.Item pathTo={'/ruang-muslim-v1/jadwal-sholat'}>
                            <BsCalendar3 className='text-xl' />
                            <span className={'sidebar__text'}>
                                Jadwal Sholat
                            </span>{' '}
                        </Sidebar.Item>
                    </Sidebar.ItemContainer>
                </Sidebar.Menu>
                <Sidebar.Menu>
                    <Sidebar.Heading>AKTIVITAS</Sidebar.Heading>
                    <Sidebar.ItemContainer>
                        <Sidebar.Item pathTo={'/ruang-muslim-v1/riwayat'}>
                            <LuHistory className='text-2xl' />
                            <span className={'sidebar__text'}>
                                Riwayat
                            </span>{' '}
                        </Sidebar.Item>

                        <Sidebar.Item
                            pathTo={'/ruang-muslim-v1/koleksi/disukai'}
                        >
                            <AiOutlineHeart className='text-2xl' />
                            <span className={'sidebar__text'}>
                                Disukai
                            </span>{' '}
                        </Sidebar.Item>

                        <Sidebar.Item pathTo={'/ruang-muslim-v1/download'}>
                            <HiOutlineDownload className='text-2xl' />
                            <span className={'sidebar__text'}>
                                Download
                            </span>{' '}
                        </Sidebar.Item>
                    </Sidebar.ItemContainer>
                </Sidebar.Menu>
            </Sidebar>
            {/* End Sidebar */}

            {/* Content */}
            <main
                className={`${
                    sideIsOpen ? 'xl:pl-60 xl:pr-10' : 'sidebar__closed-content'
                } w-screen min-h-screen text-black pt-[6rem] pb-16 h-auto bg-Gray-100 z-0`}
            >
                {children}
            </main>
            {/* End Content */}
        </>
    )
}
