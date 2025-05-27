import { jsx } from "react/jsx-runtime";
import { A as AdminLayout } from "./AdminLayout-a2aff99a.js";
import { C as CardTablePembelians } from "./CardTablePembelians-03178944.js";
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
const Index = ({
  pembelians,
  base_route
}) => {
  const { data, meta, links } = pembelians;
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx(
    CardTablePembelians,
    {
      color: "dark",
      pembelians: data,
      meta,
      labelLinks: links,
      base_route
    }
  ) });
};
export {
  Index as default
};
