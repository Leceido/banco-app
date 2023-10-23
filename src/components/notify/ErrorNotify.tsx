'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from 'next/navigation'
import { useEffect } from 'react';

export default function ErrorNotify({msg, url}:any) {
    const router = useRouter()
    
    useEffect(() => {
        toast.error(`${msg}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
        router.replace(`${url}`)
    }, [])
    
    return null
}