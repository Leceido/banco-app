import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import ExtratoUl from "@/components/extratoul";
import ErrorNotify from "@/components/notify/ErrorNotify";
import { getServerSession } from "next-auth";

export default async function Extrato() {
    const session = await getServerSession(nextAuthOptions)
    try {
        const response = await fetch('https://banco-api.onrender.com/users/statement/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session?.token}`
            },
            cache: 'no-store'
        })

        const data = await response.json()

        if(response.ok) {
            return (
                <div className="sm:m-10 md:mx-40 lg:m-0 px-4 py-4 space-y-6">
                    <h1 className="text-3xl">Extrato Bancario</h1>
                    <ExtratoUl extratoProps={data.statements} cpf={session?.user.cpf}/>
                </div>
            )
        }
    } catch (err) {
        console.log(err);
        return (
            <ErrorNotify msg="Erro ao carregar o extrato bancario" url="/home"/>
        )
    }
    
    
}