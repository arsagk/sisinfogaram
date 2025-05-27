import { jsxs, jsx } from "react/jsx-runtime";
import React, { useRef, useEffect } from "react";
import { createPopper } from "@popperjs/core";
const MenuDropdown = ({ children }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const wrapperRef = useRef(null);
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-end",
      strategy: "fixed"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      var _a;
      if (wrapperRef.current && //@ts-ignore
      ((_a = wrapperRef.current) == null ? void 0 : _a.contains(event.target)))
        ;
      else {
        closeDropdownPopover();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  return /* @__PURE__ */ jsxs("div", { ref: wrapperRef, children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        className: "text-white block",
        href: "#pablo",
        ref: btnDropdownRef,
        onClick: (e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        },
        children: /* @__PURE__ */ jsx("div", { className: "items-center flex flex-row justify-center", children: /* @__PURE__ */ jsx("i", { className: "fas fa-ellipsis" }) })
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: popoverDropdownRef,
        className: (dropdownPopoverShow ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48",
        children
      }
    )
  ] });
};
export {
  MenuDropdown as M
};
