import { jsx, jsxs } from "react/jsx-runtime";
import { I as Input } from "./Input-e0cb790e.js";
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
  const { pengaturan, base_route } = usePage().props;
  const { data, setData, errors, post, processing, progress } = useForm({
    nama_perusahaan: pengaturan.nama_perusahaan || "",
    alamat_perusahaan: pengaturan.alamat_perusahaan || "",
    telp_perusahaan: pengaturan.telp_perusahaan || "",
    email_perusahaan: pengaturan.email_perusahaan || "",
    kode_pos: pengaturan.kode_pos || "",
    map_url: pengaturan.map_url || "",
    image_kop: "",
    ximage_kop: pengaturan.image_kop || "",
    _method: "PUT"
  });
  function handleSubmit(e) {
    e.preventDefault();
    post(route(base_route + "pengaturans.update", pengaturan.id));
  }
  const firstInput = useRef(null);
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx("div", { className: "flex content-center items-center justify-center h-full", children: /* @__PURE__ */ jsx("div", { className: "w-full lg:w-2/3 px-4", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg shadow-slate-400 rounded-lg bg-blueGray-200 border-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "rounded-t mb-0 px-6 py-6", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-3", children: /* @__PURE__ */ jsx("h6", { className: "text-blueGray-500 text-lg font-bold", children: "Pengaturan Sistem" }) }),
      /* @__PURE__ */ jsx("hr", { className: "mt-6 border-b-1 border-blueGray-300" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-auto px-4 lg:px-10 py-10 pt-0", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          ref: firstInput,
          focused: true,
          name: "nama_perusahaan",
          label: "Nama Perusahaan",
          errors: errors.nama_perusahaan,
          value: data.nama_perusahaan,
          onChange: (e) => setData(
            "nama_perusahaan",
            e.target.value
          )
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          name: "alamat_perusahaan",
          label: "Alamat Perusahaan",
          errors: errors.alamat_perusahaan,
          value: data.alamat_perusahaan,
          onChange: (e) => setData(
            "alamat_perusahaan",
            e.target.value
          )
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          name: "telp_perusahaan",
          label: "Telp",
          errors: errors.telp_perusahaan,
          value: data.telp_perusahaan,
          onChange: (e) => setData(
            "telp_perusahaan",
            e.target.value
          )
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          name: "email_perusahaan",
          label: "Email",
          errors: errors.email_perusahaan,
          value: data.email_perusahaan,
          onChange: (e) => setData(
            "email_perusahaan",
            e.target.value
          )
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          name: "kode_pos",
          label: "Kode Pos",
          errors: errors.kode_pos,
          value: data.kode_pos,
          onChange: (e) => setData("kode_pos", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          name: "map_url",
          label: "Google Map",
          errors: errors.map_url,
          value: data.map_url,
          onChange: (e) => setData("map_url", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "file",
          name: "image_kop",
          label: "Logo Perusahaan",
          errors: errors.image_kop,
          onChange: (e) => setData("image_kop", e.target.files[0])
        }
      ),
      progress && /* @__PURE__ */ jsxs(
        "progress",
        {
          value: progress.percentage,
          max: "100",
          children: [
            progress.percentage,
            "%"
          ]
        }
      ),
      data.ximage_kop ? /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-6/12 sm:w-4/12 px-4", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/storage/" + data.ximage_kop,
          alt: "...",
          className: "shadow rounded-full max-w-full h-auto align-middle border-none"
        }
      ) }) }) : null,
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx(
        LoadingButton,
        {
          theme: "black",
          loading: processing,
          type: "submit",
          children: /* @__PURE__ */ jsx("span", { children: "Simpan" })
        }
      ) })
    ] }) })
  ] }) }) }) });
};
export {
  Edit as default
};
