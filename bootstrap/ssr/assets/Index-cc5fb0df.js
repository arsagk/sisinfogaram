import { jsx } from "react/jsx-runtime";
import { A as AdminLayout } from "./AdminLayout-a2aff99a.js";
import { C as CardTableBarangkeluars } from "./CardTableBarangkeluars-f67df574.js";
import "./NotificationDropdown-5fbd4256.js";
import "react";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "@inertiajs/react";
import "react-hot-toast";
import "./MenuItem-b9568aaa.js";
import "tailwind-merge";
import "react-use";
import "lodash";
import "./useSwal-3ab423ea.js";
import "sweetalert2";
import "./Pagination-30af682d.js";
import "classnames";
import "./InputSearch-6032da7e.js";
import "./LinkButton-a291522b.js";
import "./ModalCetakLaporan-1f197389.js";
import "./Modal-1ab71745.js";
import "@headlessui/react";
import "./bootstrap-37cb65ea.js";
import "axios";
import "react-dom";
import "@emotion/react";
import "@emotion/cache";
import "react-loader-spinner";
import "./MenuDropdown-0a345ccf.js";
const Index = ({
  barangkeluars,
  base_route,
  is_admin
}) => {
  const { data, meta, links } = barangkeluars;
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx(
    CardTableBarangkeluars,
    {
      color: "dark",
      barangkeluars: data,
      meta,
      labelLinks: links,
      base_route,
      is_admin
    }
  ) });
};
export {
  Index as default
};
