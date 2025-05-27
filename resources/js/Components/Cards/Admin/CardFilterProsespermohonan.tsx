import Button from "@/Components/Shared/Button";
import PermohonanSelect from "@/Components/Shared/PermohonanSelect";
import Pilihstatusprosesperm from "@/Components/Shared/PilihStatusprosesperm";
import SelectSearch from "@/Components/Shared/SelectSearch";
import { Permohonan } from "@/types";
import { router, usePage } from "@inertiajs/react";
import { pickBy } from "lodash";
import React, { useEffect, useState } from "react";
import { usePrevious } from "react-use";

type Props = {
    itemprosespermsOpts: any;
};
const CardFilterProsespermohonan = ({ itemprosespermsOpts }: Props) => {
    const {
        itemprosesperm_id,
        statusprosesperms,
        statusprosesperm_id,
        transpermohonan_id,
        permohonan,
    } = usePage<any>().props;
    // const params = new URLSearchParams(window.location.search);

    const [values, setValues] = useState({
        itemprosesperm_id: itemprosesperm_id,
        statusprosesperm_id: statusprosesperm_id,
        transpermohonan_id: transpermohonan_id,
        permohonan: permohonan,
    });

    const prevValues = usePrevious(values);
    const itemprosesperm = itemprosespermsOpts.find(
        (e: any) => e.value == itemprosesperm_id
    );
    const statusprosesperm = statusprosesperms.find(
        (e: any) => e.id == statusprosesperm_id
    );
    useEffect(() => {
        // https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state

        if (prevValues) {
            const query = Object.keys(pickBy(values)).length
                ? pickBy(values)
                : {};
            router.get(
                route(route().current() ? route().current() + "" : ""),
                query,
                {
                    replace: true,
                    preserveState: true,
                }
            );
        }
    }, [values]);
    return (
        <div className="p-4 bg-blueGray-100 shadow-md rounded-md flex flex-col">
            <h1 className="font-bold text-lightBlue-700 mb-2">Filter</h1>
            {/* <PermohonanSelect value={permohonan} className='mb-1' onValueChange={(e) => {
                setValues(v => ({ ...v, 'permohonan': e.id, 'transpermohonan_id': e.transpermohonan.id }))
            }} />
            <Button theme='blue' onClick={(e) => setValues(v => ({ ...v, 'permohonan': null, 'transpermohonan_id': null }))}>Semua Permohonan</Button> */}
            <SelectSearch
                options={itemprosespermsOpts}
                value={itemprosesperm}
                onChange={(e) => {
                    setValues((v) => ({ ...v, itemprosesperm_id: e.value }));
                }}
            />
            <Pilihstatusprosesperm
                statusprosesperms={statusprosesperms}
                statusprosesperm={statusprosesperm}
                setStatusprosesperm={(e) => {
                    setValues((v) => ({ ...v, statusprosesperm_id: e.id }));
                }}
            />
        </div>
    );
};

export default CardFilterProsespermohonan;
