import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { A as AdminLayout } from "./AdminLayout-a2aff99a.js";
import { C as CardSocialTraffic } from "./CardSocialTraffic-97520e7d.js";
import { M as MapPerusahaan } from "./MapPerusahaan-dbb5b20a.js";
import "./NotificationDropdown-5fbd4256.js";
import "react";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
import "./MenuItem-b9568aaa.js";
function Dashboard({
  auth,
  traffics,
  recentActivities,
  pengaturan
}) {
  console.log(traffics);
  return /* @__PURE__ */ jsxs(
    AdminLayout,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap", children: [
            /* @__PURE__ */ jsx("div", { className: "w-full xl:w-3/5 mb-12 xl:mb-0 px-4 h-96", children: /* @__PURE__ */ jsx(MapPerusahaan, { pengaturan }) }),
            /* @__PURE__ */ jsx("div", { className: "w-full xl:w-2/5 px-4", children: /* @__PURE__ */ jsx(CardSocialTraffic, { traffics }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap mt-4" })
        ] })
      ]
    }
  );
}
export {
  Dashboard as default
};
