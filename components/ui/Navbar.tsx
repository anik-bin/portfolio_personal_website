import React from 'react'
import { DarkModeToggle } from './darkModeToggleButton'
import Link from 'next/link'

function Navbar() {

    return (
        <header className="sticky z-50 top-0 my-10">
            <nav className="bg-white dark:bg-black border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-center items-center mx-auto sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-lg">
                    <Link className='text-3xl font-bold' href="/">Aniket Bindhani <DarkModeToggle /></Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar