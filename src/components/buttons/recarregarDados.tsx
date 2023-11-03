'use client'

import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useEffect } from "react";

library.add(faRotateRight)

export default function RecarregarDados() {
    const recarregar = async () => {
        try {
            await window.location.reload()
        } catch (err) {
            console.log(err);
        }
    }
    const loadIcon = async () => {
        try {
          await library.add(faRotateRight);
        } catch (err) {
          console.log(err);
        }
    }

    useEffect(() => {
        loadIcon();
    }, [])
    
    return (
        <div onClick={recarregar} className="text-indigo-600 hover:text-indigo-500 text-sm space-x-1 cursor-pointer">
            <button className="underline" onClick={recarregar}>Atualizar saldo</button>
            <FontAwesomeIcon className="text-[10px]" icon={faRotateRight} />
        </div>
    )
}