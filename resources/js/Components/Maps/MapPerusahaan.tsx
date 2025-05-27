import { Pengaturan } from "@/types";
import React from "react";

declare const window: {
    google: any;
} & Window;
type Props = {
    pengaturan: Pengaturan;
};
function MapPerusahaan({ pengaturan }: Props) {
    return (
        <>
            <div className="relative w-full rounded h-full p-2 bg-white">
                <iframe
                    src={pengaturan.map_url}
                    // width="full"
                    // height="full"
                    className="border-0 w-full h-full"
                    allowFullScreen={false}
                    loading="lazy"
                    // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    );
}

export default MapPerusahaan;
