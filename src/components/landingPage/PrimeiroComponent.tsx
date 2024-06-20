import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function PrimeiroComponent() {
    return (
        <div className="h-[90vh] flex flex-row">
            <div className="w-2/4 flex flex-col space-y-16 justify-center">
                <div>
                    <h1 className="text-7xl font-bold">BancoApp</h1>
                    <h1 className="text-7xl font-bold">seu banco digital.</h1>
                </div>
                <p className="py-2 text-2xl">Com TeslaBank, você pode realizar transferências bancárias com zero taxa e pagar suas contas.</p>
                <div className="grid grid-cols-2 gap-4 text-lg">
                    <div className="flex flex-row space-x-2">
                        <div className="flex items-center justify-center bg-indigo-100 rounded-full px-1">
                            <FontAwesomeIcon className="text-gray-900 w-5 h-5" icon={faCheck} />
                        </div>
                        <h1>Transferência instantânea</h1>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <div className="flex items-center justify-center bg-indigo-100 rounded-full px-1">
                            <FontAwesomeIcon className="text-gray-900 w-5 h-5" icon={faCheck} />
                        </div>
                        <h1>Pagamentos em todo o mundo</h1>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <div className="flex items-center justify-center bg-indigo-100 rounded-full px-1">
                            <FontAwesomeIcon className="text-gray-900 w-5 h-5" icon={faCheck} />
                        </div>
                        <h1>Sem taxas absurdas</h1>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <div className="flex items-center justify-center bg-indigo-100 rounded-full px-1">
                            <FontAwesomeIcon className="text-gray-900 w-5 h-5" icon={faCheck} />
                        </div>
                        <h1>100% pensando em você</h1>
                    </div>
                </div>
                <div className="flex flex-row space-x-8">
                    <Link className="flex flex-row justify-center items-center rounded-lg bg-indigo-600 hover:bg-indigo-500 space-x-4 w-[200px] p-2 text-white text-lg hover:text-xl" href='/cadastrar'>
                        <p className="">Abrir uma conta</p>
                    </Link>
                    <div className="flex flex-row text-indigo-600 space-x-8">
                        <FontAwesomeIcon className="w-11 h-11 cursor-pointer hover:text-indigo-500" icon={faApple} />
                        <FontAwesomeIcon className="w-11 h-11 cursor-pointer hover:text-indigo-500" icon={faGooglePlay} />
                    </div>
                </div>
            </div>
            <div className="w-2/4 flex items-center justify-center">
                <img className="max-h-[500px]" src={'/cartoesApp.png'} alt="" />
            </div>
        </div>
    )
}