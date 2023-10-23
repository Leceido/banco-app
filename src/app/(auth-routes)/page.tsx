'use client'

import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SyntheticEvent, useState } from 'react'
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
    const [cpf, setCpf] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const router = useRouter()

    async function handleSubmit(event: SyntheticEvent) {
        event.preventDefault()

        const response = await toast.promise(
            fetch('https://banco-api.onrender.com/users/signin', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    cpf: cpf,
                    password: password
                })
            }),
            {
                pending: 'Enviando dados',
                success: 'Dados recebidos',
                error: 'Falha ao enviar os dados'
            }
        )

        const result = await signIn('credentials', {
            cpf: cpf,
            password: password,
            redirect: false
        })

        if (result?.error) {
            toast.error(`Login invalido, ${result.error}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            return
        }

        window.location.reload()
        router.replace('/home')
    }

    return (
        <div>
            <h1>Login</h1>

            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="cpf"
                    placeholder="digite o cpf"
                    onChange={(e) => setCpf(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder='senha'
                    onChange={(e) => setPassword(e.target.value)}
                /><br/>
                <button type="submit">Entrar</button>
            </form>
            <p>ou</p>
            <Link href="/cadastrar"><button>registrar</button></Link>
        </div>
    )
}