import { jsx, jsxs } from "react/jsx-runtime";
import { I as Input } from "./Input-e0cb790e.js";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import { L as LoadingButton } from "./LoadingButton-354e4382.js";
import { N as NumberInput } from "./NumberInput-35a5f6e8.js";
import { S as SelectSearch } from "./SelectSearch-f716b8b3.js";
import { A as AdminLayout } from "./AdminLayout-a2aff99a.js";
import { usePage, useForm } from "@inertiajs/react";
import { useRef } from "react";
import "tailwind-merge";
import "classnames";
import "react-number-format";
import "lodash";
import "react-select";
import "./NotificationDropdown-5fbd4256.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
import "./MenuItem-b9568aaa.js";
const Edit = () => {
  const {
    barangkeluar,
    penjualanOpts,
    sopirOpt,
    sopirOpts,
    penjualanOpt,
    base_route
  } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    penjualan_id: barangkeluar.penjualan_id || "",
    no_daftar: barangkeluar.no_daftar || "",
    jumlah_keluar: barangkeluar.jumlah_keluar || "",
    jumlah_muatan: barangkeluar.jumlah_muatan || "",
    no_pol: barangkeluar.no_pol || "",
    penjualanOpt: penjualanOpt || void 0,
    sopirOpt,
    sopir_id: barangkeluar.sopir_id || "",
    _method: "PUT"
  });
  function handleSubmit(e) {
    e.preventDefault();
    post(route(base_route + "barangkeluars.update", barangkeluar.id));
  }
  const firstInput = useRef(null);
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx("div", { className: "flex content-center items-center justify-center h-full", children: /* @__PURE__ */ jsx("div", { className: "w-full lg:w-2/3 px-4", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg shadow-slate-400 rounded-lg bg-blueGray-200 border-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "rounded-t mb-0 px-6 py-6", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-3", children: /* @__PURE__ */ jsx("h6", { className: "text-blueGray-500 text-lg font-bold", children: "Edit Barang Keluar" }) }),
      /* @__PURE__ */ jsx("hr", { className: "mt-6 border-b-1 border-blueGray-300" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-auto px-4 lg:px-10 py-10 pt-0", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          ref: firstInput,
          focused: true,
          name: "no_pol",
          label: "NoPol",
          errors: errors.no_pol,
          value: data.no_pol,
          onChange: (e) => setData("no_pol", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(
        SelectSearch,
        {
          name: "sopir_id",
          options: sopirOpts,
          onChange: (e) => setData((prev) => ({
            ...prev,
            sopirOpt: e ? e : void 0,
            sopir_id: e ? e.value : ""
          })),
          label: "Sopir",
          value: data.sopirOpt,
          errors: errors.sopir_id
        }
      ),
      /* @__PURE__ */ jsx(
        SelectSearch,
        {
          name: "client_id",
          options: penjualanOpts,
          onChange: (e) => setData((prev) => ({
            ...prev,
            penjualanOpt: e ? e : void 0,
            penjualan_id: e ? e.value : ""
          })),
          label: "Penjualan",
          value: data.penjualanOpt,
          errors: errors.penjualan_id
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          disabled: true,
          name: "client_id",
          label: "Supplier",
          autoComplete: "off",
          value: penjualanOpt.penjualan.client.nama_client
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          disabled: true,
          name: "barang_id",
          label: "Jenis",
          autoComplete: "off",
          value: penjualanOpt.penjualan.barang.nama_barang
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          disabled: true,
          name: "jenis_muatan",
          label: "Jenis Muatan",
          autoComplete: "off",
          value: penjualanOpt.penjualan.jenis_muatan
        }
      ),
      /* @__PURE__ */ jsx(
        NumberInput,
        {
          name: "jumlah_muatan",
          label: "Jumlah Muatan",
          errors: errors.jumlah_muatan,
          autoComplete: "off",
          value: data.jumlah_muatan,
          onValueChange: (e) => setData((prev) => ({
            ...prev,
            jumlah_muatan: e.value
          }))
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          disabled: true,
          name: "jumlah_penjualan",
          label: "Jumlah Penjualan",
          autoComplete: "off",
          value: penjualanOpt.penjualan.jumlah_penjualan
        }
      ),
      /* @__PURE__ */ jsx(
        NumberInput,
        {
          name: "jumlah_penjualan",
          label: "Jumlah Terima (Kg)",
          errors: errors.jumlah_keluar,
          autoComplete: "off",
          value: data.jumlah_keluar,
          onValueChange: (e) => setData((prev) => ({
            ...prev,
            jumlah_keluar: e.value
          }))
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(
          LinkButton,
          {
            theme: "blueGrey",
            href: route(
              base_route + "barangkeluars.index"
            ),
            children: /* @__PURE__ */ jsx("span", { children: "Kembali" })
          }
        ),
        /* @__PURE__ */ jsx(
          LoadingButton,
          {
            theme: "black",
            loading: processing,
            type: "submit",
            children: /* @__PURE__ */ jsx("span", { children: "Simpan" })
          }
        )
      ] })
    ] }) })
  ] }) }) }) });
};
export {
  Edit as default
};
