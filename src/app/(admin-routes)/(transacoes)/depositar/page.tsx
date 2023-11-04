import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import DepositarComponent from "@/components/transacoes/depositar"
import { getServerSession } from "next-auth"

export default async function Depositar() {
    const session = await getServerSession(nextAuthOptions)
    return (
        <div className="flex flex-1 flex-col min-h-full m-5 px-8 py-4 justify-center space-y-5 text-2xl md:text-3xl lg:text-4xl">
            <h1 className="">Depositar dinheiro</h1>
            <DepositarComponent token={session?.token} />    
        </div>
    )
}