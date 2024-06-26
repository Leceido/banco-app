import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import ButtonLogou from "@/components/buttons/ButtonLogout";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface PrivateLayoutProps {
    children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
    const session = await getServerSession(nextAuthOptions)

    if (!session) {
        redirect('/login')
    }

    return (
        <>
            <header className="bg-indigo-600 text-white w-full">
                <Navbar />
            </header>
            <div className="lg:mx-60 lg:my-20 2xl:w-3/4 min-h-[100vh]">
                {children}
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )

}