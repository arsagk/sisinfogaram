import { jsx, jsxs } from "react/jsx-runtime";
import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
function Modal({ children, show = false, maxWidth = "2xl", closeable = true, title, onClose = () => {
} }) {
  const close = () => {
    if (closeable) {
      onClose();
    }
  };
  const maxWidthClass = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl"
  }[maxWidth];
  return /* @__PURE__ */ jsx(Transition, { show, as: Fragment, leave: "duration-200", children: /* @__PURE__ */ jsxs(
    Dialog,
    {
      as: "div",
      id: "modal",
      className: "fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",
      onClose: close,
      children: [
        /* @__PURE__ */ jsx(
          Transition.Child,
          {
            as: Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gray-500/75" })
          }
        ),
        /* @__PURE__ */ jsx(
          Transition.Child,
          {
            as: Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            enterTo: "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            children: /* @__PURE__ */ jsxs(
              Dialog.Panel,
              {
                className: `mb-6 bg-white rounded-lg shadow-xl transform transition-all sm:w-full sm:mx-auto overflow-visible ${maxWidthClass} `,
                children: [
                  title ? /* @__PURE__ */ jsx(
                    Dialog.Title,
                    {
                      as: "h3",
                      className: "text-lg font-medium leading-6 text-gray-900",
                      children: title
                    }
                  ) : null,
                  children
                ]
              }
            )
          }
        )
      ]
    }
  ) });
}
export {
  Modal as M
};
