import { jsxs, jsx } from "react/jsx-runtime";
import { A as AdminLayout } from "./AdminLayout-a2aff99a.js";
import { router, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { usePrevious } from "react-use";
import { pickBy } from "lodash";
import { M as ModalCetakLaporan } from "./ModalCetakLaporan-1f197389.js";
import "./NotificationDropdown-5fbd4256.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
import "./MenuItem-b9568aaa.js";
import "./Modal-1ab71745.js";
import "@headlessui/react";
import "./bootstrap-37cb65ea.js";
import "axios";
import "react-dom";
import "@emotion/react";
import "@emotion/cache";
import "react-loader-spinner";
const LapBarang = ({
  barangs: { data, next_page_url, prev_page_url },
  media
}) => {
  const [values, setValues] = useState({
    media
  });
  const prevValues = usePrevious(values);
  const [showModalLaporan, setShowModalLaporan] = useState(false);
  const [url, setUrl] = useState();
  useEffect(() => {
    if (prevValues) {
      const query = Object.keys(pickBy(values)).length ? pickBy(values) : {};
      router.get(
        route(route().current() ? route().current() + "" : ""),
        query,
        {
          replace: true,
          preserveState: true
        }
      );
    }
  }, [values]);
  const handlePrint = () => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") ? params.get("page") : 1;
    setUrl(route(route().current() + "") + `?page=${page}&media=print`);
    setShowModalLaporan(true);
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx("div", { className: "flex content-center items-center justify-center relative -top-2", children: /* @__PURE__ */ jsx("div", { className: "w-full px-2", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg shadow-slate-400 rounded-lg bg-white border-0", children: [
      /* @__PURE__ */ jsx("div", { className: "rounded-t mb-2 px-4 pt-4 ", children: /* @__PURE__ */ jsxs("div", { className: "w-full flex  justify-between bg-lightBlue-800 text-lightBlue-100 px-2 py-2 shadow-md rounded-lg", children: [
        /* @__PURE__ */ jsx("div", { className: "text-left", children: /* @__PURE__ */ jsx("h1", { className: "font-semibold", children: "DATA BARANG" }) }),
        /* @__PURE__ */ jsx("div", { className: "w-1/3 text-blueGray-800 flex flex-col md:flex-row justify-end items-center gap-2", children: /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: (e) => {
              handlePrint();
            },
            className: "text-lightBlue-300 background-transparent font-bold px-3 py-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
            type: "button",
            children: [
              /* @__PURE__ */ jsx("i", { className: "fas fa-print" }),
              /* @__PURE__ */ jsx("span", { children: " Cetak" })
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "flex-auto px-2 lg:px-4 py-6 pt-0 ", children: data ? /* @__PURE__ */ jsxs("div", { className: "p-1 w-full flex-col text-sm", children: [
        /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-y-2 font-semibold bg-slate-300", children: [
            /* @__PURE__ */ jsx("td", { width: "4%", children: "No." }),
            /* @__PURE__ */ jsx("td", { width: "10%", children: "Kode" }),
            /* @__PURE__ */ jsx("td", { width: "15%", children: "Nama Barang" }),
            /* @__PURE__ */ jsx("td", { width: "35%", children: "Satuan" }),
            /* @__PURE__ */ jsx("td", { width: "10%", align: "right", children: "Harga Beli" }),
            /* @__PURE__ */ jsx("td", { width: "10%", align: "right", children: "Harga Jual" }),
            /* @__PURE__ */ jsx("td", { width: "10%", align: "right", children: "Stok" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: data.map((barang, i) => /* @__PURE__ */ jsxs(
            "tr",
            {
              className: "border-b-2",
              children: [
                /* @__PURE__ */ jsx("td", { children: i + 1 }),
                /* @__PURE__ */ jsx("td", { children: barang.kode_barang }),
                /* @__PURE__ */ jsx("td", { children: barang.nama_barang }),
                /* @__PURE__ */ jsx("td", { children: barang.satuan }),
                /* @__PURE__ */ jsx("td", { align: "right", children: barang.harga_beli }),
                /* @__PURE__ */ jsx("td", { align: "right", children: barang.harga_jual }),
                /* @__PURE__ */ jsx("td", { align: "right", children: barang.stok_barang })
              ]
            },
            i
          )) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full mt-4 flex justify-end items-start", children: /* @__PURE__ */ jsxs("div", { className: "w-36 grid grid-cols-2 gap-2 ", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: prev_page_url,
              className: "bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-2 py-1 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
              type: "Link",
              children: [
                /* @__PURE__ */ jsx(
                  "i",
                  {
                    className: "fa fa-chevron-left",
                    "aria-hidden": "true"
                  }
                ),
                " ",
                "Prev"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: next_page_url,
              className: "bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-2 py-1 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
              type: "Link",
              children: [
                /* @__PURE__ */ jsx(
                  "i",
                  {
                    className: "fa fa-chevron-right",
                    "aria-hidden": "true"
                  }
                ),
                " ",
                "Next"
              ]
            }
          )
        ] }) })
      ] }) : null })
    ] }) }) }),
    /* @__PURE__ */ jsx(
      ModalCetakLaporan,
      {
        showModal: showModalLaporan,
        setShowModal: setShowModalLaporan,
        src: url
      }
    )
  ] });
};
export {
  LapBarang as default
};
