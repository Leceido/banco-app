import { faBuildingColumns, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-indigo-600 text-white flex flex-col sm:flex-row px-8 sm:py-4 justify-center text-xl ">
            <div className="text-center hidden md:flex flex-col flex-none justify-center items-center w-1/4">
                <FontAwesomeIcon className="text-6xl" icon={faBuildingColumns} />
                <h1>Banco App</h1>
            </div>
            
            <div className="m-3 sm:mx-16 grow">
                <h1 className="text-2xl">Links</h1>
                <hr className="w-40 mb-2"/>
                
                <div className="flex flex-col text-lg">
                    <Link className="hover:text-gray-200 hover:underline" href="/home">Home</Link>
                    <Link className="hover:text-gray-200 hover:underline" href="/extrato">Extrato</Link>
                    <Link className="hover:text-gray-200 hover:underline" href="/transferir">Transferir</Link>
                    <Link className="hover:text-gray-200 hover:underline" href="/depositar">Depositar</Link>
                    <Link className="hover:text-gray-200 hover:underline" href="/sacar">Sacar</Link>
                    <Link className="hover:text-gray-200 hover:underline" href="#">Pagar</Link>
                </div>
            </div>
            <div className="border-l-2 border-white flex-none"></div>
            <div className="m-3 sm:mx-16 grow">
                <h1 className="text-2xl">Contatos</h1>
                <hr className="w-40 mb-2"/>
                <div className="flex flex-row items-center">
                    <FontAwesomeIcon className="text-3xl" icon={faEnvelope} /> 
                    <p className="text-sm px-1">leceido@gmail.com</p>
                </div>
                <div className="flex flex-row">
                    <Link className="pr-5 text-3xl cursor-pointer hover:text-gray-200" href="https://wa.me/5511942992076"><FontAwesomeIcon icon={faWhatsapp} /></Link>
                    <Link className="pr-5 text-3xl cursor-pointer hover:text-gray-200" href="https://github.com/leceido"><FontAwesomeIcon icon={faGithub} /></Link>
                    <Link className="pr-5 text-3xl cursor-pointer hover:text-gray-200" href="https://www.linkedin.com/in/leonardo-macedo-830a08195/"><FontAwesomeIcon icon={faLinkedin} /></Link>
                </div>
            </div>
        </div>
    )
}