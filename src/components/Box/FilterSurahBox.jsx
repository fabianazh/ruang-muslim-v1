/* eslint-disable react/prop-types */
import { TbGridDots } from 'react-icons/tb'
import { TbMenu2 } from 'react-icons/tb'
import FilterButton from '../../components/Button/FilterButton'

export default function FilterSurahBox({
    handleListLayout,
    handleFilter,
    gridLayout,
    filterBy,
}) {
    return (
        <>
            <div className='w-full hidden xl:flex justify-between items-center h-auto px-3'>
                {/* List Layout */}
                <div className='flex gap-3 items-center'>
                    <TbGridDots
                        onClick={() => handleListLayout(true)}
                        className={`cursor-pointer text-4xl ${
                            gridLayout ? 'text-black' : 'opacity-20'
                        }`}
                    />
                    <TbMenu2
                        onClick={() => handleListLayout(false)}
                        className={`cursor-pointer text-4xl ${
                            gridLayout ? 'opacity-20' : 'text-black text-5xl'
                        }`}
                    />
                </div>
                {/* End List Layout */}

                {/* List Filter */}
                <div className='flex gap-3'>
                    <FilterButton
                        customClass={`${
                            filterBy === 'No Urut' ? 'bg-white' : 'bg-stone-200'
                        } `}
                        handleFilter={handleFilter}
                        filterValue={'No Urut'}
                    ></FilterButton>
                    <FilterButton
                        customClass={`${
                            filterBy === 'Abjad' ? 'bg-white' : 'bg-stone-200'
                        } `}
                        handleFilter={handleFilter}
                        filterValue={'Abjad'}
                    ></FilterButton>
                    <FilterButton
                        customClass={`${
                            filterBy === 'Jumlah Ayat'
                                ? 'bg-white'
                                : 'bg-stone-200'
                        } `}
                        handleFilter={handleFilter}
                        filterValue={'Jumlah Ayat'}
                    ></FilterButton>
                </div>
                {/* End List Filter */}
            </div>
        </>
    )
}
