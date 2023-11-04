import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import SacarComponent from "@/components/transacoes/sacar"
import { getServerSession } from "next-auth"

export default async function Sacar() {
    const session = await getServerSession(nextAuthOptions)
    return (
        <div className="flex flex-1 flex-col min-h-full m-5 px-8 py-4 justify-center space-y-5 text-2xl md:text-3xl lg:text-4xl">
            <h1>Sacar dinheiro</h1>
            <SacarComponent token={session?.token} />   
        </div>
            
    )
}