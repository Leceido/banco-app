'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function Transferir({ token, beneficiary_cpf }: any) {
    const [valor, setValor] = useState<number>(0)
    const router = useRouter()

    const transferencia = async (event: any) => {
        event.preventDefault()
        try {
            const response = await fetch('https://banco-api.onrender.com/users/transfer', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    beneficiary_cpf: beneficiary_cpf,
                    value: valor
                })
            })
            const data = await response.json()
            if(response.ok) {
                toast.success('Transferencia concluida', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                router.replace('/home')
            } else {
                toast.warn(`${data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
        } catch (error) {
            console.log(error);
            toast.error('Falha ao transferir', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            router.replace('/home')
        }
    }

    return (
        <div className="">
            <form action="" className="space-x-2">
                <div className="flex flex-col space-y-4">
                    <div className="text-3xl">
                        <label className="" htmlFor="valor">R$ </label>
                        <input
                            className="px-1 w-[50%] outline-none" 
                            type="number"
                            name="valor"
                            id="valor"
                            placeholder="00,00"
                            onChange={(e) => setValor(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <button className="rounded-full bg-indigo-600 hover:bg-indigo-500 p-3 text-white text-sm md:text-lg w-24" onClick={transferencia}>Transferir</button>
                    </div>
                </div>
            </form>
        </div>
    )
}