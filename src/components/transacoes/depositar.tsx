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
        <div>
            <h1>Depositar Dinheiro</h1>
            <form action="">
                <input type="number" name="valor" id="valor" onChange={(e) => setValor(Number(e.target.value))}/>
                <button onClick={deposito}>Confirmar</button>
            </form>
        </div>
    )
}