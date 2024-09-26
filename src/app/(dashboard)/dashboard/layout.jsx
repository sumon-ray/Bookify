import Aside from "@/Components/Dashboard/Aside";
import DashboardNavbar from "@/Components/Dashboard/DashboardNavbar";

export default function layout({ children }) {
    return (
        <>
            <DashboardNavbar />
            <Aside />
            <div>
                {children}
            </div>
        </>
    )
}
