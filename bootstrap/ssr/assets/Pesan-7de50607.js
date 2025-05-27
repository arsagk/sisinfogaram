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
const Pesan = () => {
  const { user } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    user_id: user.id,
    title: "",
    body: "",
    _method: "POST"
  });
  function handleSubmit(e) {
    e.preventDefault();
    post(route("send.message.mobile"));
  }
  const firstInput = useRef(null);
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx("div", { className: "flex content-center items-center justify-center h-full", children: /* @__PURE__ */ jsx("div", { className: "w-full lg:w-2/3 px-4", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg shadow-slate-400 rounded-lg bg-blueGray-200 border-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "rounded-t mb-0 px-6 py-6", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-3", children: /* @__PURE__ */ jsx("h6", { className: "text-blueGray-500 text-lg font-bold", children: "Kirim Pesan" }) }),
      /* @__PURE__ */ jsx("hr", { className: "mt-6 border-b-1 border-blueGray-300" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-auto px-4 lg:px-10 py-10 pt-0", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          ref: firstInput,
          focused: true,
          name: "title",
          label: "Title",
          errors: errors.title,
          value: data.title,
          onChange: (e) => setData("title", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          name: "body",
          label: "Body",
          errors: errors.body,
          value: data.body,
          onChange: (e) => setData("body", e.target.value)
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(
          LinkButton,
          {
            theme: "blueGrey",
            href: route("admin.users.index"),
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
  Pesan as default
};
