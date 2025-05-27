import { jsx, jsxs } from "react/jsx-runtime";
import { C as CardFilterProsespermohonan, a as CardListProsespermohonan } from "./CardListProsespermohonan-f53d3fc7.js";
import { A as AdminLayout } from "./AdminLayout-a2aff99a.js";
import { usePage } from "@inertiajs/react";
import "./PilihStatusprosesperm-50875269.js";
import "@headlessui/react";
import "./SelectSearch-f716b8b3.js";
import "lodash";
import "react-select";
import "tailwind-merge";
import "react";
import "react-use";
import "./Pagination-30af682d.js";
import "classnames";
import "moment";
import "./NotificationDropdown-5fbd4256.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
import "./MenuItem-b9568aaa.js";
const Index = () => {
  const { itemprosespermsOpts, prosespermohonans } = usePage().props;
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-start gap-2", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full md:w-1/3", children: /* @__PURE__ */ jsx(CardFilterProsespermohonan, { itemprosespermsOpts }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full md:w-2/3", children: /* @__PURE__ */ jsx(CardListProsespermohonan, { prosespermohonans }) })
  ] }) });
};
export {
  Index as default
};
