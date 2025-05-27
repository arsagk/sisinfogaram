import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { router, Link } from "@inertiajs/react";
import { usePrevious } from "react-use";
import { pickBy } from "lodash";
import { u as useSwal } from "./useSwal-3ab423ea.js";
import { P as Pagination } from "./Pagination-30af682d.js";
import { I as InputSearch } from "./InputSearch-6032da7e.js";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import { M as ModalCetakLaporan } from "./ModalCetakLaporan-1f197389.js";
import { M as MenuDropdown } from "./MenuDropdown-0a345ccf.js";
function CardTableBarangmasuks({
  color = "light",
  barangmasuks,
  className = "",
  meta,
  labelLinks,
  base_route
}) {
  const params = new URLSearchParams(window.location.search);
  const [values, setValues] = useState({
    search: params.get("search"),
    sortBy: params.get("sortBy"),
    sortDir: params.get("sortDir")
  });
  const prevValues = usePrevious(values);
  function handleSortLinkClick({
    sortBy,
    sortDir
  }) {
    setValues((values2) => ({ ...values2, sortBy, sortDir }));
  }
  const IconSort = ({
    sortBy,
    sortDir
  }) => {
    if (values.sortBy === sortBy && sortDir === "asc") {
      return /* @__PURE__ */ jsx("i", { className: "fa-solid fa-sort-up" });
    } else if (values.sortBy === sortBy && sortDir === "desc") {
      return /* @__PURE__ */ jsx("i", { className: "fa-solid fa-sort-down" });
    }
    return /* @__PURE__ */ jsx("i", { className: "fa-solid fa-sort" });
  };
  const handleRemoveData = (id) => {
    router.delete(route(base_route + "barangmasuks.destroy", id));
  };
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
  const [barangkeluarId, setBarangkeluarId] = useState();
  const [showModalLaporan, setShowModalLaporan] = useState(false);
  function prosesLaporan(e, id) {
    e.preventDefault();
    setBarangkeluarId(id);
    setShowModalLaporan(true);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: twMerge(
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg shadow-slate-700 rounded-md py-1 ",
          color === "light" ? "bg-white" : "bg-lightBlue-900 text-white",
          className
        ),
        children: [
          /* @__PURE__ */ jsx("div", { className: "rounded-t mb-0 px-4 py-3 border-0", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("div", { className: "relative w-full px-4 max-w-full flex-grow flex-1", children: /* @__PURE__ */ jsx(
              "h3",
              {
                className: "font-semibold text-lg " + (color === "light" ? "text-blueGray-700" : "text-white"),
                children: "DAFTAR BARANG MASUK"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-2 flex-row items-start", children: [
              /* @__PURE__ */ jsx(
                InputSearch,
                {
                  value: values.search ? values.search : "",
                  onChange: (e) => setValues((v) => ({
                    ...v,
                    search: e.target.value
                  }))
                }
              ),
              /* @__PURE__ */ jsx(
                LinkButton,
                {
                  theme: "blue",
                  href: route(base_route + "barangmasuks.create"),
                  children: /* @__PURE__ */ jsx("span", { children: "New " })
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "block w-full overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "items-center w-full bg-transparent border-collapse", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx(
                "th",
                {
                  className: "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                  children: /* @__PURE__ */ jsx(
                    Link,
                    {
                      href: "#",
                      onClick: (e) => handleSortLinkClick({
                        sortBy: "id",
                        sortDir: values.sortDir === "asc" ? "desc" : "asc"
                      }),
                      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between", children: [
                        /* @__PURE__ */ jsx("span", { children: "No" }),
                        /* @__PURE__ */ jsx(
                          IconSort,
                          {
                            sortBy: "id",
                            sortDir: values.sortDir || ""
                          }
                        )
                      ] })
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "th",
                {
                  className: "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                  children: /* @__PURE__ */ jsx(
                    Link,
                    {
                      href: "#",
                      onClick: (e) => handleSortLinkClick({
                        sortBy: "created_at",
                        sortDir: values.sortDir === "asc" ? "desc" : "asc"
                      }),
                      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between", children: [
                        /* @__PURE__ */ jsx("span", { children: "Tanggal" }),
                        /* @__PURE__ */ jsx(
                          IconSort,
                          {
                            sortBy: "created_at",
                            sortDir: values.sortDir || ""
                          }
                        )
                      ] })
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "th",
                {
                  className: "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                  children: "No Polisi"
                }
              ),
              /* @__PURE__ */ jsx(
                "th",
                {
                  className: "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                  children: "Kode Pembelian"
                }
              ),
              /* @__PURE__ */ jsx(
                "th",
                {
                  className: "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                  children: "Supplier"
                }
              ),
              /* @__PURE__ */ jsx(
                "th",
                {
                  className: "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                  children: "Jenis"
                }
              ),
              /* @__PURE__ */ jsx(
                "th",
                {
                  className: "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                  children: "Jumlah"
                }
              ),
              /* @__PURE__ */ jsx(
                "th",
                {
                  className: "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                  children: "Jumlah Terima"
                }
              ),
              /* @__PURE__ */ jsx(
                "th",
                {
                  className: "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
                  children: "Options"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: barangmasuks.map(
              ({
                id,
                created_at,
                no_pol,
                pembelian,
                jumlah_muatan,
                jumlah_terima
              }, index) => /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: id }),
                /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: created_at }),
                /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: no_pol }),
                /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: pembelian.kode_pembelian }),
                /* @__PURE__ */ jsxs("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: [
                  /* @__PURE__ */ jsx("i", { className: "fas fa-user text-orange-500 mr-2" }),
                  " ",
                  pembelian.client.nama_client
                ] }),
                /* @__PURE__ */ jsxs("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: [
                  /* @__PURE__ */ jsx("i", { className: "fas fa-box-archive text-orange-500 mr-2" }),
                  " ",
                  pembelian.barang.nama_barang
                ] }),
                /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: jumlah_muatan }),
                /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2", children: jumlah_terima }),
                /* @__PURE__ */ jsx("td", { className: "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 ", children: /* @__PURE__ */ jsxs(MenuDropdown, { children: [
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      href: route(
                        base_route + "barangmasuks.edit",
                        id
                      ),
                      className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-blue-400 transition hover:scale-110 origin-top-left ",
                      type: "button",
                      children: [
                        /* @__PURE__ */ jsx("i", { className: "fas fa-edit" }),
                        /* @__PURE__ */ jsx("span", { children: " Edit" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "#",
                      onClick: (e) => useSwal.confirm({
                        title: "Hapus Data",
                        text: "apakah akan menghapus?"
                      }).then((result) => {
                        if (result.isConfirmed) {
                          handleRemoveData(
                            id
                          );
                        }
                      }),
                      className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-blue-400 transition hover:scale-110 origin-top-left",
                      children: [
                        /* @__PURE__ */ jsx("i", { className: "fas fa-trash" }),
                        /* @__PURE__ */ jsx("span", { children: " Hapus" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      href: "#",
                      onClick: (e) => {
                        prosesLaporan(e, id);
                      },
                      className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-blue-400 transition hover:scale-110 origin-top-left ",
                      children: [
                        /* @__PURE__ */ jsx("i", { className: "fas fa-print" }),
                        /* @__PURE__ */ jsxs("span", { children: [
                          " ",
                          "Laporan Pembelian"
                        ] })
                      ]
                    }
                  )
                ] }) })
              ] }, index)
            ) })
          ] }) }),
          meta.total > meta.per_page ? /* @__PURE__ */ jsx(
            "div",
            {
              className: "flex justify-end px-2 py-1  " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"),
              children: /* @__PURE__ */ jsx(
                Pagination,
                {
                  links: meta.links,
                  labelLinks
                }
              )
            }
          ) : null
        ]
      }
    ),
    barangkeluarId && /* @__PURE__ */ jsx(
      ModalCetakLaporan,
      {
        showModal: showModalLaporan,
        setShowModal: setShowModalLaporan,
        src: route(
          base_route + "barangmasuks.laporan.pembelian",
          barangkeluarId
        )
      }
    )
  ] });
}
export {
  CardTableBarangmasuks as C
};
