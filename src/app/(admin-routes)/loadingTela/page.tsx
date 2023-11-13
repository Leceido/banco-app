import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoadingTelaTeste() {
    return (
        <div className="h-96 flex items-center justify-center">
            <div>
                <svg className="animate-spin h-10 w-10 mr-3 rounded-full border-4 border-gray-300 border-t-indigo-600" viewBox="0 0 24 24"></svg>
            </div>
        </div>
    )
}

//Componente teste para criação das loading pages