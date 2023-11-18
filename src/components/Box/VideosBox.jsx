/* eslint-disable react/prop-types */

export default function VideosBox({ children }) {
    return (
        <>
            <section className='w-full h-auto flex divide-y-2 divide-stone-300 gap-4 flex-col py-3 px-2 mb-7'>
                {children}
            </section>
        </>
    )
}

export function Heading({ children }) {
    return (
        <>
            <div className='flex justify-between w-full items-center'>
                {children}
            </div>
        </>
    )
}

export function Content({ children }) {
    return (
        <>
            <div className='flex justify-between w-full pt-6 gap-5 items-center'>
                {children}
            </div>
        </>
    )
}

VideosBox.Heading = Heading
VideosBox.Content = Content
