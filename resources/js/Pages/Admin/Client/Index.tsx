import React from "react";
import { Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import SearchFilter from "@/Components/Shared/SearchFilter";
import Pagination from "@/Components/Shared/Pagination";
import AdminLayout from "@/Layouts/AdminLayout";
import CardTableUsers from "@/Components/Cards/CardTableUsers";
import CardTableClients from "@/Components/Cards/CardTableClients";

const Index = ({
    clients,
    base_route,
}: PageProps<{
    clients: {
        data: [];
        meta: { links: []; per_page: number; total: number };
        links: { first: string; last: string; next: string; prev: string };
    };
    base_route: string;
}>) => {
    const { data, meta, links } = clients;
    const currentValues = {
        nama: "masbah",
        email: "oke",
    };

    return (
        <AdminLayout>
            <CardTableClients
                color="dark"
                clients={data}
                meta={meta}
                labelLinks={links}
                base_route={base_route}
            />
        </AdminLayout>
    );
};

export default Index;
