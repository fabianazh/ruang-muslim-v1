/* eslint-disable react/prop-types */
export default function AuthLayout({ children }) {
    return (
        <>
            <section className='min-h-screen min-w-screen flex items-center justify-center'>
                {children}
            </section>
        </>
    )
}

export function LeftContent({ children }) {
    return (
        <>
            <div className={`will-change-transform bg-black w-96`}>
                {children}
            </div>
        </>
    )
}

export function RightContent({ children }) {
    return (
        <>
            <div className={`will-change-transform bg-black w-96 h-auto`}>
                {children}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt maiores ipsa eos eaque quibusdam rem exercitationem
                vero, incidunt animi, cupiditate repellat magnam necessitatibus
                tempore aliquid quo, architecto alias voluptas quas!
            </div>
        </>
    )
}

AuthLayout.LeftContent = LeftContent
AuthLayout.RightContent = RightContent
