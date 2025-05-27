import React from "react";
import { PageProps, Penjualan } from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";
import CardTablePenjualans from "@/Components/Cards/CardTablePenjualans";

const Index = ({
    penjualans,
    base_route,
}: PageProps<{
    penjualans: {
        data: Penjualan[];
        meta: { links: []; per_page: number; total: number };
        links: { first: string; last: string; next: string; prev: string };
    };
    base_route: string;
}>) => {
    const { data, meta, links } = penjualans;
    const currentValues = {
        nama: "masbah",
        email: "oke",
    };

    return (
        <AdminLayout>
            <CardTablePenjualans
                color="dark"
                penjualans={data}
                meta={meta}
                labelLinks={links}
                base_route={base_route}
            />
        </AdminLayout>
    );
};

export default Index;
