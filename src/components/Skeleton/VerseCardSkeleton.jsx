/* eslint-disable react/prop-types */
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

export default function VerseCardSkeleton({ isLoaded }) {
    return (
        <>
            <div className='bg-white flex flex-col px-6 py-7 gap-6 rounded-lg shadow'>
                <SkeletonCircle
                    isLoaded={isLoaded}
                    className='w-9'
                ></SkeletonCircle>
                <SkeletonText
                    spacing={'3'}
                    isLoaded={isLoaded}
                    noOfLines={5}
                ></SkeletonText>
                <Skeleton
                    isLoaded={isLoaded}
                    className='w-full h-10'
                ></Skeleton>
            </div>
        </>
    )
}
