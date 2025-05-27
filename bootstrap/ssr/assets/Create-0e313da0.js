import { jsx, jsxs } from "react/jsx-runtime";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import { L as LoadingButton } from "./LoadingButton-354e4382.js";
import { M as MoneyInput } from "./MoneyInput-87a36109.js";
import { N as NumberInput } from "./NumberInput-35a5f6e8.js";
import { S as SelectSearch } from "./SelectSearch-f716b8b3.js";
import { A as AdminLayout } from "./AdminLayout-a2aff99a.js";
import { usePage, useForm } from "@inertiajs/react";
import "tailwind-merge";
import "classnames";
import "react-number-format";
import "lodash";
import "react-select";
import "./NotificationDropdown-5fbd4256.js";
import "react";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
import "./MenuItem-b9568aaa.js";
const Create = () => {
  const {
    jenismuatanOpts,
    jenismuatanOpt,
    clientOpts,
    barangOpts,
    clientOpt,
    barangOpt,
    base_route
  } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    client_id: "",
    barang_id: "",
    kode_penjualan: "",
    harga_perkg: "0",
    ongkos_perkg: "0",
    jumlah_penjualan: "0",
    barangOpt,
    clientOpt,
    jenismuatanOpt,
    jenis_muatan: jenismuatanOpt.value,
    lunas: true,
    _method: "POST"
  });
  function handleSubmit(e) {
    e.preventDefault();
    post(route(base_route + "penjualans.store"));
  }
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx("div", { className: "flex content-center items-center justify-center h-full", children: /* @__PURE__ */ jsx("div", { className: "w-full lg:w-2/3 px-4", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg shadow-slate-400 rounded-lg bg-blueGray-200 border-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "rounded-t mb-0 px-6 py-6", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-3", children: /* @__PURE__ */ jsx("h6", { className: "text-blueGray-500 text-lg font-bold", children: "New Penjualan" }) }),
      /* @__PURE__ */ jsx("hr", { className: "mt-6 border-b-1 border-blueGray-300" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-auto px-4 lg:px-10 py-10 pt-0", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(
        SelectSearch,
        {
          name: "client_id",
          options: clientOpts,
          onChange: (e) => setData((prev) => ({
            ...prev,
            clientOpt: e ? e : void 0,
            client_id: e ? e.value : ""
          })),
          label: "Pembeli",
          value: data.clientOpt,
          errors: errors.client_id
        }
      ),
      /* @__PURE__ */ jsx(
        SelectSearch,
        {
          name: "barang_id",
          options: barangOpts,
          onChange: (e) => setData((prev) => ({
            ...prev,
            barangOpt: e ? e : void 0,
            barang_id: e ? e.value : "",
            harga_perkg: e ? e.barang.harga_jual : "0"
          })),
          label: "Jenis",
          value: data.barangOpt,
          errors: errors.barang_id
        }
      ),
      /* @__PURE__ */ jsx(
        NumberInput,
        {
          name: "jumlah_penjualan",
          label: "Jumlah (Kg)",
          errors: errors.jumlah_penjualan,
          autoComplete: "off",
          value: data.jumlah_penjualan,
          onValueChange: (e) => setData((prev) => ({
            ...prev,
            jumlah_penjualan: e.value
          }))
        }
      ),
      /* @__PURE__ */ jsx(
        MoneyInput,
        {
          disabled: true,
          name: "harga_perkg",
          label: "Harga/Kg",
          errors: errors.harga_perkg,
          autoComplete: "off",
          value: data.harga_perkg,
          onValueChange: (e) => setData((prev) => ({
            ...prev,
            harga_perkg: e.value
          }))
        }
      ),
      /* @__PURE__ */ jsx(
        MoneyInput,
        {
          name: "ongkos_perkg",
          label: "Ongkos/Kg",
          errors: errors.ongkos_perkg,
          autoComplete: "off",
          value: data.ongkos_perkg,
          onValueChange: (e) => setData((prev) => ({
            ...prev,
            ongkos_perkg: e.value
          }))
        }
      ),
      /* @__PURE__ */ jsx(
        SelectSearch,
        {
          name: "jenis_muatan",
          options: jenismuatanOpts,
          onChange: (e) => setData((prev) => ({
            ...prev,
            jenismuatanOpt: e ? e : void 0,
            jenis_muatan: e ? e.value : ""
          })),
          label: "Satuan",
          value: data.jenismuatanOpt,
          errors: errors.jenis_muatan
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(
          LinkButton,
          {
            theme: "blueGrey",
            href: route(
              base_route + "penjualans.index"
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
  Create as default
};
