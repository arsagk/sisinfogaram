import React from "react";
import { PageProps, Penjualan } from "@/types";
import CardTablePenjualans from "@/Components/Cards/CardTablePenjualans";
import StafLayout from "@/Layouts/StafLayout";

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
        <StafLayout>
            <CardTablePenjualans
                color="dark"
                penjualans={data}
                meta={meta}
                labelLinks={links}
                base_route={base_route}
            />
        </StafLayout>
    );
};

export default Index;
