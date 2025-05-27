import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState } from "react";
const MenuItem = ({ expanded = true, label, children }) => {
  const [expand, setExpand] = useState(expanded);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("ul", { className: `md:flex-col md:min-w-full flex flex-col list-none relative`, children: [
    /* @__PURE__ */ jsx("li", { className: "items-center px-2 " + (expand ? "bg-lightBlue-100 rounded-md " : ""), children: /* @__PURE__ */ jsxs(
      "a",
      {
        href: "#",
        className: "text-xs uppercase py-3 font-bold flex flex-row justify-start items-center w-full transition-all duration-150 " + (window.location.href.indexOf("/admin/settings") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-blueGray-700 hover:text-blueGray-500"),
        onClick: (e) => {
          e.preventDefault();
          setExpand(!expand);
        },
        children: [
          /* @__PURE__ */ jsx(
            "i",
            {
              className: "fas fa-tools mr-2 text-sm " + (expand ? "opacity-75" : "text-blueGray-300")
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex-1 uppercase w-auto", children: label }),
          /* @__PURE__ */ jsx("i", { className: `fa-solid ${expand ? "fa-chevron-up" : "fa-chevron-down"}` })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: `relative`, children: /* @__PURE__ */ jsx("div", { className: `duration-300 delay-75 transition-all origin-top ease-in-out overflow-hidden relative ${expand ? "h-full scale-y-100" : "h-0 scale-y-0"}`, children }) })
  ] }) });
};
export {
  MenuItem as M
};
