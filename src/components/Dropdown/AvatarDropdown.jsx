import { Link } from 'react-router-dom'
import {
    Avatar,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
} from '@chakra-ui/react'
import AvatarImage from '../../assets/img/denji.jpg'

export default function AvatarDropdown() {
    return (
        <>
            <div className='hidden xl:flex'>
                <Menu>
                    <MenuButton>
                        <div className='flex gap-3 items-center'>
                            <Avatar size={'sm'} src={AvatarImage} />
                        </div>
                    </MenuButton>
                    <MenuList>
                        <MenuGroup className='text-base' title='Profil'>
                            <Link>
                                <MenuItem className='text-sm'>
                                    Akun Saya
                                </MenuItem>
                            </Link>
                            <Link>
                                <MenuItem className='text-sm'>Koleksi</MenuItem>
                            </Link>
                        </MenuGroup>
                        <MenuDivider />
                        <MenuGroup className='text-base' title='Lainnya'>
                            <Link>
                                <MenuItem className='text-sm'>
                                    Pengaturan
                                </MenuItem>
                            </Link>
                            <Link>
                                <MenuItem className='text-sm'>Logout</MenuItem>
                            </Link>
                        </MenuGroup>
                    </MenuList>
                </Menu>
            </div>
        </>
    )
}
