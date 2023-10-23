import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import DepositarComponent from "@/components/transacoes/depositar"
import { getServerSession } from "next-auth"

export default async function Depositar() {
    const session = await getServerSession(nextAuthOptions)
    return (
        <DepositarComponent token={session?.token} />       
    )
}