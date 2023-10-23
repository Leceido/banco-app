'use client'

export default function RecarregarDados() {
    const recarregar = async () => {
        try {
            await window.location.reload()
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <pre><button onClick={recarregar}>Atualizar Saldo</button></pre>
    )
}