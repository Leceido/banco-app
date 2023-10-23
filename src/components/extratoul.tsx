'use client'

import { useEffect, useState } from "react"

export default function ExtratoUl({ extratoProps }: any) {
    const [dados, setDados] = useState<any>([])
    const transacoes = extratoProps
    const [mostrarRecebimentos, setMostrarRecebimentos] = useState(false)
    const [mostrarPagamentos, setMostrarPagamentos] = useState(false)

    let conteudo

    if ((mostrarPagamentos && mostrarRecebimentos) || (!mostrarPagamentos && !mostrarRecebimentos)) {
        conteudo =
            <ul>
                {dados.map((dado: any) => (
                    <div key={dado.id}>
                        {dado.beneficiary === "50646600818" ?
                            <>
                                <h1>+ {dado.amount}</h1>
                                <pre>Data: {dado.date}</pre>
                                <pre>Pagante: {dado.payer}</pre>
                                <pre>Transaçao: {dado.id}</pre>
                            </> :
                            <>
                                <h1>- {dado.amount}</h1>
                                <pre>Data: {dado.date}</pre>
                                <pre>Beneficiario: {dado.beneficiary}</pre>
                                <pre>Transaçao: {dado.id}</pre>
                            </>
                        }
                    </div>
                ))}
            </ul>
    } else if (mostrarPagamentos) {
        const filterConteudo = dados.filter((dado: any) => dado.payer === "50646600818")
        conteudo =
            <ul>
                {filterConteudo.map((dado: any) => (
                    <div key={dado.id}>
                        {dado.beneficiary === "50646600818" ?
                            <>
                                <h1>+ {dado.amount}</h1>
                                <pre>Data: {dado.date}</pre>
                                <pre>Pagante: {dado.payer}</pre>
                                <pre>Transaçao: {dado.id}</pre>
                            </> :
                            <>
                                <h1>- {dado.amount}</h1>
                                <pre>Data: {dado.date}</pre>
                                <pre>Beneficiario: {dado.beneficiary}</pre>
                                <pre>Transaçao: {dado.id}</pre>
                            </>
                        }
                    </div>
                ))}
            </ul>
    } else if (mostrarRecebimentos) {
        const filterConteudo = dados.filter((dado: any) => dado.beneficiary === "50646600818")
        conteudo =
            <ul>
                {filterConteudo.map((dado: any) => (
                    <div key={dado.id}>
                        {dado.beneficiary === "50646600818" ?
                            <>
                                <h1>+ {dado.amount}</h1>
                                <pre>Data: {dado.date}</pre>
                                <pre>Pagante: {dado.payer}</pre>
                                <pre>Transaçao: {dado.id}</pre>
                            </> :
                            <>
                                <h1>- {dado.amount}</h1>
                                <pre>Data: {dado.date}</pre>
                                <pre>Beneficiario: {dado.beneficiary}</pre>
                                <pre>Transaçao: {dado.id}</pre>
                            </>
                        }
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

        <div>
            <label>
                <input
                    type="checkbox"
                    checked={mostrarRecebimentos}
                    onChange={() => setMostrarRecebimentos(!mostrarRecebimentos)}
                />
                Recebimentos
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={mostrarPagamentos}
                    onChange={() => setMostrarPagamentos(!mostrarPagamentos)}
                />
                Pagamentos
            </label>

            <div>{conteudo}</div>


        </div>
    )
}