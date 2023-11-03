import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import RecarregarDados from "@/components/buttons/recarregarDados"
import ErrorNotify from "@/components/notify/ErrorNotify"
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
            <div className="flex flex-1 flex-col min-h-full px-8 py-4 justify-center space-y-5">
                <div className="mx-auto w-full px-6 py-3 sm:px-12 sm:py-6 border-2 rounded-lg border-solid border-gray-50 shadow-md">
                    <div>
                        <h1 className="text-4xl">{data.user.balance}</h1>
                        <RecarregarDados />
                    </div>
                </div>
                <div className="flex items-center grow space-x-2 w-full min-h-[12vh] md:min-h-[20vh] overflow-x-auto">
                    <Link href='/extrato' className="flex-1 w-full min-w-[30%] sm:min-w-0 py-2 md:py-4 md:px-8 text-center text-md sm:text-xl hover:bg-gray-200 border-2 rounded-lg border-solid border-gray-50 shadow-md">
                        <FontAwesomeIcon icon={faMoneyBillTransfer} /><p>Extrato</p>
                    </Link>
                    <Link href='/depositar' className="flex-1 w-full min-w-[30%] sm:min-w-0 py-2 md:py-4 md:px-8 text-center text-md sm:text-xl hover:bg-gray-200 border-2 rounded-lg border-solid border-gray-50 shadow-md">
                        <FontAwesomeIcon icon={faMoneyBillTransfer} /><p>Depositar</p>
                    </Link>
                    <Link href='/sacar' className="flex-1 w-full min-w-[30%] sm:min-w-0 py-2 md:py-4 md:px-8 text-center text-md sm:text-xl hover:bg-gray-200 border-2 rounded-lg border-solid border-gray-50 shadow-md">
                        <FontAwesomeIcon icon={faMoneyBillTransfer} /><p>Sacar</p>
                    </Link>
                    <Link href='/transferir' className="flex-1 w-full min-w-[30%] sm:min-w-0 py-2 md:py-4 md:px-8 text-center text-md sm:text-xl hover:bg-gray-200 border-2 rounded-lg border-solid border-gray-50 shadow-md">
                        <FontAwesomeIcon icon={faMoneyBillTransfer} /><p>Transferir</p>
                    </Link>
                    <Link href='/pagar' className="flex-1 w-full min-w-[30%] sm:min-w-0 py-2 md:py-4 md:px-8 text-center text-md sm:text-xl hover:bg-gray-200 border-2 rounded-lg border-solid border-gray-50 shadow-md" >
                        <FontAwesomeIcon icon={faMoneyBillTransfer} /><p>Pagar</p>
                    </Link>
                </div>
                
                
                
                
            </div>
        )
    } catch (error) {
        return (
            <ErrorNotify msg='Necessário login' url='/'/>
        )
    }
}