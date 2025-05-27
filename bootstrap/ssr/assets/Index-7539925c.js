import { jsx } from "react/jsx-runtime";
import { C as CardTablePenjualans } from "./CardTablePenjualans-880b8132.js";
import { S as StafLayout } from "./StafLayout-7f0e02d0.js";
import "react";
import "tailwind-merge";
import "@inertiajs/react";
import "react-use";
import "lodash";
import "./useSwal-3ab423ea.js";
import "sweetalert2";
import "./Pagination-30af682d.js";
import "classnames";
import "./InputSearch-6032da7e.js";
import "./LinkButton-a291522b.js";
import "./NotificationDropdown-5fbd4256.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
import "./MenuItem-b9568aaa.js";
const Index = ({
  penjualans,
  base_route
}) => {
  const { data, meta, links } = penjualans;
  return /* @__PURE__ */ jsx(StafLayout, { children: /* @__PURE__ */ jsx(
    CardTablePenjualans,
    {
      color: "dark",
      penjualans: data,
      meta,
      labelLinks: links,
      base_route
    }
  ) });
};
export {
  Index as default
};
