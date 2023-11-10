'use client'

import { isValidElement, useEffect, useState } from "react"

export default function ExtratoUl({ extratoProps, cpf }: any) {
    const [dados, setDados] = useState<any>([])
    const transacoes = extratoProps
    const [mostrarRecebimentos, setMostrarRecebimentos] = useState(false)
    const [mostrarPagamentos, setMostrarPagamentos] = useState(false)
    const [selected, setSelected] = useState(null)

    const toggle = (index: any) => {
        if (selected == index) {
            return setSelected(null)
        }
        setSelected(index)
    }


    let conteudo

    if ((mostrarPagamentos && mostrarRecebimentos) || (!mostrarPagamentos && !mostrarRecebimentos)) {
        conteudo =
            <ul>
                {dados.map((dado: any, index: any) => (
                    <div key={dado.id}>
                        {dado.beneficiary === cpf ?
                            <div>
                                <div onClick={() => toggle(index)} className="flex space-x-2 items-center text-lg cursor-pointer">
                                    <h1 className="text-indigo-600 flex-grow">+ {dado.amount}</h1>
                                    <p className="font-bold">{selected === index ? '-' : '+'}</p>
                                </div>
                                {selected === index ?
                                    <div>
                                        <pre>Data: {dado.date}</pre>
                                        <pre>Pagante: {dado.payer}</pre>
                                        <pre>Transaçao: {dado.id}</pre>
                                    </div> : ''
                                }
                            </div> :
                            <div>
                                <div onClick={() => toggle(index)} className="flex space-x-2 items-center text-lg cursor-pointer">
                                    <h1 className="text-red-600 flex-grow">- {dado.amount}</h1>
                                    <p className="font-bold">{selected === index ? '-' : '+'}</p>
                                </div>
                                {selected === index ?
                                    <div>
                                        <pre>Data: {dado.date}</pre>
                                        <pre>Beneficiario: {dado.beneficiary}</pre>
                                        <pre>Transaçao: {dado.id}</pre>
                                    </div> : ''
                                }
                            </div>
                        }
                        <hr className="p-2" />
                    </div>
                ))}
            </ul>
    } else if (mostrarPagamentos) {
        const filterConteudo = dados.filter((dado: any) => dado.payer === cpf)
        conteudo =
            <ul>
                {filterConteudo.map((dado: any, index: any) => (
                    <div key={dado.id}>
                        <div>
                            <div onClick={() => toggle(index)} className="flex space-x-2 items-center text-lg cursor-pointer ">
                                <h1 className="text-red-600 flex-grow">- {dado.amount}</h1>
                                <p className="font-bold">{selected === index ? '-' : '+'}</p>
                            </div>
                            {selected === index ?
                                <div>
                                    <pre>Data: {dado.date}</pre>
                                    <pre>Beneficiario: {dado.beneficiary}</pre>
                                    <pre>Transaçao: {dado.id}</pre>
                                </div> : ''}
                        </div>
                        <hr className="p-2" />
                    </div>
                ))}
            </ul>
    } else if (mostrarRecebimentos) {
        const filterConteudo = dados.filter((dado: any) => dado.beneficiary === cpf)
        conteudo =
            <ul>
                {filterConteudo.map((dado: any, index: any) => (
                    <div key={dado.id}>
                        <div>
                            <div onClick={() => toggle(index)} className="flex space-x-2 items-center text-lg cursor-pointer ">
                                <h1 className="text-indigo-600 flex-grow">+ {dado.amount}</h1>
                                <p className="font-bold">{selected === index ? '-' : '+'}</p>
                            </div>
                            {selected === index ?
                                <div>
                                    <pre>Data: {dado.date}</pre>
                                    <pre>Pagante: {dado.payer}</pre>
                                    <pre>Transaçao: {dado.id}</pre>
                                </div> : ''}
                        </div>
                        <hr className="p-2" />
                    </div>
                ))}
            </ul>
    }

    useEffect(() => {
        setDados(transacoes);
    }, [transacoes]);

    useEffect(() => {
    }, [dados]);


    return (

        <div className="rounded-lg shadow-lg border-2 border-gray-50 text-sm space-y-2 sm:px-6 py-4">
            <div className="flex text-center">
                <div className="flex-grow">
                    <input
                        type="checkbox"
                        checked={mostrarRecebimentos}
                        onChange={() => setMostrarRecebimentos(!mostrarRecebimentos)}
                    />
                    <label>Recebimentos</label>
                </div>
                <div className="flex-grow">
                    <input
                        type="checkbox"
                        checked={mostrarPagamentos}
                        onChange={() => setMostrarPagamentos(!mostrarPagamentos)}
                    />
                    <label>Pagamentos</label>
                </div>
            </div>
            <hr />

            <div className="flex flex-col">
                {conteudo}
            </div>
        </div>
    )
}