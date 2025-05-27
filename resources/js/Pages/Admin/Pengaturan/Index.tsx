import React from "react";
import { PageProps } from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";
import CardTableBarangs from "@/Components/Cards/CardTableBarangs";

const Index = ({
    barangs,
    base_route,
}: PageProps<{
    barangs: {
        data: [];
        meta: { links: []; per_page: number; total: number };
        links: { first: string; last: string; next: string; prev: string };
    };
    base_route: string;
}>) => {
    const { data, meta, links } = barangs;
    const currentValues = {
        nama: "masbah",
        email: "oke",
    };

    return (
        <AdminLayout>
            <CardTableBarangs
                color="dark"
                barangs={data}
                meta={meta}
                labelLinks={links}
                base_route={base_route}
            />
        </AdminLayout>
    );
};

export default Index;
