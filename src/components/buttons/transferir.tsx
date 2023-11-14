'use client'

import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useState } from "react"

export default function TransferirUl({ usersProps }: any) {
    const [users, setUsers] = useState<any>([])

    if (users.length === 0) {
        setUsers(usersProps)
    }

    return (
        <div className=" shadow-lg rounded-lg">
            <ul className="flex flex-col">
                {users.map((user: any) => (
                    <li key={user.cpf} className="">
                        <Link className="cursor-pointer "  href={`/transferir/${user.cpf}`}>
                            <div className="px-4 flex flex-row items-center justify-center hover:bg-gray-50">
                                <div className="grow">
                                    <h1 className="text-md sm:text-lg text-indigo-600">{user.name}</h1>
                                    <pre className="text-sm">{user.cpf}</pre>
                                    
                                </div>
                                <div className="">
                                    <FontAwesomeIcon className="sm:text-lg" icon={faChevronRight} />
                                </div>
                            </div>
                        </Link>
                        <div className="px-4">
                            <hr className="py-1 text-center justify-center" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}