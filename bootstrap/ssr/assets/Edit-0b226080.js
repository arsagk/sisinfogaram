import { jsx, jsxs } from "react/jsx-runtime";
import { I as Input } from "./Input-e0cb790e.js";
import { L as LinkButton } from "./LinkButton-a291522b.js";
import { L as LoadingButton } from "./LoadingButton-354e4382.js";
import { A as AdminLayout } from "./AdminLayout-a2aff99a.js";
import { usePage, useForm } from "@inertiajs/react";
import { useRef } from "react";
import "tailwind-merge";
import "classnames";
import "./NotificationDropdown-5fbd4256.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
import "./MenuItem-b9568aaa.js";
const Edit = () => {
  const { tipesopirOpts, tipesopirOpt, base_route, sopir } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    nama_sopir: sopir.nama_sopir || "",
    alamat_sopir: sopir.alamat_sopir || "",
    no_telp: sopir.no_telp || "",
    _method: "PUT"
  });
  function handleSubmit(e) {
    e.preventDefault();
    post(route(base_route + "sopirs.update", sopir.id));
  }
  const firstInput = useRef(null);
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx("div", { className: "flex content-center items-center justify-center h-full", children: /* @__PURE__ */ jsx("div", { className: "w-full lg:w-2/3 px-4", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg shadow-slate-400 rounded-lg bg-blueGray-200 border-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "rounded-t mb-0 px-6 py-6", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-3", children: /* @__PURE__ */ jsx("h6", { className: "text-blueGray-500 text-lg font-bold", children: "Edit Sopir" }) }),
      /* @__PURE__ */ jsx("hr", { className: "mt-6 border-b-1 border-blueGray-300" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-auto px-4 lg:px-10 py-10 pt-0", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          ref: firstInput,
          focused: true,
          name: "nama_sopir",
          label: "Nama Sopir",
          errors: errors.nama_sopir,
          value: data.nama_sopir,
          onChange: (e) => setData("nama_sopir", e.target.value)
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
          name: "alamat_sopir",
          label: "Alamat",
          errors: errors.alamat_sopir,
          value: data.alamat_sopir,
          type: "text",
          onChange: (e) => setData("alamat_sopir", e.target.value)
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(
          LinkButton,
          {
            theme: "blueGrey",
            href: route(
              base_route + "sopirs.index"
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
