/* eslint-disable react/prop-types */
import { Divider, Skeleton, SkeletonText } from '@chakra-ui/react'

export default function InterpretationVerseSkeleton({ isLoaded }) {
    return (
        <>
            <div className='w-full h-fit flex flex-col gap-5 bg-white p-7 rounded-lg shadow'>
                <div className='justify-center flex gap-2'>
                    <Skeleton
                        isLoaded={isLoaded}
                        className='w-72 h-7'
                    ></Skeleton>
                </div>
                <Divider></Divider>
                <div className='flex flex-col gap-8 w-full pb-6'>
                    <Skeleton className='w-32 h-3'></Skeleton>
                    <SkeletonText spacing={'4'} noOfLines={5}></SkeletonText>
                    <Skeleton className='w-32 h-3'></Skeleton>
                    <SkeletonText spacing={'4'} noOfLines={5}></SkeletonText>
                </div>
            </div>
        </>
    )
}
