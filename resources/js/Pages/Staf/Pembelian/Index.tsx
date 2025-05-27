import React from "react";
import { PageProps, Pembelian } from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";
import CardTablePembelians from "@/Components/Cards/CardTablePembelians";
import StafLayout from "@/Layouts/StafLayout";

const Index = ({
    pembelians,
    base_route,
}: PageProps<{
    pembelians: {
        data: Pembelian[];
        meta: { links: []; per_page: number; total: number };
        links: { first: string; last: string; next: string; prev: string };
    };
    base_route: string;
}>) => {
    const { data, meta, links } = pembelians;
    const currentValues = {
        nama: "masbah",
        email: "oke",
    };

    return (
        <StafLayout>
            <CardTablePembelians
                color="dark"
                pembelians={data}
                meta={meta}
                labelLinks={links}
                base_route={base_route}
            />
        </StafLayout>
    );
};

export default Index;
