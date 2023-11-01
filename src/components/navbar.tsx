'use client'

import Link from "next/link";
import ButtonLogou from "./buttons/ButtonLogout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faHouse } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {

    return (
        <nav className="flex justify-between items-center mx-auto">
            <div className="px-4 py-2">
                <Link href='/home'><img className="w-16 cursor-pointer" src="logo.svg" alt="..." /></Link>
            </div>
            <div className="">
                <h1 className="text-3xl">Banco App</h1>
            </div>
            <div className="flex items-center gap-6 px-4">
                <Link href='/home'><FontAwesomeIcon className="text-3xl hover:text-gray-200 cursor-pointer" icon={faHouse} /></Link>
                <FontAwesomeIcon className="text-3xl hover:text-gray-200 cursor-pointer" icon={faGear} />
                <ButtonLogou />
            </div>
        </nav>
    )
}