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
            fetch('https://banco-api.onrender.com/', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                },
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
        <>
            <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>

                <div className="sm:mx-auto sm:w-full sm:max-w-sms">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="logo.png"
                        alt="Banco app"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Faça login na sua conta
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="cpf" className="block text-sm font-medium leading-6 text-gray-900">
                                CPF / CNPJ
                            </label>
                            <div className='mt-2'>
                                <input
                                    type="text"
                                    id='cpf'
                                    name="cpf"
                                    placeholder='Apenas os numeros'
                                    required
                                    autoComplete='off'
                                    className="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => setCpf(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Senha
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Esqueceu a senha?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder='Senha numérica'
                                    id="password"
                                    required
                                    className="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Não é cliente?{' '}
                        <Link href='/cadastrar' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Cadastre-se agora
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}