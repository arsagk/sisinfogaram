import React from "react";
import { PageProps, Barangmasuk } from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";
import CardTableBarangmasuks from "@/Components/Cards/CardTableBarangmasuks";

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
        <AdminLayout>
            <CardTableBarangmasuks
                color="dark"
                barangmasuks={data}
                meta={meta}
                labelLinks={links}
                base_route={base_route}
            />
        </AdminLayout>
    );
};

export default Index;
