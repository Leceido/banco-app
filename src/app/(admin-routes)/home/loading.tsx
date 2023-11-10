import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading() {
    return (
        <div>
            <div className="flex flex-1 flex-col min-h-full px-8 py-4 justify-center space-y-5">
                <div className="mx-auto w-full px-6 py-3 sm:px-12 sm:py-6 border-2 rounded-lg border-solid border-gray-50 shadow-md">
                    <div>
                        <h1 className="text-4xl rounded-full bg-gray-300 text-gray-300 animate-pulse">R$ 9999,99</h1>
                        <span className="text-sm rounded-full bg-gray-300 text-gray-300 animate-pulse">Recarregar dados</span>
                    </div>
                </div>
                <div className="flex items-center grow space-x-2 w-full min-h-[12vh] md:min-h-[20vh] overflow-x-auto">
                    <div className="flex-1 w-full min-w-[30%] sm:min-w-0 py-2 md:py-4 md:px-8 text-center text-md sm:text-xl hover:bg-gray-200 border-2 rounded-lg border-solid hover:border-gray-200 border-gray-50 shadow-md"><FontAwesomeIcon className="rounded-full bg-gray-300 text-gray-300 animate-pulse" icon={faMoneyBillTransfer}/><p className="rounded-full bg-gray-300 text-gray-300 animate-pulse">Pagar</p></div>
                    <div className="flex-1 w-full min-w-[30%] sm:min-w-0 py-2 md:py-4 md:px-8 text-center text-md sm:text-xl hover:bg-gray-200 border-2 rounded-lg border-solid hover:border-gray-200 border-gray-50 shadow-md"><FontAwesomeIcon className="rounded-full bg-gray-300 text-gray-300 animate-pulse" icon={faMoneyBillTransfer}/><p className="rounded-full bg-gray-300 text-gray-300 animate-pulse">Pagar</p></div>
                    <div className="flex-1 w-full min-w-[30%] sm:min-w-0 py-2 md:py-4 md:px-8 text-center text-md sm:text-xl hover:bg-gray-200 border-2 rounded-lg border-solid hover:border-gray-200 border-gray-50 shadow-md"><FontAwesomeIcon className="rounded-full bg-gray-300 text-gray-300 animate-pulse" icon={faMoneyBillTransfer}/><p className="rounded-full bg-gray-300 text-gray-300 animate-pulse">Pagar</p></div>
                    <div className="flex-1 w-full min-w-[30%] sm:min-w-0 py-2 md:py-4 md:px-8 text-center text-md sm:text-xl hover:bg-gray-200 border-2 rounded-lg border-solid hover:border-gray-200 border-gray-50 shadow-md"><FontAwesomeIcon className="rounded-full bg-gray-300 text-gray-300 animate-pulse" icon={faMoneyBillTransfer}/><p className="rounded-full bg-gray-300 text-gray-300 animate-pulse">Pagar</p></div>
                    <div className="flex-1 w-full min-w-[30%] sm:min-w-0 py-2 md:py-4 md:px-8 text-center text-md sm:text-xl hover:bg-gray-200 border-2 rounded-lg border-solid hover:border-gray-200 border-gray-50 shadow-md"><FontAwesomeIcon className="rounded-full bg-gray-300 text-gray-300 animate-pulse" icon={faMoneyBillTransfer}/><p className="rounded-full bg-gray-300 text-gray-300 animate-pulse">Pagar</p></div>
                </div>
            </div>
        </div>
    )
}