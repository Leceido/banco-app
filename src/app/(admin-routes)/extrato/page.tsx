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
                <div>
                    <h1>Extrato Bancario</h1>
                    <ExtratoUl extratoProps={data.statements}/>
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