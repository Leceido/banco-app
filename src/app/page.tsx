import PrimeiroComponent from "@/components/landingPage/PrimeiroComponent";
import NavBarHome from "@/components/navbar/NavbarHomeComponent";

export default function HomePage() {
    return (
        <div className="mx-60">
            <div className="">
                <NavBarHome />
                <PrimeiroComponent />
            </div>
        </div>
    )
}