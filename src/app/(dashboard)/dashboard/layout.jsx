import Aside from "@/Components/Dashboard/Aside";
import DashboardNavbar from "@/Components/Dashboard/DashboardNavbar";

export default function layout({ children }) {
    return (
        <>
            <DashboardNavbar />
            <Aside />
            <div className="pt-20 md:pt-24  md:px-0 md:ml-52 md:mr-11">
                {children}
            </div>
        </>
    )
}
