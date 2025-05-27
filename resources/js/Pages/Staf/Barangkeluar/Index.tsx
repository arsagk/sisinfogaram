import React from "react";
import { PageProps, Barangkeluar } from "@/types";
import CardTableBarangkeluars from "@/Components/Cards/CardTableBarangkeluars";
import StafLayout from "@/Layouts/StafLayout";

const Index = ({
    barangkeluars,
    base_route,
    is_admin,
}: PageProps<{
    barangkeluars: {
        data: Barangkeluar[];
        meta: { links: []; per_page: number; total: number };
        links: { first: string; last: string; next: string; prev: string };
    };
    base_route: string;
    is_admin: boolean;
}>) => {
    const { data, meta, links } = barangkeluars;

    return (
        <StafLayout>
            <CardTableBarangkeluars
                color="dark"
                barangkeluars={data}
                meta={meta}
                labelLinks={links}
                base_route={base_route}
                is_admin={is_admin}
            />
        </StafLayout>
    );
};

export default Index;
