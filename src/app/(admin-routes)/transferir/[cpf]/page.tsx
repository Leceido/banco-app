import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import ErrorNotify from "@/components/notify/ErrorNotify"
import Transferir from "@/components/transferir"
import { getServerSession } from "next-auth"
import 'react-toastify/dist/ReactToastify.css'

interface CpfProps {
    params: {
        cpf: string
    }
}

export default async function TransferenciaUsuario({ params }: CpfProps) {
    const session = await getServerSession(nextAuthOptions)
    try {
        const response = await fetch(`https://banco-api.onrender.com/users/user/${params.cpf}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${session?.token}`
            }
        })
        const data = await response.json()
        if (response.ok) {
            return (
                <div>
                    <h1>Transferencia para {data.user.name}</h1>
                    <pre>CPF Beneficiario: {data.user.cpf}</pre>
                    <Transferir token={session?.token} beneficiary_cpf={data.user.cpf}/>
                </div>
            )
        } else {
            return (
                <ErrorNotify msg={`${data.message}`} url='/home'/>
            )
        }
    } catch (error) {
        console.log('dasdsadsad', error);
    }
}