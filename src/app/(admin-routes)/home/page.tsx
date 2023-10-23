import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import RecarregarDados from "@/components/buttons/recarregarDados"
import ErrorNotify from "@/components/notify/ErrorNotify"
import { getServerSession } from "next-auth"
import Link from "next/link"


export default async function Admin() {
    const session = await getServerSession(nextAuthOptions)

    try {
        const response = await fetch('https://banco-api.onrender.com/users/home/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session?.token}`
            },
            cache: 'no-store'
        })

        const data = await response.json()

        return (
            <div>
                <h1>Ola, {session?.user.name}</h1>
                <div>
                    <h1>Saldo: {data.user.balance}</h1>
                    <RecarregarDados />
                </div>
                
                <pre><Link href='/extrato'>Extrato bancario</Link></pre>
                <Link href='/depositar'>Depositar</Link>
                <Link href='/sacar'>Sacar</Link>
                <Link href='/transferir'>Transferir</Link>
                <Link href='/pagar'>Pagar</Link>
            </div>
        )
    } catch (error) {
        return (
            <ErrorNotify msg='Necessário login' url='/'/>
        )
    }
}