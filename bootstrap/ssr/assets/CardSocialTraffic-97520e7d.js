import { jsx, Fragment, jsxs } from "react/jsx-runtime";
function CardSocialTraffic({ traffics }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded", children: [
    /* @__PURE__ */ jsx("div", { className: "rounded-t mb-0 px-4 py-3 border-0", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center", children: /* @__PURE__ */ jsx("div", { className: "relative w-full max-w-full flex-grow flex-1", children: /* @__PURE__ */ jsx("h3", { className: "font-semibold text-base text-blueGray-700", children: "Trafik Penjualan" }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "block w-full overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "items-center w-full bg-transparent border-collapse", children: [
      /* @__PURE__ */ jsx("thead", { className: "thead-light", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left", children: "Name" }),
        /* @__PURE__ */ jsx("th", { className: "px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left", children: "Jumlah" }),
        /* @__PURE__ */ jsx("th", { className: "px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: traffics && traffics.map(
        ({
          nama_barang,
          jumlah,
          percentage,
          bg_color
        }, idx) => /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left", children: nama_barang }),
          /* @__PURE__ */ jsx("td", { className: "border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4", children: jumlah }),
          /* @__PURE__ */ jsx("td", { className: "border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxs("span", { className: "mr-2", children: [
              percentage,
              "%"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "relative w-full", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden h-2 text-xs flex rounded bg-red-200", children: /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  width: `${percentage}%`,
                  backgroundColor: bg_color
                },
                className: `shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center `
              }
            ) }) })
          ] }) })
        ] }, idx)
      ) })
    ] }) })
  ] }) });
}
export {
  CardSocialTraffic as C
};
