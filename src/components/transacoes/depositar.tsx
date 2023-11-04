'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function DepositarComponent({token}: any) {
    const [valor, setValor] = useState<number>(0)
    const router = useRouter()

    const deposito = async (e:any) => {
        e.preventDefault()
        try {
            const response = await fetch("https://banco-api.onrender.com/users/deposit", {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    value: valor
                })
            })

            const data = await response.json()

            if(response.ok) {
                toast.success(`${data.message}`, {
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
            toast.error('Falha ao depositar', {
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
        <div className="rounded-lg w-full py-3 shadow-md">
            <form action="" className="space-x-2">
                <div className="flex flex-col space-y-4">
                    <div>
                        <label className="" htmlFor="valor">R$ </label>
                        <input
                            className="px-1 w-[50%] outline-none" 
                            type="number" 
                            name="valor" 
                            id="valor" 
                            min="1"
                            placeholder="00,00"
                            onChange={(e) => setValor(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <button className="rounded-full bg-indigo-600 hover:bg-indigo-500 p-3 text-white text-sm md:text-lg w-24" onClick={deposito}>Depositar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}