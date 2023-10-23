import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import SacarComponent from "@/components/transacoes/sacar"
import { getServerSession } from "next-auth"

export default async function Sacar() {
    const session = await getServerSession(nextAuthOptions)
    return (
        <SacarComponent token={session?.token} />       
    )
}