import React from "react";
import { Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";
import CardTableSopirs from "@/Components/Cards/CardTableSopirs";

const Index = ({
    sopirs,
    base_route,
}: PageProps<{
    sopirs: {
        data: [];
        meta: { links: []; per_page: number; total: number };
        links: { first: string; last: string; next: string; prev: string };
    };
    base_route: string;
}>) => {
    const { data, meta, links } = sopirs;
    const currentValues = {
        nama: "masbah",
        email: "oke",
    };

    return (
        <AdminLayout>
            <CardTableSopirs
                color="dark"
                sopirs={data}
                meta={meta}
                labelLinks={links}
                base_route={base_route}
            />
        </AdminLayout>
    );
};

export default Index;
