import { useRef, useState } from "react"

export default function IconButton({ children, text, color, ...props }) {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)
    return (
        <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`text-xl flex p-2 items-center rounded-full ${color || "text-xl text-[#364957] dark:text-gray-300 hover:text-indigo-950 font-semibold"}`}

            {...props}>
            {children}
            <div
                style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
                className="overflow-x-hidden transition-all duration-300 ease-out">
                <span ref={ref} className="px-1.5">{text}</span>
            </div>
        </button>
    )
}