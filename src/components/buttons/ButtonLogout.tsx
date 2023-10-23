'use client'

import { signOut } from "next-auth/react"

export default function ButtonLogou() {
    async function logout() {
        await signOut({
            redirect:false
        })

        window.location.reload()
    }

    return <button onClick={logout}>Sair</button>
}