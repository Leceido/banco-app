'use client'

import Link from "next/link"
import { useState } from "react"

export default function TransferirUl({ usersProps }: any) {
    const [users, setUsers] = useState<any>([])

    if (users.length === 0) {
        setUsers(usersProps)
    }

    return (
        <div>
            <ul>
                {users.map((user: any) => (
                    <li key={user.cpf}>
                        <div>
                            <Link replace={true} href={`/transferir/${user.cpf}`}><h2>{user.name}</h2></Link>
                        <pre>{user.cpf}</pre>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}