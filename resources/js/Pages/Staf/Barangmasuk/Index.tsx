import React from "react";
import { PageProps, Barangmasuk } from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";
import CardTableBarangmasuks from "@/Components/Cards/CardTableBarangmasuks";
import StafLayout from "@/Layouts/StafLayout";

const Index = ({
    barangmasuks,
    base_route,
}: PageProps<{
    barangmasuks: {
        data: Barangmasuk[];
        meta: { links: []; per_page: number; total: number };
        links: { first: string; last: string; next: string; prev: string };
    };
    base_route: string;
}>) => {
    const { data, meta, links } = barangmasuks;

    return (
        <StafLayout>
            <CardTableBarangmasuks
                color="dark"
                barangmasuks={data}
                meta={meta}
                labelLinks={links}
                base_route={base_route}
            />
        </StafLayout>
    );
};

export default Index;
