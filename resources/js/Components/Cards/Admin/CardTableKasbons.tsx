import React, { useEffect, useState } from "react";
import { Kasbon, OptionSelect } from "@/types";
import { twMerge } from 'tailwind-merge'
import { Link, router, usePage } from "@inertiajs/react";
import { usePrevious } from "react-use";
import { pickBy } from "lodash";
import Pagination from "../../Shared/Pagination";
import InputSearch from "../../Shared/InputSearch";
import LinkButton from "../../Shared/LinkButton";
import useSwal from "@/utils/useSwal";
import DropdownMenu from "@/Components/Shared/DropdownMenu";
import { Menu } from "@headlessui/react";
import { EditActiveIcon, EditInactiveIcon } from "@/Components/Icon";
import AsyncSelectSearch from "@/Components/Shared/AsyncSelectSearch";

// components
export default function CardTableKasbons({ color = "light", kasbons, className = "", meta, labelLinks }: { color: "dark" | "light", kasbons: Kasbon[], className?: string, meta: { links: [], per_page: number, total: number }, labelLinks: any }) {
    const { isAdmin, user } = usePage<{ isAdmin: boolean, user: OptionSelect }>().props
    const params = new URLSearchParams(window.location.search);
    const [values, setValues] = useState({ search: params.get('search'), sortBy: params.get('sortBy'), sortDir: params.get('sortDir') });
    const prevValues = usePrevious(values);


    function handleSortLinkClick({ sortBy, sortDir }: { sortBy: string, sortDir: string }) {
        setValues(values => ({ ...values, sortBy, sortDir }));

    }
    const IconSort = ({ sortBy, sortDir }: { sortBy: any, sortDir: string }) => {
        if (values.sortBy === sortBy && sortDir === 'asc') {
            return <i className="fa-solid fa-sort-up"></i>
        } else if (values.sortBy === sortBy && sortDir === 'desc') {
            return <i className="fa-solid fa-sort-down"></i>
        }
        return <i className="fa-solid fa-sort"></i>
    }

    const handleRemoveData = (id: string) => {
        router.delete(route('admin.transaksi.kasbons.destroy', id))
    }

    useEffect(() => {
        // https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state

        if (prevValues) {
            const query = Object.keys(pickBy(values)).length
                ? pickBy(values)
                : {};
            router.get(route(route().current() ? route().current() + '' : ''), query, {
                replace: true,
                preserveState: true
            });
        }
    }, [values]);

    return (
        <div
            className={
                twMerge("relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg shadow-slate-700 rounded-md py-1 ",
                    (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white"), className)
            }
        >
            <div className="rounded-full mb-0 px-4 py-3 border-0 ">
                <div className="flex justify-between w-full flex-col md:flex-row">
                    <div className="relative w-full max-w-full flex-grow flex-1 ">
                        <h3
                            className={
                                "font-semibold text-lg " +
                                (color === "light" ? "text-blueGray-700" : "text-white")
                            }
                        >
                            Kasbon List
                        </h3>
                    </div>
                    <div className="flex justify-center gap-2 flex-row items-start">
                        {isAdmin ? <AsyncSelectSearch placeholder="Pilih User" value={user} name='users' url='/admin/users/api/list/' onChange={(e: any) => setValues(v => ({ ...v, user_id: e ? e.value : '' }))} isClearable optionLabels={['name']} optionValue='id' className="text-blueGray-900" /> : null}
                        <InputSearch value={values.search ? values.search : ""} onChange={(e: any) => setValues(v => ({ ...v, search: e.target.value }))} />
                        <LinkButton
                            theme='blue'
                            href={route('admin.transaksi.kasbons.create')}
                        >
                            <span className="flex items-center gap-1"><i className="fa-solid fa-plus"></i> New</span>
                        </LinkButton>
                    </div>
                </div>
            </div>
            <div className="block w-full overflow-x-auto overflow-y-visible md:overflow-visible">
                <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                        <tr>
                            <th
                                className={
                                    "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                            >
                                <Link href="#" onClick={(e) => handleSortLinkClick({ sortBy: 'created_at', sortDir: values.sortDir === 'asc' ? 'desc' : 'asc' })} >
                                    <div className="flex flex-row justify-between">
                                        <span>Tanggal</span>
                                        <IconSort sortBy='created_at' sortDir={values.sortDir || ''} />
                                    </div>
                                </Link>
                            </th>
                            <th
                                className={
                                    "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                            >
                                <div className="flex flex-row justify-between">
                                    <span>Jumlah Kasbon</span>
                                </div>
                            </th>
                            <th
                                className={
                                    "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                            >
                                <div className="flex flex-row justify-between">
                                    <span>Penggunaan</span>
                                </div>
                            </th>
                            <th
                                className={
                                    "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                            >
                                <div className="flex flex-row justify-between">
                                    <span>Sisa Penggunaan</span>
                                </div>
                            </th>
                            <th
                                className={
                                    "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                            >
                                <div className="flex flex-row justify-between">
                                    <span>Keperluan</span>
                                </div>
                            </th>
                            <th
                                className={
                                    "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                            >
                                <div className="flex flex-row justify-between">
                                    <span>User</span>
                                </div>
                            </th>
                            <th
                                className={
                                    "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                            >
                                <div className="flex flex-row justify-between">
                                    <span>Status</span>
                                </div>
                            </th>
                            <th className={
                                "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                (color === "light"
                                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                            }>
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            kasbons.map(({ id, tgl_kasbon, jumlah_kasbon, jumlah_penggunaan, sisa_penggunaan, keperluan, user, status_kasbon }, index) => (
                                <tr key={index}>
                                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                                        {tgl_kasbon}
                                    </td>
                                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                                        {jumlah_kasbon}
                                    </td>
                                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                                        {jumlah_penggunaan}
                                    </td>
                                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                                        {sisa_penggunaan}
                                    </td>
                                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                                        {keperluan}
                                    </td>
                                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                                        {user.name}
                                    </td>
                                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                                        {status_kasbon}
                                    </td>
                                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 ">
                                        <div className="relative">
                                            <DropdownMenu>
                                                <Menu.Item as='div' className={'relative'}>
                                                    {({ active }) => (
                                                        <>
                                                            {status_kasbon != 'cancelled' && isAdmin ? (
                                                                <Link
                                                                    href={route('admin.transaksi.kasbons.edit', id)}
                                                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                >
                                                                    <EditActiveIcon
                                                                        className="mr-2 h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                    Edit
                                                                </Link>
                                                            ) : (
                                                                <span className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                                                                    <EditInactiveIcon
                                                                        className="mr-2 h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                    Edit
                                                                </span>
                                                            )}
                                                        </>

                                                    )}
                                                </Menu.Item>
                                            </DropdownMenu>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {meta.total > meta.per_page ?
                <div className={"flex justify-end px-2 py-1  " + (color === "light"
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")}>
                    <Pagination links={meta.links} labelLinks={labelLinks} />
                </div>
                : null}
        </div >
    );
}

