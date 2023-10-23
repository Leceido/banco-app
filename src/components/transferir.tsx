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
        <div>
            <form action="">
                <label htmlFor="valor">Digite o valor: </label>
                <input
                    type="number"
                    name="valor"
                    id="valor"
                    value={valor.toString()}
                    onChange={(e) => setValor(Number(e.target.value))}
                />
                <button onClick={transferencia}>Transferir</button>
            </form>
        </div>
    )
}