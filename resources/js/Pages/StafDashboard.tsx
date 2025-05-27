import { Head } from "@inertiajs/react";
import { PageProps, Pengaturan, RecentActivity, Traffic } from "@/types";
import CardLineChart from "@/Components/Cards/CardLineChart";
import CardBarChart from "@/Components/Cards/CardBarChart";
import CardPageVisits from "@/Components/Cards/CardPageVisits";
import CardSocialTraffic from "@/Components/Cards/CardSocialTraffic";
import StafLayout from "@/Layouts/StafLayout";
import MapPerusahaan from "@/Components/Maps/MapPerusahaan";

export default function StafDashboard({
    auth,
    traffics,
    recentActivities,
    pengaturan,
}: PageProps<{
    traffics: Traffic[];
    recentActivities: RecentActivity[];
    pengaturan: Pengaturan;
}>) {
    return (
        <StafLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <>
                <div className="flex flex-wrap">
                    <div className="w-full xl:w-3/5 mb-12 xl:mb-0 px-4 h-96">
                        <MapPerusahaan pengaturan={pengaturan} />
                    </div>
                    <div className="w-full xl:w-2/5 px-4">
                        <CardSocialTraffic traffics={traffics} />
                    </div>

                    {/* <div className="w-full xl:w-4/12 px-4">
                        <CardBarChart />
                    </div> */}
                </div>
                <div className="flex flex-wrap mt-4">
                    {/* <div className="w-full xl:w-3/5 mb-12 xl:mb-0 px-4">
                        <CardPageVisits recentActivities={recentActivities} />
                    </div> */}
                    {/* <div className="w-full xl:w-4/12 px-4">
                        <CardSocialTraffic traffics={traffics} />
                    </div> */}
                </div>
            </>
        </StafLayout>
    );
}
