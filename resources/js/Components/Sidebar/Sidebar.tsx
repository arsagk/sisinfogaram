/*eslint-disable*/
import React, { useEffect } from "react";
import NotificationDropdown from "../Dropdowns/NotificationDropdown";
import UserDropdown from "../Dropdowns/UserDropdown";
import { Link } from "@inertiajs/react";
import MenuItem from "./MenuItem";

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    const currentRoute = route().current();
    const isTransaksiRoute = currentRoute
        ? currentRoute.includes("transaksi")
        : false;
    const isInformasiRoute = currentRoute
        ? currentRoute.includes("informasi")
        : false;
    return (
        <>
            <nav className="container-snap md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() =>
                            setCollapseShow("bg-white m-2 py-3 px-6")
                        }
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    {/* Brand */}
                    <Link
                        className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                        href=""
                    >
                        UD CAP BATERAY
                    </Link>
                    {/* User */}
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                            <NotificationDropdown />
                        </li>
                        <li className="inline-block relative">
                            <UserDropdown />
                        </li>
                    </ul>
                    {/* Collapse */}
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                            collapseShow
                        }
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link
                                        className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                        href="/"
                                    >
                                        PPAT APP
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() =>
                                            setCollapseShow("hidden")
                                        }
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Form */}
                        <form className="mt-6 mb-4 md:hidden">
                            <div className="mb-3 pt-0">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="border-0 px-3 py-2 h-12 border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                                />
                            </div>
                        </form>

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        {/* Heading */}
                        <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            MENU ADMIN
                        </h6>
                        {/* Navigation */}

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            <li className="items-center px-2">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (currentRoute === "admin.index"
                                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    href={route("admin.index")}
                                >
                                    <i
                                        className={
                                            "fas fa-tv mr-2 text-sm" +
                                            (window.location.href.indexOf(
                                                "/admin"
                                            ) !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    ></i>{" "}
                                    Dashboard
                                </Link>
                            </li>

                            {/* tambahan sub menu */}
                            <MenuItem
                                expanded={
                                    currentRoute
                                        ? currentRoute.includes("admin") &&
                                          isTransaksiRoute == false &&
                                          isInformasiRoute == false
                                        : false
                                }
                                label="Admin"
                            >
                                <li className="items-center px-2">
                                    <Link
                                        className={
                                            "text-xs uppercase py-3 font-bold block " +
                                            (currentRoute ===
                                            "admin.pengaturans.index"
                                                ? " text-lightBlue-500 hover:text-lightBlue-600 "
                                                : " text-blueGray-700 hover:text-blueGray-500 ")
                                        }
                                        href={route("admin.pengaturans.index")}
                                    >
                                        <i
                                            className={
                                                "fas fa-tv mr-2 text-sm " +
                                                (currentRoute ===
                                                "admin.pengaturans.index"
                                                    ? "opacity-75"
                                                    : "text-blueGray-300")
                                            }
                                        ></i>{" "}
                                        Pengaturan Sistem
                                    </Link>
                                </li>

                                <li className="items-center px-2">
                                    <Link
                                        className={
                                            "text-xs uppercase py-3 font-bold block " +
                                            (currentRoute ===
                                            "admin.users.index"
                                                ? " text-lightBlue-500 hover:text-lightBlue-600 "
                                                : " text-blueGray-700 hover:text-blueGray-500 ")
                                        }
                                        href={route("admin.users.index")}
                                    >
                                        <i
                                            className={
                                                "fas fa-tv mr-2 text-sm " +
                                                (currentRoute ===
                                                "admin.users.index"
                                                    ? "opacity-75"
                                                    : "text-blueGray-300")
                                            }
                                        ></i>{" "}
                                        Users
                                    </Link>
                                </li>

                                <li className="items-center px-2">
                                    <Link
                                        className={
                                            "text-xs uppercase py-3 font-bold block " +
                                            (currentRoute ===
                                            "admin.permissions.index"
                                                ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                : "text-blueGray-700 hover:text-blueGray-500")
                                        }
                                        href={route("admin.permissions.index")}
                                    >
                                        <i
                                            className={
                                                "fas fa-tv mr-2 text-sm " +
                                                (currentRoute ===
                                                "admin.permissions.index"
                                                    ? "opacity-75"
                                                    : "text-blueGray-300")
                                            }
                                        ></i>{" "}
                                        Permissions
                                    </Link>
                                </li>
                                <li className="items-center px-2">
                                    <Link
                                        className={
                                            "text-xs uppercase py-3 font-bold block " +
                                            (currentRoute ===
                                            "admin.roles.index"
                                                ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                : "text-blueGray-700 hover:text-blueGray-500")
                                        }
                                        href={route("admin.roles.index")}
                                    >
                                        <i
                                            className={
                                                "fas fa-tv mr-2 text-sm " +
                                                (currentRoute ===
                                                "admin.roles.index"
                                                    ? "opacity-75"
                                                    : "text-blueGray-300")
                                            }
                                        ></i>{" "}
                                        Roles
                                    </Link>
                                </li>
                                <li className="items-center px-2">
                                    <Link
                                        className={
                                            "text-xs uppercase py-3 font-bold block " +
                                            (currentRoute ===
                                            "admin.clients.index"
                                                ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                : "text-blueGray-700 hover:text-blueGray-500")
                                        }
                                        href={route("admin.clients.index")}
                                    >
                                        <i
                                            className={
                                                "fas fa-users mr-2 text-sm " +
                                                (currentRoute ===
                                                "admin.clients.index"
                                                    ? "opacity-75"
                                                    : "text-blueGray-300")
                                            }
                                        ></i>{" "}
                                        Client
                                    </Link>
                                </li>
                                <li className="items-center px-2">
                                    <Link
                                        className={
                                            "text-xs uppercase py-3 font-bold block " +
                                            (currentRoute ===
                                            "admin.barangs.index"
                                                ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                : "text-blueGray-700 hover:text-blueGray-500")
                                        }
                                        href={route("admin.barangs.index")}
                                    >
                                        <i
                                            className={
                                                "fas fa-users mr-2 text-sm " +
                                                (currentRoute ===
                                                "admin.barangs.index"
                                                    ? "opacity-75"
                                                    : "text-blueGray-300")
                                            }
                                        ></i>{" "}
                                        Barang
                                    </Link>
                                </li>
                                <li className="items-center px-2">
                                    <Link
                                        className={
                                            "text-xs uppercase py-3 font-bold block " +
                                            (currentRoute ===
                                            "admin.sopirs.index"
                                                ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                : "text-blueGray-700 hover:text-blueGray-500")
                                        }
                                        href={route("admin.sopirs.index")}
                                    >
                                        <i
                                            className={
                                                "fas fa-users mr-2 text-sm " +
                                                (currentRoute ===
                                                "admin.sopirs.index"
                                                    ? "opacity-75"
                                                    : "text-blueGray-300")
                                            }
                                        ></i>{" "}
                                        Sopir
                                    </Link>
                                </li>
                            </MenuItem>
                            <MenuItem
                                expanded={
                                    currentRoute
                                        ? currentRoute.includes("transaksi")
                                        : false
                                }
                                label="Transaksi"
                            >
                                <li className="items-center px-2">
                                    <Link
                                        className={
                                            "text-xs uppercase py-3 font-bold block " +
                                            (currentRoute ===
                                            "admin.transaksi.pembelians.index"
                                                ? " text-lightBlue-500 hover:text-lightBlue-600 "
                                                : " text-blueGray-700 hover:text-blueGray-500 ")
                                        }
                                        href={route(
                                            "admin.transaksi.pembelians.index"
                                        )}
                                    >
                                        <i
                                            className={
                                                "fas fa-sack-dollar mr-2 text-sm " +
                                                (currentRoute ===
                                                "admin.transaksi.pembelians.index"
                                                    ? "opacity-75"
                                                    : "text-blueGray-300")
                                            }
                                        ></i>{" "}
                                        Pembelian
                                    </Link>
                                </li>
                                <li className="items-center px-2">
                                    <Link
                                        className={
                                            "text-xs uppercase py-3 font-bold block " +
                                            (currentRoute ===
                                            "admin.transaksi.barangmasuks.index"
                                                ? " text-lightBlue-500 hover:text-lightBlue-600 "
                                                : " text-blueGray-700 hover:text-blueGray-500 ")
                                        }
                                        href={route(
                                            "admin.transaksi.barangmasuks.index"
                                        )}
                                    >
                                        <i
                                            className={
                                                "fas fa-box mr-2 text-sm " +
                                                (currentRoute ===
                                                "admin.transaksi.barangmasuks.index"
                                                    ? "opacity-75"
                                                    : "text-blueGray-300")
                                            }
                                        ></i>{" "}
                                        Barang Masuk
                                    </Link>
                                </li>
                                <li className="items-center px-2">
                                    <Link
                                        className={
                                            "text-xs uppercase py-3 font-bold block " +
                                            (currentRoute ===
                                            "admin.transaksi.penjualans.index"
                                                ? " text-lightBlue-500 hover:text-lightBlue-600 "
                                                : " text-blueGray-700 hover:text-blueGray-500 ")
                                        }
                                        href={route(
                                            "admin.transaksi.penjualans.index"
                                        )}
                                    >
                                        <i
                                            className={
                                                "fas fa-sack-dollar mr-2 text-sm " +
                                                (currentRoute ===
                                                "admin.transaksi.penjualans.index"
                                                    ? "opacity-75"
                                                    : "text-blueGray-300")
                                            }
                                        ></i>{" "}
                                        Penjualan
                                    </Link>
                                </li>
                                <li className="items-center px-2">
                                    <Link
                                        className={
                                            "text-xs uppercase py-3 font-bold block " +
                                            (currentRoute ===
                                            "admin.transaksi.barangkeluars.index"
                                                ? " text-lightBlue-500 hover:text-lightBlue-600 "
                                                : " text-blueGray-700 hover:text-blueGray-500 ")
                                        }
                                        href={route(
                                            "admin.transaksi.barangkeluars.index"
                                        )}
                                    >
                                        <i
                                            className={
                                                "fas fa-box mr-2 text-sm " +
                                                (currentRoute ===
                                                "admin.transaksi.barangkeluars.index"
                                                    ? "opacity-75"
                                                    : "text-blueGray-300")
                                            }
                                        ></i>{" "}
                                        Barang Keluar
                                    </Link>
                                </li>

                                {/* end staf */}
                            </MenuItem>
                            <MenuItem
                                expanded={
                                    currentRoute
                                        ? currentRoute.includes("informasi")
                                        : false
                                }
                                label="Informasi"
                            >
                                <li className="items-center px-2">
                                    <Link
                                        className={
                                            "text-xs uppercase py-3 font-bold block " +
                                            (currentRoute ===
                                            "admin.informasi.barangs"
                                                ? " text-lightBlue-500 hover:text-lightBlue-600 "
                                                : " text-blueGray-700 hover:text-blueGray-500 ")
                                        }
                                        href={route("admin.informasi.barangs")}
                                    >
                                        <i
                                            className={
                                                "fas fa-sack-dollar mr-2 text-sm " +
                                                (currentRoute ===
                                                "admin.informasi.barangs"
                                                    ? "opacity-75"
                                                    : "text-blueGray-300")
                                            }
                                        ></i>{" "}
                                        Data Barang
                                    </Link>
                                </li>
                            </MenuItem>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
