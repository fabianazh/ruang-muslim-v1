/* eslint-disable react/prop-types */
import { Skeleton, SkeletonText } from '@chakra-ui/react'

export default function VideoCardSkeleton({ isLoaded }) {
    return (
        <>
            <div className='w-full h-28 relative justify-between flex gap-5 items-center'>
                <div className='h-28 w-28 aspect-square shrink-0 rounded-2xl overflow-hidden'>
                    <Skeleton isLoaded={isLoaded} className='w-full h-full'>
                        {' '}
                    </Skeleton>
                </div>
                <div className='flex flex-col justify-center w-full h-full gap-3'>
                    <Skeleton
                        isLoaded={isLoaded}
                        className='w-11/12 h-5'
                    ></Skeleton>
                    <SkeletonText
                        isLoaded={isLoaded}
                        className='w-10/12'
                        noOfLines={3}
                    ></SkeletonText>
                </div>
            </div>
        </>
    )
}
