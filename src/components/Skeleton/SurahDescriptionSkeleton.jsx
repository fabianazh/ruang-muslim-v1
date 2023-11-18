/* eslint-disable react/prop-types */
import { Divider, Skeleton, SkeletonText } from '@chakra-ui/react'

export default function SurahDescriptionSkeleton({ isLoaded }) {
    return (
        <>
            <section className='w-full h-auto flex flex-col gap-4 bg-white p-7 rounded-lg shadow'>
                <div className='items-center flex flex-col gap-3'>
                    <Skeleton
                        isLoaded={isLoaded}
                        className='w-72 h-7'
                    ></Skeleton>
                    <Skeleton
                        isLoaded={isLoaded}
                        className='w-56 h-5'
                    ></Skeleton>
                </div>
                <Divider></Divider>
                <SkeletonText
                    spacing={'3'}
                    isLoaded={isLoaded}
                    noOfLines={7}
                ></SkeletonText>
                <Divider></Divider>
                <div className='w-full justify-between flex'>
                    <Skeleton className='w-full h-7'></Skeleton>
                </div>
            </section>
        </>
    )
}
