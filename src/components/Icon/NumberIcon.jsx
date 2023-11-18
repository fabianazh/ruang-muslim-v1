/* eslint-disable react/prop-types */
export default function NumberIcon({ customClass, children }) {
    return (
        <>
            <div
                className={`w-8 aspect-square shadow text-Green-500 rounded-full bg-Green-200 grid place-items-center ${customClass}`}
            >
                {children}
            </div>
        </>
    )
}
