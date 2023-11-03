'use client'

import Link from "next/link";
import ButtonLogou from "./buttons/ButtonLogout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faHouse } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
    
    return (
        <nav className="flex justify-between w-full items-center mx-auto">
            <div className="px-4 py-2 w-44">
                <Link href='/home'><img className="w-12 sm:w-16 cursor-pointer" src="logo.svg" alt="..." /></Link>
            </div>
            <div className="hidden md:block md:static md:min-h-fit left-0 md:w-auto  w-full px-5">
                <h1 className="text-3xl">Banco App</h1>
            </div>
            <div className="flex items-center gap-6 px-4 w-44">
                <Link href='/home'><FontAwesomeIcon className="text-2xl sm:text-3xl hover:text-gray-200 cursor-pointer" icon={faHouse} /></Link>
                <FontAwesomeIcon className="text-2xl sm:text-3xl hover:text-gray-200 cursor-pointer" icon={faGear} />
                <ButtonLogou />
            </div>
        </nav>
    )
}