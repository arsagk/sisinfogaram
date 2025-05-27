import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { Link, Head } from "@inertiajs/react";
import React from "react";
import Chart from "chart.js/auto";
import { C as CardSocialTraffic } from "./CardSocialTraffic-97520e7d.js";
import { N as NotificationDropdown, U as UserDropdown, a as Navbar, H as HeaderBlank, T as ToastMessages } from "./NotificationDropdown-5fbd4256.js";
import "@popperjs/core";
import "./ResponsiveNavLink-41b4fa07.js";
import "react-hot-toast";
function CardLineChart() {
  React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: (/* @__PURE__ */ new Date()).getFullYear(),
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false
          },
          {
            label: (/* @__PURE__ */ new Date()).getFullYear() - 1,
            fill: false,
            backgroundColor: "#fff",
            borderColor: "#fff",
            data: [40, 68, 86, 74, 56, 60, 87]
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white"
        },
        legend: {
          labels: {
            fontColor: "white"
          },
          align: "end",
          position: "bottom"
        },
        tooltips: {
          mode: "index",
          intersect: false
        },
        hover: {
          mode: "nearest",
          intersect: true
        },
        scales: {
          x: {
            ticks: {
              fontColor: "rgba(255,255,255,.7)"
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: "Month",
              fontColor: "white"
            },
            gridLines: {
              display: false,
              borderDash: [2],
              borderDashOffset: [2],
              color: "rgba(33, 37, 41, 0.3)",
              zeroLineColor: "rgba(0, 0, 0, 0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            }
          },
          y: {
            ticks: {
              fontColor: "rgba(255,255,255,.7)"
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: "Value",
              fontColor: "white"
            },
            gridLines: {
              borderDash: [3],
              borderDashOffset: [3],
              drawBorder: false,
              color: "rgba(255, 255, 255, 0.15)",
              zeroLineColor: "rgba(33, 37, 41, 0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            }
          }
        }
      }
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    var myChart = new Chart(ctx, config);
    return () => {
      myChart.destroy();
    };
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700", children: [
    /* @__PURE__ */ jsx("div", { className: "rounded-t mb-0 px-4 py-3 bg-transparent", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-full flex-grow flex-1", children: [
      /* @__PURE__ */ jsx("h6", { className: "uppercase text-blueGray-100 mb-1 text-xs font-semibold", children: "Overview" }),
      /* @__PURE__ */ jsx("h2", { className: "text-white text-xl font-semibold", children: "Sales value" })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "p-4 flex-auto", children: /* @__PURE__ */ jsx("div", { className: "relative h-350-px", children: /* @__PURE__ */ jsx("canvas", { id: "line-chart" }) }) })
  ] }) });
}
function CardPageVisits({ recentActivities }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded", children: [
    /* @__PURE__ */ jsx("div", { className: "rounded-t mb-0 px-4 py-3 border-0", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center", children: /* @__PURE__ */ jsx("div", { className: "relative w-full px-2 max-w-full flex-grow flex-1", children: /* @__PURE__ */ jsx("h3", { className: "font-semibold text-base text-blueGray-700", children: "Recent Activities" }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "block w-full overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "items-center w-full bg-transparent border-collapse", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left", children: "Tanggal" }),
        /* @__PURE__ */ jsx("th", { className: "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left", children: "Nama Penerima" }),
        /* @__PURE__ */ jsx("th", { className: "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left", children: "Identitas" }),
        /* @__PURE__ */ jsx("th", { className: "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left", children: "Proses" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: recentActivities && recentActivities.map(({ nama_itemprosesperm, identitas, tanggal, catatan_proses_perm, nama_penerima }, idx) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left", children: tanggal }),
        /* @__PURE__ */ jsx("td", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4", children: nama_penerima }),
        /* @__PURE__ */ jsx("td", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4", children: identitas }),
        /* @__PURE__ */ jsx("td", { className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4", children: nama_itemprosesperm })
      ] }, idx)) })
    ] }) })
  ] }) });
}
function UserSidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const currentRoute = route().current();
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("nav", { className: "container-snap md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6", children: /* @__PURE__ */ jsxs("div", { className: "md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent",
        type: "button",
        onClick: () => setCollapseShow("bg-white m-2 py-3 px-6"),
        children: /* @__PURE__ */ jsx("i", { className: "fas fa-bars" })
      }
    ),
    /* @__PURE__ */ jsx(
      Link,
      {
        className: "md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0",
        href: "",
        children: "Notus React"
      }
    ),
    /* @__PURE__ */ jsxs("ul", { className: "md:hidden items-center flex flex-wrap list-none", children: [
      /* @__PURE__ */ jsx("li", { className: "inline-block relative", children: /* @__PURE__ */ jsx(NotificationDropdown, {}) }),
      /* @__PURE__ */ jsx("li", { className: "inline-block relative", children: /* @__PURE__ */ jsx(UserDropdown, {}) })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " + collapseShow,
        children: [
          /* @__PURE__ */ jsx("div", { className: "md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap", children: [
            /* @__PURE__ */ jsx("div", { className: "w-6/12", children: /* @__PURE__ */ jsx(
              Link,
              {
                className: "md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0",
                href: "/",
                children: "Notus React"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "w-6/12 flex justify-end", children: /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent",
                onClick: () => setCollapseShow("hidden"),
                children: /* @__PURE__ */ jsx("i", { className: "fas fa-times" })
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsx("form", { className: "mt-6 mb-4 md:hidden", children: /* @__PURE__ */ jsx("div", { className: "mb-3 pt-0", children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Search",
              className: "border-0 px-3 py-2 h-12 border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
            }
          ) }) }),
          /* @__PURE__ */ jsx("hr", { className: "my-4 md:min-w-full" }),
          /* @__PURE__ */ jsx("h6", { className: "md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline", children: "User Menu" }),
          /* @__PURE__ */ jsx("ul", { className: "md:flex-col md:min-w-full flex flex-col list-none", children: /* @__PURE__ */ jsx("li", { className: "items-center px-2", children: /* @__PURE__ */ jsxs(
            Link,
            {
              className: "text-xs uppercase py-3 font-bold block " + (currentRoute === "user.index" ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-blueGray-700 hover:text-blueGray-500"),
              href: route("user.index"),
              children: [
                /* @__PURE__ */ jsx(
                  "i",
                  {
                    className: "fas fa-tv mr-2 text-sm" + (window.location.href.indexOf("/staf") !== -1 ? "opacity-75" : "text-blueGray-300")
                  }
                ),
                " ",
                "Dashboard"
              ]
            }
          ) }) })
        ]
      }
    )
  ] }) }) });
}
const UserLayout = ({
  children
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(UserSidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative md:ml-64 bg-blueGray-100", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx(HeaderBlank, {}),
      /* @__PURE__ */ jsxs("div", { className: "px-4 md:px-10 mx-auto w-full -m-40 relative h-full", children: [
        /* @__PURE__ */ jsx(ToastMessages, {}),
        children
      ] })
    ] })
  ] });
};
const UserLayout$1 = UserLayout;
function StafDashboard({ auth, traffics, recentActivities }) {
  return /* @__PURE__ */ jsxs(
    UserLayout$1,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap", children: [
            /* @__PURE__ */ jsx("div", { className: "w-full xl:w-8/12 mb-12 xl:mb-0 px-4", children: /* @__PURE__ */ jsx(CardLineChart, {}) }),
            /* @__PURE__ */ jsx("div", { className: "w-full xl:w-4/12 px-4", children: /* @__PURE__ */ jsx(CardSocialTraffic, { traffics }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap mt-4", children: /* @__PURE__ */ jsx("div", { className: "w-full xl:w-8/12 mb-12 xl:mb-0 px-4", children: /* @__PURE__ */ jsx(CardPageVisits, { recentActivities }) }) })
        ] })
      ]
    }
  );
}
export {
  StafDashboard as default
};
