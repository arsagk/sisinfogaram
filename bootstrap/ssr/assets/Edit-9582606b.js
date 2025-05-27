import { jsx, jsxs } from "react/jsx-runtime";
import { I as Input } from "./Input-e0cb790e.js";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import { L as LoadingButton } from "./LoadingButton-354e4382.js";
import { S as SelectSearch } from "./SelectSearch-f716b8b3.js";
import { A as AdminLayout } from "./AdminLayout-a2aff99a.js";
import { usePage, useForm } from "@inertiajs/react";
import { useRef } from "react";
import "tailwind-merge";
import "classnames";
import "lodash";
import "react-select";
import "./NotificationDropdown-5fbd4256.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
import "./MenuItem-b9568aaa.js";
const Edit = () => {
  const { tipeclientOpts, tipeclientOpt, base_route, client } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    nama_client: client.nama_client || "",
    alamat_client: client.alamat_client || "",
    no_telp: client.no_telp || "",
    tipeclientOpt,
    tipe_client: client.tipe_client || tipeclientOpt.value,
    active: client.active || true,
    _method: "PUT"
  });
  function handleSubmit(e) {
    e.preventDefault();
    post(route(base_route + "clients.update", client.id));
  }
  const firstInput = useRef(null);
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx("div", { className: "flex content-center items-center justify-center h-full", children: /* @__PURE__ */ jsx("div", { className: "w-full lg:w-2/3 px-4", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg shadow-slate-400 rounded-lg bg-blueGray-200 border-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "rounded-t mb-0 px-6 py-6", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-3", children: /* @__PURE__ */ jsx("h6", { className: "text-blueGray-500 text-lg font-bold", children: "Edit Client" }) }),
      /* @__PURE__ */ jsx("hr", { className: "mt-6 border-b-1 border-blueGray-300" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-auto px-4 lg:px-10 py-10 pt-0", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          ref: firstInput,
          focused: true,
          name: "nama_client",
          label: "Nama Client",
          errors: errors.nama_client,
          value: data.nama_client,
          onChange: (e) => setData("nama_client", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          name: "no_telp",
          label: "No Telp",
          errors: errors.no_telp,
          value: data.no_telp,
          type: "text",
          onChange: (e) => setData("no_telp", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          name: "alamat_client",
          label: "Alamat",
          errors: errors.alamat_client,
          value: data.alamat_client,
          type: "text",
          onChange: (e) => setData("alamat_client", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(
        SelectSearch,
        {
          name: "tipe_client",
          options: tipeclientOpts,
          onChange: (e) => setData((prev) => ({
            ...prev,
            tipeclientOpt: e ? e : void 0,
            tipe_client: e ? e.value : ""
          })),
          label: "Tipe Client",
          value: data.tipeclientOpt,
          errors: errors.tipe_client
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxs("label", { className: "inline-flex items-center cursor-pointer", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "customCheckLogin",
            type: "checkbox",
            className: "form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150",
            checked: data.active,
            onChange: (e) => setData(
              "active",
              e.target.checked
            )
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm font-semibold text-blueGray-600", children: "Active" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(
          LinkButton,
          {
            theme: "blueGrey",
            href: route(
              base_route + "clients.index"
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
