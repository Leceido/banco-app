'use client'

import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { signOut } from "next-auth/react"

export default function ButtonLogou() {
    async function logout() {
        await signOut({
            redirect:false
        })

        window.location.reload()
    }

    return <FontAwesomeIcon className="text-2xl sm:text-3xl cursor-pointer text-white hover:text-gray-200" onClick={logout} icon={faArrowRightFromBracket}  />
        
}