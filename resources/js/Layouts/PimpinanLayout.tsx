import HeaderBlank from "@/Components/Headers/HeaderBlank";
import AdminNavbar from "@/Components/Navbars/AdminNavbar";
import ToastMessages from "@/Components/Shared/ToastMessages";
import PimpinanSidebar from "@/Components/Sidebar/PimpinanSidebar";
import StafSidebar from "@/Components/Sidebar/StafSidebar";
import { PropsWithChildren, ReactNode } from "react";

const PimpinanLayout = ({
    children,
}: PropsWithChildren<{ header?: ReactNode }>) => {
    return (
        <>
            <PimpinanSidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar />
                <HeaderBlank />
                <div className="px-4 md:px-10 mx-auto w-full -m-40 relative h-full">
                    <ToastMessages />
                    {children}
                </div>
            </div>
        </>
    );
};

export default PimpinanLayout;
