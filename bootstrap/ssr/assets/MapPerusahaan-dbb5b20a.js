import { jsx, Fragment } from "react/jsx-runtime";
function MapPerusahaan({ pengaturan }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "relative w-full rounded h-full p-2 bg-white", children: /* @__PURE__ */ jsx(
    "iframe",
    {
      src: pengaturan.map_url,
      className: "border-0 w-full h-full",
      allowFullScreen: false,
      loading: "lazy"
    }
  ) }) });
}
export {
  MapPerusahaan as M
};
