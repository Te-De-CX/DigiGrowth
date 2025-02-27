import React from "react";

const Navbar:React.FC = () => {

    return (
        <nav className="flex justify-between items-center py-3 px-10 capitalize">
            <h4 className="font-bold text-lg">
                digigrowth
            </h4>
            <ul className="flex gap-14 text-sm font-semibold">
                <li>company</li>
                <li>more</li>
                <li>with in</li>
                <li>contact</li>
            </ul>
            <button className="border capitalize border-2 border-black px-4 py-1 rounded-full text-sm">
                get started
            </button>
        </nav>
    )
}

export default Navbar;