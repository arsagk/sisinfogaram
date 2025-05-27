import { jsx, jsxs } from "react/jsx-runtime";
import { I as Input } from "./Input-e0cb790e.js";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import { L as LoadingButton } from "./LoadingButton-354e4382.js";
import { M as MoneyInput } from "./MoneyInput-87a36109.js";
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
const Create = () => {
  const { satuanOpts, satuanOpt, base_route } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    nama_barang: "",
    alamat_barang: "",
    kode_barang: "",
    harga_beli: "0",
    harga_jual: "0",
    satuanOpt,
    satuan: satuanOpt.value,
    active: true,
    _method: "POST"
  });
  function handleSubmit(e) {
    e.preventDefault();
    post(route(base_route + "barangs.store"));
  }
  const firstInput = useRef(null);
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx("div", { className: "flex content-center items-center justify-center h-full", children: /* @__PURE__ */ jsx("div", { className: "w-full lg:w-2/3 px-4", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg shadow-slate-400 rounded-lg bg-blueGray-200 border-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "rounded-t mb-0 px-6 py-6", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-3", children: /* @__PURE__ */ jsx("h6", { className: "text-blueGray-500 text-lg font-bold", children: "New Barang" }) }),
      /* @__PURE__ */ jsx("hr", { className: "mt-6 border-b-1 border-blueGray-300" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-auto px-4 lg:px-10 py-10 pt-0", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          ref: firstInput,
          focused: true,
          name: "nama_barang",
          label: "Nama Barang",
          errors: errors.nama_barang,
          value: data.nama_barang,
          onChange: (e) => setData("nama_barang", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          name: "kode_barang",
          label: "Kode Barang",
          errors: errors.kode_barang,
          value: data.kode_barang,
          type: "text",
          onChange: (e) => setData("kode_barang", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(
        SelectSearch,
        {
          name: "satuan",
          options: satuanOpts,
          onChange: (e) => setData((prev) => ({
            ...prev,
            satuanOpt: e ? e : void 0,
            satuan: e ? e.value : ""
          })),
          label: "Satuan",
          value: data.satuanOpt,
          errors: errors.satuan
        }
      ),
      /* @__PURE__ */ jsx(
        MoneyInput,
        {
          name: "harga_beli",
          label: "Harga Beli/Kg",
          errors: errors.harga_beli,
          autoComplete: "off",
          value: data.harga_beli,
          onValueChange: (e) => setData((prev) => ({
            ...prev,
            harga_beli: e.value
          }))
        }
      ),
      /* @__PURE__ */ jsx(
        MoneyInput,
        {
          name: "harga_jual",
          label: "Harga Jual/Kg",
          errors: errors.harga_jual,
          autoComplete: "off",
          value: data.harga_jual,
          onValueChange: (e) => setData((prev) => ({
            ...prev,
            harga_jual: e.value
          }))
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(
          LinkButton,
          {
            theme: "blueGrey",
            href: route(
              base_route + "barangs.index"
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
