/* eslint-disable react/prop-types */
import { SkeletonCircle, SkeletonText } from '@chakra-ui/react'

export default function SurahCardSkeleton({ isLoaded, gridLayout }) {
    return (
        <div className='w-full flex justify-between h-44 bg-white hover:bg-stone-100 transition-all rounded-lg shadow-md cursor-pointer flex-col p-5'>
            <div className='flex justify-between items-start'>
                <SkeletonCircle
                    isLoaded={isLoaded}
                    className='w-8'
                ></SkeletonCircle>
                <SkeletonCircle
                    isLoaded={isLoaded}
                    className='w-8'
                ></SkeletonCircle>
            </div>
            <SkeletonText
                isLoaded={isLoaded}
                noOfLines={gridLayout ? 2 : 4}
                spacing={'3'}
            ></SkeletonText>
        </div>
    )
}
