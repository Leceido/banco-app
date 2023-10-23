import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import ButtonLogou from "@/components/buttons/ButtonLogout";

interface PrivateLayoutProps {
    children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
    const session = await getServerSession(nextAuthOptions)

    if (!session) {
        redirect('/')
    }

    return (
        <>
            <Link replace={true} href='/home'>Home</Link>
            <Link replace={true} href='/transferir'>Transferir</Link>
            <ButtonLogou/>
            {children}
        </>
    )

}