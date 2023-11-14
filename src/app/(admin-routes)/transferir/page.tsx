import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import TransferirUl from "@/components/buttons/transferir"
import ErrorNotify from "@/components/notify/ErrorNotify"
import { getServerSession } from "next-auth"

export default async function Transferir() {
    const session = await getServerSession(nextAuthOptions)
    try {
        const response = await fetch('https://banco-api.onrender.com/users/contacts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session?.token}`
            }
        })
        
        if (response.ok) {
            const data = await response.json()
            return (
                <div className="sm:m-10 md:mx-40 lg:m-0 p-4 space-y-4">
                    <h1 className="text-3xl">Transferir</h1>
                    <TransferirUl usersProps={data.users}/>
                </div>
            )
        } else {
            return (
                <ErrorNotify msg='Erro ao carregar os contatos' url='/home'/>
            )
        }
    } catch (error) {
        console.log('There was an error', error);
        return (
            <ErrorNotify msg='Erro ao carregar os contatos' url='/home'/>
        )
    }
}