'use client'

import { SyntheticEvent, useState } from "react"
import {useRouter} from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";

export default function Cadastrar() {
    const [cpf, setCpf] = useState<string>('')
    const [nome, setNome] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const router = useRouter()

    async function handleSubmit(event: SyntheticEvent) {
        event.preventDefault()
        try {
            const response = await fetch('https://banco-api.onrender.com/users/signup', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    cpf: cpf,
                    name: nome,
                    password: password,
                })
            })
            const data = await response.json()
            if(response.status == 201) {
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
                router.replace('/')
            } else {
                toast.warn(`${data.error}`, {
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
        } catch {
            toast.error(`Erro no servidor, tente novamente`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            router.replace('/')
        }
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h1>Cadastro</h1>
                <label htmlFor="cpf">CPF: </label>
                <input
                    type="text"
                    name="cpf"
                    id="cpf"
                    placeholder="Digite o CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />
                <label htmlFor="nome">Nome: </label>
                <input
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Digite o nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <label htmlFor="senha">Senha: </label>
                <input
                    type="text"
                    name="senha"
                    id="senha"
                    placeholder="Digite uma senha numerica"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>
            <p>Já tem uma conta? Faça <Link href='/'>login</Link></p>
        </div>
    )
}