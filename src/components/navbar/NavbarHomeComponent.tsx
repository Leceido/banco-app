import Link from "next/link";

export default function NavBarHome() {
    return (
        <nav className="flex w-full justify-between items-center mx-auto">
            <div className="px-4 py-2 w-44">
                <Link href='/home'><img className="w-12 sm:w-16 cursor-pointer" src="logo_azul.svg" alt="..." /></Link>
            </div>
            <div className="flex flex-row space-x-6 justify-center items-center">
                <div>
                        <h1 className="text-gray-600 hover:text-indigo-600 text-2xl cursor-pointer">Beneficios</h1>
                    </div>
                    <div>
                        <h1 className="text-gray-600 hover:text-indigo-600 text-2xl cursor-pointer">Conta Digital</h1>
                    </div>
                    <div>
                        <h1 className="text-gray-600 hover:text-indigo-600 text-2xl cursor-pointer">Suporte</h1>
                    </div>
                    <div>
                        <h1 className="text-gray-600 hover:text-indigo-600 text-2xl cursor-pointer">Blog</h1>
                    </div>
            </div>
            <div className="flex flex-row text-center justify-end items-center space-x-6">
                
                <Link href="/login">
                    <h1 className="text-indigo-600 hover:text-indigo-500 text-2xl cursor-pointer">Entrar</h1>
                </Link>
                <Link href="/cadastrar" className="bg-indigo-600 hover:bg-indigo-500 text-white hover:text-gray-200 p-4 rounded-lg">
                    <h1 className="text-2xl cursor-pointer">Abrir Conta</   h1>
                </Link>
            </div>
            
        </nav>
    )

}